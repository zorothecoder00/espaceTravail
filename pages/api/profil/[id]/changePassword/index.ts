import { NextApiRequest, NextApiResponse } from 'next'
import { compare, hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const session = await getAuthSession(req, res)
  if (!session || !session?.user?.id) {
    return res.status(401).json({ error: 'Non autorisé' })
  }

  const { ancienMotDePasse, nouveauMotDePasse } = req.body

  if (!ancienMotDePasse || !nouveauMotDePasse) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  const utilisateur = await prisma.user.findUnique({
    where: { id: Number(session?.user?.id) },
  })

  if (!utilisateur || !utilisateur.password) {
    return res.status(404).json({ error: 'Utilisateur introuvable' })
  }

  const motDePasseValide = await compare(ancienMotDePasse, utilisateur.password)

  if (!motDePasseValide) {
    return res.status(400).json({ error: 'Ancien mot de passe incorrect' })
  }

  const nouveauHash = await hash(nouveauMotDePasse, 10)

  await prisma.user.update({
    where: { id: Number(session?.user?.id) },
    data: { password: nouveauHash },
  })

  return res.status(200).json({ message: 'Mot de passe mis à jour avec succès' })
}
