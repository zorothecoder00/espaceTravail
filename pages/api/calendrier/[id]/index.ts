import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const id = parseInt(req.query.id as string)

  if (!req.query.id || isNaN(id)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  try {
    const tache = await prisma.tache.findUnique({
      where: { id },
      select: {
        id: true,
        titre: true,
        deadline: true,
        description: true,
        statut: true,
        projet: {
          select: { id: true, nom: true }
        },
      },
    })

    if (!tache) {
      return res.status(404).json({ message: 'Tâche introuvable' })
    }

    return res.status(200).json({ data: tache })
  } catch (error) {
    console.error('Erreur GET calendrier/:id :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
