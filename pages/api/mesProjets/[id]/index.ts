import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession()
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const projetId = parseInt(req.query.id as string)
  if (isNaN(projetId)) return res.status(400).json({ message: 'ID invalide' })

  try {
    /* Vérifie si l’utilisateur est membre du projet ------------------- */
    const membre = await prisma.membreProjet.findUnique({
      where: { userId_projetId: { userId: parseInt(session.user.id), projetId } },
    })
    if (!membre) return res.status(403).json({ message: 'Accès refusé à ce projet' })

    /* Récupère le projet complet -------------------------------------- */
    const projet = await prisma.projet.findUnique({
      where: { id: projetId },
      include: {
        departement: { select: { id: true, nom: true } },
        chefProjet:  { select: { id: true, nom: true, prenom: true } },
        membres:     { include: { user: { select: { id: true, nom: true, prenom: true } } } },
        taches: true,
        partages: true,
        notifications: true,
        messages: true,
      },
    })
    if (!projet) return res.status(404).json({ message: 'Projet introuvable' })

    return res.status(200).json({ data: projet })
  } catch (error) {
    console.error('Erreur GET mesProjets/[id] :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
