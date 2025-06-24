import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { IncomingForm, File } from 'formidable'
import fs from 'fs'
import path from 'path'
import type { NextApiRequest } from 'next'
import { Role } from '@prisma/client'

export const config = {
  api: {
    bodyParser: false,
  },
}

type ParsedForm = {
  fields: {
    nom: string
    prenom: string
    email: string
    password: string
    role: Role
    departementId: string
  }
  files: {
    image?: File
  }
}

const parseForm = (req: NextApiRequest): Promise<ParsedForm> => {
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

      const getString = (field: string | string[] | undefined): string => {
        if (Array.isArray(field)) return field[0]
        return field ?? ''
      }

      const roleValue = getString(fields.role)
      const roleEnum = Object.values(Role).includes(roleValue as Role)
        ? (roleValue as Role)
        : Role.UTILISATEUR // valeur par défaut si invalide

      resolve({
        fields: {
          nom: getString(fields.nom),
          prenom: getString(fields.prenom),
          email: getString(fields.email),
          password: getString(fields.password),
          role: roleEnum,
          departementId: getString(fields.departementId),
        },
        files: {
          image: Array.isArray(files.image) ? files.image[0] : files.image,
        },
      })
    })
  })
}

export async function GET() {
  const utilisateurs = await prisma.user.findMany({
    include: { departement: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(utilisateurs)
}

export async function POST(req: Request) {
  try {
    const body = (req as unknown as { req: NextApiRequest }).req
    const { fields, files } = await parseForm(body)

    const { nom, prenom, email, password, role, departementId } = fields
    const image = files.image

    // 🔁 L'image n'est plus obligatoire ici
    if (!nom || !prenom || !email || !password || !role) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
    }

    if (image && (!('size' in image) || !('filepath' in image))) {
      return NextResponse.json({ message: 'Fichier image invalide' }, { status: 400 })
    }

    if (image && image.size > 1_048_576) {
      fs.unlinkSync(image.filepath)
      return NextResponse.json({ message: 'Image trop volumineuse (>1 Mo)' }, { status: 400 })
    }

    const userExist = await prisma.user.findUnique({ where: { email } })
    if (userExist) {
      if (image) fs.unlinkSync(image.filepath)
      return NextResponse.json({ message: 'Utilisateur déjà existant' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const imagePath = image ? `/uploads/${path.basename(image.filepath)}` : null

    const user = await prisma.user.create({
      data: {
        nom,
        prenom,
        email,
        password: hashedPassword,
        role,
        departementId: departementId ? Number(departementId) : null,
        image: imagePath, // 👈 null si non fourni
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error('Erreur serveur :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}

