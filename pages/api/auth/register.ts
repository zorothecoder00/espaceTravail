import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'   
import { IncomingForm, File } from 'formidable'
import fs from 'fs' 
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export const config = {
  api: {
    bodyParser: false, // ⚠️ obligatoire pour utiliser formidable
  },
}

type ParsedForm = {  
  fields: {
    nom: string
    prenom: string
    email: string
    password: string
    departementId?: string
  }
  files: {
    image?: File
  }
}

function parseForm(req: NextApiRequest): Promise<ParsedForm> {
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
      if (err) return reject(err)

      const getField = (f: string | string[] | undefined) =>
        Array.isArray(f) ? f[0] : f || ''

      resolve({
        fields: {
          nom: getField(fields.nom),
          prenom: getField(fields.prenom),
          email: getField(fields.email),
          password: getField(fields.password),
          departementId: getField(fields.departementId),
        },
        files: {
          image: Array.isArray(files.image) ? files.image[0] : files.image,
        },
      })
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  try {
    const { fields, files } = await parseForm(req)

    const { nom, prenom, email, password, departementId } = fields
    const image = files.image

    if (!nom || !prenom || !email || !password) {
      return res.status(400).json({ message: 'Tous les champs sont requis' })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      if (image?.filepath && fs.existsSync(image.filepath)) fs.unlinkSync(image.filepath)
      return res.status(400).json({ message: 'Utilisateur déjà inscrit' })
    }

    // Vérifie s’il existe déjà un SUPER_ADMIN
    const superAdminExists = await prisma.user.findFirst({
      where: { role: Role.SUPER_ADMIN },
    })

    // Traiter l'image si fournie
    let imagePath = null
    if (image && 'filepath' in image) {
      if (image.size > 1_048_576) {
        fs.unlinkSync(image.filepath)
        return res.status(400).json({ message: 'Image trop volumineuse (max 1 Mo)' })
      }
      imagePath = `/uploads/${path.basename(image.filepath)}`
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        nom,
        prenom,
        role: superAdminExists ? Role.UTILISATEUR : Role.SUPER_ADMIN,
        departementId: departementId ? Number(departementId) : null,
        image: imagePath,
      },
    })

    // Supprimer le mot de passe du retour
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userSafe } = newUser

    return res.status(201).json({ message: 'Compte créé', user: userSafe })
  } catch (error) {
    console.error('Erreur lors de la création de compte :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
