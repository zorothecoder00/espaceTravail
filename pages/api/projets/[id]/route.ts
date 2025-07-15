// pages/api/projets/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Statut, RoleProjet } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const projetId = parseInt(id as string)

  if (!id || isNaN(projetId)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  try {
    if (req.method === 'GET') {
      /* ─────── DÉTAILS ─────── */
      const projet = await prisma.projet.findUnique({
        where: { id: projetId },
        include: {
          departement: { select: { id: true, nom: true } },
          chefProjet: { select: { id: true, nom: true, prenom: true } },
          membres: { include: { user: true } },
          taches: true,
          partages: true,
          notifications: true,
          messages: true,
        },
      })

      if (!projet) return res.status(404).json({ message: 'Projet introuvable' })
      return res.status(200).json({ data: projet })
    }

    if (req.method === 'PUT') {
      /* ─────── MISE À JOUR ─────── */
      const { nom, description, deadline, statut, departement, chefProjet } = req.body

      if (
        !nom ||
        nom.trim() === '' ||
        !statut ||
        isNaN(parseInt(departement)) ||
        isNaN(parseInt(chefProjet))
      ) {
        return res.status(400).json({ message: 'Champs requis manquants ou invalides' })
      }

      const exist = await prisma.projet.findUnique({ where: { id: projetId } })
      if (!exist) return res.status(404).json({ message: 'Projet introuvable' })

      const updated = await prisma.projet.update({
        where: { id: projetId },
        data: {
          nom: nom.trim(),
          description: description?.trim() || null,
          deadline: deadline ? new Date(deadline) : null,
          statut: statut as Statut,
          departementId: parseInt(departement),
          chefProjetId: parseInt(chefProjet),
        },
      })

      // Màj / upsert du chef dans MembreProjet
      await prisma.membreProjet.upsert({
        where: {
          userId_projetId: {
            userId: parseInt(chefProjet),
            projetId: projetId,
          },
        },
        update: { role: RoleProjet.CHEF_EQUIPE },
        create: {
          userId: parseInt(chefProjet),
          projetId: projetId,
          role: RoleProjet.CHEF_EQUIPE,
        },
      })

      return res.status(200).json({ data: updated })
    }

    if (req.method === 'DELETE') {
      /* ─────── SUPPRESSION ─────── */
      const exist = await prisma.projet.findUnique({ where: { id: projetId } })
      if (!exist) return res.status(404).json({ message: 'Projet introuvable' })

      // Supprime d’abord les MembreProjet liés
      await prisma.membreProjet.deleteMany({ where: { projetId } })

      await prisma.projet.delete({ where: { id: projetId } })
      return res.status(200).json({ message: 'Projet supprimé avec succès' })
    }

    return res.status(405).json({ message: 'Méthode non autorisée' })
  } catch (error) {
    console.error('Erreur /api/projets/[id] :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
