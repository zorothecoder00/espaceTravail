import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { RoleProjet } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const projetId = parseInt(req.query.id as string)

  if (isNaN(projetId)) {
    return res.status(400).json({ message: "ID projet invalide" })
  }

  if (req.method !== 'GET') {
    res.setHeader("Allow", ["GET"])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  try {
    const membres = await prisma.membreProjet.findMany({
      where: { projetId },
      include: {
        user: {
          select: {
            id: true,
            nom: true,
            prenom: true,
          }
        }
      },
    })

    const membresAvecRole = membres.map((membre) => ({
      id: membre.user.id,
      nom: membre.user.nom,
      prenom: membre.user.prenom,
      role: membre.role as RoleProjet, // ← RoleProjet dans le projet
    }))

    return res.status(200).json({ data: membresAvecRole })
  } catch (error) {
    console.error("Erreur récupération membres projet :", error)
    return res.status(500).json({ message: "Erreur serveur" })
  }
}
