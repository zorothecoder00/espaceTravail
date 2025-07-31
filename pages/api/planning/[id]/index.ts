import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const planningId = parseInt(id as string)

  if (isNaN(planningId)) {
    return res.status(400).json({ error: 'ID invalide' })
  }

  if (req.method === 'GET') {
    try {
      const planning = await prisma.planning.findUnique({
        where: { id: planningId },
        include: {
          responsable: {
            select: { id: true, nom: true, prenom: true },
          },
          user: {
            select: { id: true, nom: true, prenom: true },
          },
          messages: {
            select: {
              id: true,
              contenu: true,
              createdAt: true,
              sender: {
                select: { id: true, nom: true, prenom: true },
              },
            },
            orderBy: { createdAt: 'desc' },
          },
        },
      })

      if (!planning) {
        return res.status(404).json({ error: 'Planning non trouvé' })
      }

      return res.status(200).json(planning)
    } catch (error) {
      console.error('Erreur API GET /planning/[id]:', error)
      return res.status(500).json({ error: 'Erreur serveur' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: `Méthode ${req.method} non autorisée` })
  }
}
