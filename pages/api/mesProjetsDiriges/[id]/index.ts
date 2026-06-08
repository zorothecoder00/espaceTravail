import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import { Statut } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const projetId = parseInt(req.query.id as string)
  if (isNaN(projetId)) return res.status(400).json({ message: 'ID invalide' })

  const userId = parseInt(session.user.id)

  try {
    if (req.method === 'GET') {
      const projet = await prisma.projet.findFirst({
        where: { id: projetId, chefProjetId: userId },
        include: {
          departement:   { select: { id: true, nom: true } },
          chefProjet:    { select: { id: true, nom: true, prenom: true } },
          membres:       { include: { user: { select: { id: true, nom: true, prenom: true } } } },
          taches:        true,
          partages:      true,
          notifications: true,
          messages:      true,
        },
      })

      if (!projet)
        return res.status(404).json({ message: 'Projet introuvable ou accès refusé' })

      return res.status(200).json({ data: projet })
    }

    if (req.method === 'PUT') {
      const exist = await prisma.projet.findFirst({
        where: { id: projetId, chefProjetId: userId },
      })
      if (!exist)
        return res.status(404).json({ message: 'Projet introuvable ou accès refusé' })

      const { nom, description, deadline, statut } = req.body
      if (!nom || nom.trim() === '')
        return res.status(400).json({ message: 'Le nom est requis' })
      if (statut && !Object.values(Statut).includes(statut))
        return res.status(400).json({ message: 'Statut invalide' })

      const updated = await prisma.projet.update({
        where: { id: projetId },
        data: {
          nom: nom.trim(),
          description: description?.trim() || null,
          deadline: deadline ? new Date(deadline) : null,
          statut: statut as Statut,
        },
      })

      return res.status(200).json({ data: updated })
    }

    if (req.method === 'DELETE') {
      const exist = await prisma.projet.findFirst({
        where: { id: projetId, chefProjetId: userId },
      })
      if (!exist)
        return res.status(404).json({ message: 'Projet introuvable ou accès refusé' })

      await prisma.projet.delete({ where: { id: projetId } })
      return res.status(200).json({ message: 'Projet supprimé avec succès' })
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  } catch (error) {
    console.error('Erreur mesProjetsDiriges/[id] :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
