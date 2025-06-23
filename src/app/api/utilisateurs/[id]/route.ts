import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'
import path from 'path'
import fs from 'fs'
import { IncomingForm, Files, Fields } from 'formidable'
import { promisify } from 'util'

// Désactiver bodyParser pour utiliser formidable
export const config = {
  api: {
    bodyParser: false,
  },
}

// Fonction de parsing du formulaire avec formidable
const parseForm = async (req: Request): Promise<{ fields: Fields; files: Files }> => {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), 'public/uploads'),
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024, // 1 Mo
    multiples: false,
  })

  const parse = promisify(form.parse.bind(form))
  return await parse(req as any) // 'any' ici uniquement pour le cast du req dans parse
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const { fields, files } = await parseForm(req)
    const { nom, prenom, email, password, role, departementId } = fields
    const image = files.image

    if (!nom || !prenom || !email || !password || !role) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { id } })
    if (!user) {
      return NextResponse.json({ message: 'Utilisateur introuvable' }, { status: 404 })
    }

    let imagePath = user.image // Par défaut, on garde l’image actuelle

    if (image) {
      if (Array.isArray(image)) {
        return NextResponse.json({ message: 'Une seule image autorisée' }, { status: 400 })
      }

      if (image.size > 1_048_576) {
        fs.unlinkSync(image.filepath)
        return NextResponse.json({ message: 'Image trop volumineuse (> 1 Mo)' }, { status: 400 })
      }

      // Supprimer l’ancienne image si elle existe
      if (user.image) {
        const oldImagePath = path.join(process.cwd(), 'public', user.image)
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath)
        }
      }

      const filename = path.basename(image.filepath)
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

    return NextResponse.json(updatedUser, { status: 200 })
  } catch (error) {
    console.error('Erreur serveur PUT:', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}

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
    // Supprimer l'image associée si elle existe
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
