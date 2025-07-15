import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Statut } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string)

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  if (req.method === 'GET') {
    try {
      const tache = await prisma.tache.findUnique({
        where: { id },
        include: {
          projet: { select: { id: true, nom: true } },
          TacheUtilisateur: { include: { user: { select: { id: true, nom: true, prenom: true } } } },
          notifications: true,
          messages: true,
        },
      })

      if (!tache) {
        return res.status(404).json({ message: 'Tâche introuvable' })
      }

      return res.status(200).json({ data: tache })
    } catch (error) {
      console.error('Erreur serveur GET tâche:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const tache = await prisma.tache.findUnique({ where: { id } })

      if (!tache) {
        return res.status(404).json({ message: 'Tâche introuvable' })
      }

      await prisma.tache.delete({ where: { id } })

      return res.status(200).json({ message: 'Tâche supprimée avec succès' })
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const { titre, description, deadline, statut, projet } = req.body

      if (!titre || titre.trim() === '' || !statut || isNaN(parseInt(projet))) {
        return res.status(400).json({ message: 'Veuillez saisir les champs manquants' })
      }

      const tache = await prisma.tache.findUnique({ where: { id } })

      if (!tache) {
        return res.status(404).json({ message: 'Tâche introuvable' })
      }

      const updated = await prisma.tache.update({
        where: { id },
        data: {
          titre: titre.trim(),
          description: description?.trim() || null,
          deadline: deadline ? new Date(deadline) : null,
          statut: statut as Statut,
          projetId: parseInt(projet),
        },
      })

      return res.status(200).json({ data: updated })
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la tâche', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
