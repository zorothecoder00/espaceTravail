// pages/api/departements/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const departementId = parseInt(id as string)

  if (!id || isNaN(departementId)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  try {
    if (req.method === 'GET') {
      // 🔹 Lire un département
      const departement = await prisma.departement.findUnique({
        where: { id: departementId },
      })

      if (!departement) {
        return res.status(404).json({ message: 'Département introuvable' })
      }

      return res.status(200).json({ data: departement })
    }

    if (req.method === 'PUT') {
      // 🔹 Mettre à jour un département
      const { nom } = req.body

      if (!nom || nom.trim() === '') {
        return res
          .status(400)
          .json({ message: 'Le nom du département est requis' })
      }

      const exist = await prisma.departement.findUnique({
        where: { id: departementId },
      })

      if (!exist) {
        return res.status(404).json({ message: 'Département introuvable' })
      }

      const updated = await prisma.departement.update({
        where: { id: departementId },
        data: { nom: nom.trim() },
      })

      return res.status(200).json({ data: updated })
    }

    if (req.method === 'DELETE') {
      // 🔹 Supprimer un département
      await prisma.departement.delete({
        where: { id: departementId },
      })

      return res
        .status(200)
        .json({ message: 'Département supprimé avec succès' })
    }

    // ❌ Méthode non supportée
    return res.status(405).json({ message: 'Méthode non autorisée' })
  } catch (error) {
    console.error('Erreur sur /api/departements/[id] :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
