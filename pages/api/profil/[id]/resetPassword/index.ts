// /pages/api/utilisateurs/resetPassword.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthSession } from '@/lib/auth' // à adapter selon ton projet
import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
  
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const session = await getAuthSession(req, res)

  if (!session || !session?.user?.email) {
    return res.status(401).json({ error: 'Non authentifié' })
  }

  const { email, nouveauMotDePasse } = req.body

  if (!email || !nouveauMotDePasse) {
    return res.status(400).json({ error: 'Email et nouveau mot de passe requis' })
  }

  // Vérifie que l'email correspond à celui de l'utilisateur connecté
  if (email !== session?.user?.email) {
    return res.status(403).json({ error: 'Vous ne pouvez réinitialiser que votre propre mot de passe' })
  }

  try {
    const utilisateur = await prisma.user.findUnique({ where: { email } })

    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }

    const hashedPassword = await hash(nouveauMotDePasse, 10)

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword }
    })

    return res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
  } catch (error) {
    console.error('Erreur lors de la mise à jour du mot de passe :', error)
    return res.status(500).json({ error: 'Erreur interne du serveur' })
  }
}
