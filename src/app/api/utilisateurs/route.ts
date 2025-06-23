// app/api/utilisateurs/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { IncomingForm, Fields, Files, File } from 'formidable'
import fs from 'fs'  
import path from 'path'
import { promisify } from 'util'
import type { NextApiRequest } from 'next'

// Pour désactiver le bodyParser de Next.js (utile pour FormData)
export const config = {
  api: {
    bodyParser: false,
  },
}

type ParsedForm = {
  fields: {
    nom?: string
    prenom?: string
    email?: string
    password?: string
    role?: string
    departementId?: string
  }
  files: {
    image?: File
  }
}

const parseForm = async (req: NextApiRequest): Promise<ParsedForm> => {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), 'public/uploads'),
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024, // 1 Mo max
    multiples: false,
  })

  const parse = promisify<NextApiRequest, Fields, Files>(form.parse.bind(form))

  return new Promise((resolve, reject) => {
    parse(req, (err, fields, files) => {
      if (err) reject(err)
      else {
        resolve({
          fields: {
            nom: fields.nom as string,
            prenom: fields.prenom as string,
            email: fields.email as string,
            password: fields.password as string,
            role: fields.role as string,
            departementId: fields.departementId as string,
          },
          files: {
            image: Array.isArray(files.image) ? files.image[0] : (files.image as File),
          },
        })
      }
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
    // Convertir Request en NextApiRequest pour formidable
    const body = (req as unknown as { req: NextApiRequest }).req
    const { fields, files } = await parseForm(body)

    const { nom, prenom, email, password, role, departementId } = fields
    const image = files.image

    if (!nom || !prenom || !email || !password || !role || !image) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
    }

    if (image.size > 1_048_576) {
      fs.unlinkSync(image.filepath)
      return NextResponse.json({ message: 'Image trop volumineuse (>1 Mo)' }, { status: 400 })
    }

    const userExist = await prisma.user.findUnique({ where: { email } })
    if (userExist) {
      fs.unlinkSync(image.filepath)
      return NextResponse.json({ message: 'Utilisateur déjà existant' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const fileName = path.basename(image.filepath)
    const imagePath = `/uploads/${fileName}`

    const user = await prisma.user.create({
      data: {
        nom,
        prenom,
        email,
        password: hashedPassword,
        role,
        departementId: departementId ? Number(departementId) : null,
        image: imagePath,
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error('Erreur serveur :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}

