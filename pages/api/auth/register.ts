import { Role } from '@prisma/client'    
import bcrypt from 'bcryptjs'    
import { z } from 'zod'  
import { prisma } from '@/lib/prisma' // Assure-toi que ce fichier existe
import type { NextApiRequest, NextApiResponse } from 'next'


const registerSchema = z.object({  
  email: z.string().email(),
  password: z.string().min(6, 'Le mot de passe doit faire au moins 6 caractères'),
  nom: z.string().min(2, 'Le nom est requis'),
  prenom: z.string().min(2, 'Le prénom est requis'),
  departementId: z.string().optional().nullable(), // 👈 ajoute cette ligne
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  try {
    const result = registerSchema.safeParse(req.body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return res.status(400).json({ message: 'Validation échouée', errors })
    }

    const { email, password, nom, prenom, departementId } = result.data

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'Utilisateur déjà inscrit' })
    }

    // Vérifie s'il existe déjà un admin
    const adminExists = await prisma.user.findFirst({
      where: { role: Role.ADMIN },
    })
 
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        nom,
        prenom,
        role: adminExists ? Role.UTILISATEUR : Role.ADMIN, // 👈 le premier inscrit devient admin
        departementId: departementId ? Number(departementId) : null,
      },
    })   

    // Ne jamais renvoyer le mot de passe, même hashé
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userSafe } = newUser

    return res.status(201).json({ message: 'Compte créé', user: userSafe })
  } catch (error) {
    console.error('Erreur lors de la création de compte :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  } 
}
