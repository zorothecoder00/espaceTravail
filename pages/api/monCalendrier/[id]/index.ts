import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession(req, res)
  if (!session?.user?.id) {
    return res.status(401).json({ message: 'Non autorisé' })
  }

  const id = parseInt(req.query.id as string)
  if (!req.query.id || isNaN(id)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  try {
    const tacheAssignee = await prisma.tacheUtilisateur.findFirst({
      where: {
        userId: parseInt(session.user.id),
        tacheId: id,
        tache: {
          deadline: { not: null },
        },
      },
      include: {
        tache: {
          include: {
            projet: {
              select: { id: true, nom: true },
            },
          },
        },
      },
    })

    if (!tacheAssignee) {
      return res
        .status(404)
        .json({ message: 'Tâche non trouvée ou non assignée à vous' })
    }

    const { tache } = tacheAssignee

    return res.status(200).json({
      data: {
        id: tache.id,
        titre: tache.titre,
        deadline: tache.deadline,
        description: tache.description,
        statut: tache.statut,
        projet: tache.projet,
      },
    })
  } catch (error) {
    console.error('Erreur GET monCalendrier/:id :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
