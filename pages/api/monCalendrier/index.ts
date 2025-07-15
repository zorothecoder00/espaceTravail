import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import type { TacheUtilisateur, Tache, Projet } from '@prisma/client'

type TacheAvecProjet = Tache & {
  projet: Projet
}

type TacheUtilisateurAvecTache = TacheUtilisateur & {
  tache: TacheAvecProjet
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession(req, res)
  if (!session?.user?.id) {
    return res.status(401).json({ message: 'Non autorisé' })
  }

  try {
    const taches: TacheUtilisateurAvecTache[] = await prisma.tacheUtilisateur.findMany({
      where: {
        userId: parseInt(session.user.id),
        tache: {
          deadline: { not: null },
        },
      },
      include: {
        tache: {
          include: {
            projet: true,
          },
        },
      },
      orderBy: {
        tache: {
          deadline: 'asc',
        },
      },
    })

    const result = taches.map((item) => ({
      id: item.tache.id,
      titre: item.tache.titre,
      deadline: item.tache.deadline,
      projet: item.tache.projet?.nom || '',
    }))

    return res.status(200).json({ data: result })
  } catch (error) {
    console.error('Erreur calendrier personnel :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
