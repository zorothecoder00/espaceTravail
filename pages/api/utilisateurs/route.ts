import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'
import formidable, { File } from 'formidable'
import fs from 'fs'
import path from 'path'
import { Role, Prisma } from '@prisma/client'
import cloudinary from '@/lib/cloudinary'

export const config = {  
  api: {
    bodyParser: false, // important pour formidable
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
  const uploadDir = path.join('/tmp', 'uploads') // autorisé sur Vercel

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024, // 1 Mo max
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
        : Role.UTILISATEUR

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { page = '1', limit = '10', search = '', sortField = 'createdAt', sortOrder = 'desc' } = req.query
      const pageNum = parseInt(page as string)
      const limitNum = parseInt(limit as string)
      const skip = (pageNum - 1) * limitNum

      const allowedSortFields = ['nom', 'email','role']
      const field = allowedSortFields.includes(sortField as string)
        ? (sortField as string)
        : 'createdAt'
      const order = sortOrder === 'asc' ? 'asc' : 'desc'

      const searchStr = (search as string).trim()

      const orFilters: Prisma.UserWhereInput[] = [
        { nom: { contains: searchStr } },
        { prenom: { contains: searchStr } },
        { email: { contains: searchStr } },
        { departement: { nom: { contains: searchStr } } },
      ]

      if (Object.values(Role).includes(searchStr as Role)) {
        orFilters.push({ role: { equals: searchStr as Role } })
      }

      const [utilisateurs, total] = await Promise.all([
        prisma.user.findMany({
          where: { OR: orFilters },
          include: { departement: true },
          orderBy: { [field]: order },
          skip,
          take: limitNum,
        }),
        prisma.user.count({
          where: { OR: orFilters },
        }),
      ])

      return res.status(200).json({
        data: utilisateurs,
        total,
        totalPages: Math.ceil(total / limitNum),
      })
    } catch (error) {
      console.error('Erreur lors de la récupération utilisateurs:', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  if (req.method === 'POST') {
    try {
      const { fields, files } = await parseForm(req)

      const { nom, prenom, email, password, role, departementId } = fields
      const image = files.image

      if (!nom || !prenom || !email || !password || !role) {
        return res.status(400).json({ message: 'Champs requis manquants' })
      }

      if (image && Array.isArray(image)) {
        return res.status(400).json({ message: 'Une seule image autorisée' })
      }

      const userExist = await prisma.user.findUnique({
        where: { email: email.toString().trim() },
      })

      if (userExist) {
        if (image && 'filepath' in image) {
          fs.unlinkSync(image.filepath)
        }
        return res.status(409).json({ message: 'Utilisateur déjà existant' })
      }

      let imagePath: string | null = null

      if (image) {
        const file = image as File

        if (file.size > 1_048_576) {
          fs.unlinkSync(file.filepath)
          return res.status(400).json({ message: 'Image trop volumineuse (> 1 Mo)' })
        }

        const uploaded = await cloudinary.uploader.upload(file.filepath, {
          folder: 'utilisateurs',
        })

        fs.unlinkSync(file.filepath)
        imagePath = uploaded.secure_url
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
          image: imagePath,
        },
      })

      return res.status(201).json(user)
    } catch (error) {
      console.error('Erreur serveur POST utilisateur:', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
