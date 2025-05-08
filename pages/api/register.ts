import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { prisma } from '@/lib/prisma' // Assure-toi que ce fichier existe

const prisma = new PrismaClient()

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Le mot de passe doit faire au moins 6 caractères'),
  nom: z.string().min(2, 'Le nom est requis'),
  prenom: z.string().min(2, 'Le prénom est requis')
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  try {
    const result = registerSchema.safeParse(req.body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return res.status(400).json({ message: 'Validation échouée', errors })
    }

    const { email, password, nom, prenom } = result.data

    const existingUser = await prisma.utilisateur.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'Utilisateur déjà inscrit' })
    }

    // Vérifie s'il existe déjà un admin
    const adminExists = await prisma.utilisateur.findFirst({
      where: { role: Role.ADMIN },
    })

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.utilisateur.create({
      data: {
        email,
        password: hashedPassword,
        nom,
        prenom,
        role: adminExists ? Role.UTILISATEUR : Role.ADMIN, // 👈 le premier inscrit devient admin
      },
    })

    // Ne jamais renvoyer le mot de passe, même hashé
    const { password: _, ...userSafe } = newUser

    return res.status(201).json({ message: 'Compte créé', utilisateur: userSafe })
  } catch (error) {
    console.error('Erreur lors de la création de compte :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
