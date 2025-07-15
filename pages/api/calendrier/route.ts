import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  try {
    const taches = await prisma.tache.findMany({
      select: {
        id: true,
        titre: true,
        deadline: true,
        projet: {
          select: { nom: true }
        }
      },
      where: {
        deadline: { not: null }
      },
      orderBy: {
        deadline: 'asc'
      }
    })

    return res.status(200).json(taches)
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches du calendrier :', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
