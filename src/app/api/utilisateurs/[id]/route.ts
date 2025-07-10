import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'
import path from 'path'
import fs from 'fs'
import { IncomingForm, Files, Fields, File } from 'formidable'
import type { IncomingMessage } from 'http'

// Désactiver bodyParser pour pouvoir parser les fichiers
export const config = {
  api: {
    bodyParser: false,
  },
}

// Fonction de parsing du formulaire avec formidable (typée)
const parseForm = (req: IncomingMessage): Promise<{ fields: Fields; files: Files }> => {
  const uploadDir = path.join(process.cwd(), 'public/uploads')

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

// PUT — mise à jour d'un utilisateur (avec image)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    // On caste la Request en IncomingMessage pour formidable
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

    let imagePath = user.image // garder l’image actuelle par défaut

    if (image) {
      if (Array.isArray(image)) {
        return NextResponse.json({ message: 'Une seule image autorisée' }, { status: 400 })
      }

      // image est de type File
      const file = image as File

      if (file.size > 1_048_576) {
        fs.unlinkSync(file.filepath)
        return NextResponse.json({ message: 'Image trop volumineuse (> 1 Mo)' }, { status: 400 })
      }

      if (user.image) {
        const oldImagePath = path.join(process.cwd(), 'public', user.image)
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
      }

      const filename = path.basename(file.filepath)
      imagePath = `/uploads/${filename}`
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
      const imagePath = path.join(process.cwd(), 'public', user.image)
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

