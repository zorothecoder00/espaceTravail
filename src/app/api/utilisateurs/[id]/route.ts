import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'   
import path from 'path'
import fs from 'fs'
import { IncomingForm, Files, Fields, File } from 'formidable'
import type { IncomingMessage } from 'http'
import cloudinary from '@/lib/cloudinary' // 👈 AJOUTÉ

// Désactiver bodyParser pour pouvoir parser les fichiers
export const config = {
  api: {
    bodyParser: false,
  },
}

// Fonction de parsing du formulaire avec formidable (typée)
const parseForm = (req: IncomingMessage): Promise<{ fields: Fields; files: Files }> => {
  const uploadDir = path.join('/tmp', 'uploads') // ✅ uniquement autorisé sur Vercel

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  const form = new IncomingForm({
    uploadDir,  
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024, // 1 Mo
    multiples: false,
  })

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        departement: { select: { id: true, nom: true } },
        projetsDiriges: { select: { id: true, nom: true } },
        taches: true,
        projets: true,
        partages: true,
        partagesEnTantQuePartageur: true,
        notificationsEmises: true,
        notifications: true,
      }
    })

    if (!user) {
      return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
    }     

    return NextResponse.json({ data: user }, { status: 200 }) // ← structure avec data
  } catch (error) {
    console.error('Erreur serveur GET:', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}

// ✅ PUT mis à jour avec Cloudinary
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const { fields, files } = await parseForm(req as unknown as IncomingMessage)

    const { nom, prenom, email, password, role, departementId } = fields
    const image = files.image

    if (!nom || !prenom || !email || !password || !role) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
    }

    const roleValue = role.toString()
    if (!Object.values(Role).includes(roleValue as Role)) {
      return NextResponse.json({ message: 'Rôle invalide' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { id } })
    if (!user) {
      return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
    }

    let imagePath = user.image

    if (image) {
      if (Array.isArray(image)) {
        return NextResponse.json({ message: 'Une seule image autorisée' }, { status: 400 })
      }

      const file = image as File

      if (file.size > 5 * 1024 * 1024) {
        fs.unlinkSync(file.filepath)
        return NextResponse.json({ message: 'Image trop volumineuse (> 5 Mo)' }, { status: 400 })
      }

      // ✅ Upload vers Cloudinary
      const uploaded = await cloudinary.uploader.upload(file.filepath, {
        folder: 'utilisateurs',
        resource_type: 'image',
      })

      fs.unlinkSync(file.filepath) // Supprimer fichier local temporaire
      imagePath = uploaded.secure_url
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        nom: nom.toString().trim(),
        prenom: prenom.toString().trim(),
        email: email.toString().trim(),
        password: await bcrypt.hash(password.toString().trim(), 10),
        role: role.toString() as Role,
        departementId: departementId ? parseInt(departementId.toString()) : null,
        image: imagePath,
      },
    })

    return NextResponse.json({ data: updatedUser }, { status: 200 })
  } catch (error) {
    console.error('Erreur serveur PUT:', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}

// DELETE — suppression d’un utilisateur
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) {  
    return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
  }  

  try {
    // Supprimer l'image si elle existe
    if (user.image) {
      const imagePath = path.join('/tmp', 'uploads', user.image)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    }

    await prisma.user.delete({ where: { id } })
    return NextResponse.json({ message: 'Utilisateur supprimé avec succès' }, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}

