import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma' // Assure-toi que ce fichier existe
import { signIn } from 'next-auth/react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  const { email, password } = req.body

  try {
    // Recherche l'utilisateur par email
    const user = await prisma.utilisateur.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' })
    }

    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect' })
    }

    // Connexion à NextAuth via signIn
    const nextAuthResponse = await signIn('credentials', {
      email: user.email,
      password, // Ne pas envoyer de mot de passe hashé, juste le plain-text
      redirect: false, // on gère la redirection manuellement
    })

    if (nextAuthResponse?.error) {
      return res.status(500).json({ message: 'Erreur de connexion' })
    }

    // On renvoie une réponse de succès avec les informations de l'utilisateur
    return res.status(200).json({ message: 'Connexion réussie', user })
  } catch (error) {
    console.error('Erreur lors de la connexion :', error)
    return res.status(500).json({ message: 'Erreur interne du serveur' })
  }
}
