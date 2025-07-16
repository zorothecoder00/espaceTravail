import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import { Statut, Prisma } from '@prisma/client'   

export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const { search = '', page = '1', sortField = 'createdAt', sortOrder = 'desc' } = req.query
  const pageNum  = parseInt(page as string)
  const limit    = 10
  const allowedFields = ['nom', 'statut']  // sécurisation
  const field = allowedFields.includes(sortField as string)
      ? sortField
      : 'createdAt'  
  const safeField = field as string
  const order = sortOrder === 'asc' ? 'asc' : 'desc'

  const searchStr = search.toString().trim()

  const orFilters: Prisma.MembreProjetWhereInput[] = [
      { projet: { nom: { contains: searchStr, mode: 'insensitive' } } },
    ]

    if (Object.values(Statut).includes(searchStr as Statut)) {
      orFilters.push({ projet: { statut: { equals: searchStr as Statut } } })
    }

  try {
    const [projetsAssignes, total] = await Promise.all([
      prisma.membreProjet.findMany({
        where: {
          userId: parseInt(session.user.id),  
          OR: orFilters,
        },
        include: {
          projet: { include: { departement: true } },
        },
        skip: (pageNum - 1) * limit,
        take: limit,
        orderBy: { projet: { [safeField]: order } },
      }),

      prisma.membreProjet.count({
        where: {
          userId: parseInt(session.user.id),
          OR: orFilters,
        },
      }),
    ])

    const projets = projetsAssignes.map(m => m.projet)

    return res.status(200).json({
      data: projets,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {  
    console.error('Erreur GET mesProjets :', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
