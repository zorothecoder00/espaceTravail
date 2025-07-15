// pages/api/assignations/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const { id } = req.query

  // id peut être string ou string[]
  const idNum = Array.isArray(id) ? Number(id[0]) : Number(id)

  if (!id || Number.isNaN(idNum)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  try {
    const utilisateur = await prisma.user.findUnique({
      where: { id: idNum },
      select: {
        id: true,
        nom: true,
        projets: {
          select: {
            projet: {
              select: {
                id: true,
                nom: true,
                taches: {
                  select: {
                    id: true,
                    titre: true,
                    statut: true,
                    deadline: true,
                  },
                },
              },
            },
          },
        },
        taches: {
          select: {
            tache: {
              select: {
                id: true,
                titre: true,
                statut: true,
                deadline: true,
                projet: { select: { id: true, nom: true } },
              },
            },
          },
        },
      },
    })

    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur introuvable' })
    }

    const projets = utilisateur.projets.map(mp => mp.projet)
    const taches = utilisateur.taches.map(tu => tu.tache)

    return res.status(200).json({
      data: {
        id: utilisateur.id,
        nom: utilisateur.nom,
        projets,
        taches,
      },
    })
  } catch (error) {
    console.error('Erreur API GET /assignations/[id] :', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
