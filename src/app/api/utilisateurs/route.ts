import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { IncomingForm, File } from 'formidable'
import fs from 'fs'
import path from 'path'  
import type { NextApiRequest } from 'next'
import { Role, Prisma } from '@prisma/client'
import cloudinary from '@/lib/cloudinary'

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  // 🔢 Pagination
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const skip = (page - 1) * limit  

  // 🔍 Filtrage
  const search = searchParams.get('search')?.trim() || ''

  // ↕️ Tri
  const sortField = searchParams.get('sortField') || 'createdAt'
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc'

  // ✅ Construction dynamique du filtre
  const orFilters: Prisma.UserWhereInput[] = [
    { nom: { contains: search } },
    { prenom: { contains: search } },
    { email: { contains: search } },
    { departement: { nom: { contains: search } } },
  ]

  // ✅ Ajouter filtre sur le rôle uniquement si la valeur est valide
  if (Object.values(Role).includes(search as Role)) {
    orFilters.push({ role: { equals: search as Role } })
  }

  try {
    const [utilisateurs, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          OR: orFilters,
        },
        include: { departement: true },
        orderBy: { [sortField]: sortOrder },
        skip,
        take: limit,
      }),

      prisma.user.count({
        where: {
          OR: orFilters,
        },
      }),
    ])

    return NextResponse.json({
      data: utilisateurs,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error('Erreur lors de la récupération', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
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

    if(image && Array.isArray(image)){
      return NextResponse.json({ message: "Une seule image autorisée"} ,{ status: 400 })
    }

    const userExist = await prisma.user.findUnique({
      where: { email: email.toString().trim() },
    })

    if(userExist){
      if(image && 'filepath' in image){
        fs.unlinkSync(image.filepath)
      }
      return NextResponse.json({message: "Utilisateur déjà existant"}, { status: 409})
    }

    let imagePath : string | null = null 

    if(image){
      const file = image as File 

      if(file.size > 1_048_576){
        fs.unlinkSync(file.filepath)
        return NextResponse.json({ message: "Image trop volumineuse(> 1 Mo) "}, { status: 400})
      }
      
      // ✅ Upload vers Cloudinary
      const uploaded = await cloudinary.uploader.upload(file.filepath,{
        folder: 'utilisateurs',
      })

      fs.unlinkSync(file.filepath) //❌ Nettoyage fichier local
      imagePath = uploaded.secure_url //✅ URL Cloudinary
    }

    const hashedPassword = await bcrypt.hash(password.toString().trim(), 10)

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

