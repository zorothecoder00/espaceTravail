import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const id = parseInt(req.query.id as string)
  if (isNaN(id)) return res.status(400).json({ message: 'ID invalide' })

  try {
    const assignation = await prisma.tacheUtilisateur.findUnique({
      where: {
        tacheId_userId: {
          userId: parseInt(session.user.id),
          tacheId: id,
        },
      },
    })

    if (!assignation) {
      return res.status(403).json({ message: "Vous n'êtes pas assigné à cette tâche" })
    }

    const tache = await prisma.tache.findUnique({
      where: { id },
      include: {
        projet: { select: { id: true, nom: true } },
        TacheUtilisateur: {
          include: {
            user: { select: { id: true, nom: true, prenom: true } },
          },
        },
        notifications: true,
        messages: true,
      },
    })

    if (!tache) return res.status(404).json({ message: 'Tâche introuvable' })

    return res.status(200).json({ data: tache })
  } catch (error) {
    console.error('Erreur GET mesTaches/[id] :', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
