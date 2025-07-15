// pages/api/departements.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  if (method === 'GET') {
    const { page = '1', limit = '10', search = '', sortField = 'createdAt', sortOrder = 'desc' } = req.query

    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    const order = sortOrder === 'asc' ? 'asc' : 'desc'

    try {
      const [departements, total] = await Promise.all([
        prisma.departement.findMany({
          where: {
            nom: {
              contains: search as string,
            },
          },
          orderBy: { [sortField as string]: order },
          skip,
          take: limitNum,
        }),
        prisma.departement.count(),
      ])

      return res.status(200).json({
        data: departements,
        total,
        totalPages: Math.ceil(total / limitNum),
      })
    } catch (error) {
      console.error("Erreur lors de la récupération :", error)
      return res.status(500).json({ message: 'Erreur interne' })
    }

  } else if (method === 'POST') {
    const { nom } = req.body

    if (!nom || nom.trim() === '') {
      return res.status(400).json({ message: 'Le nom est requis' })
    }

    const exist = await prisma.departement.findFirst({ where: { nom } })
    if (exist) {
      return res.status(409).json({ message: 'Département déjà existant' })
    }

    const departement = await prisma.departement.create({ data: { nom } })
    return res.status(201).json(departement)
  }

  return res.status(405).json({ message: 'Méthode non autorisée' })
}
