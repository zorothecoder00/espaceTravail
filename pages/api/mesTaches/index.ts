import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import { Prisma, Statut } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const {
    search = '',
    page = '1',  
    sortField = 'createdAt',
    sortOrder = 'desc',
  } = req.query

  const pageNum = parseInt(page as string)
  const limit = 10
  const skip = (pageNum - 1) * limit
  const allowedFields = ['titre', 'statut', 'deadline']  // sécurisation
  const field = allowedFields.includes(sortField as string)
      ? sortField
      : 'createdAt'
  const safeField = field as string
  const order = sortOrder === 'asc' ? 'asc' : 'desc'

  const searchStr = search.toString().trim()

  const orFilters: Prisma.TacheUtilisateurWhereInput[] = [
      { tache: { titre: { contains: searchStr, mode: 'insensitive' } } },
      { tache: { projet: { nom: { contains: searchStr, mode: 'insensitive' } } } },
    ]

    if (Object.values(Statut).includes(searchStr as Statut)) {
      orFilters.push({ tache: { statut: { equals: searchStr as Statut } } })
    }

  try {
    const [tachesAssignees, total] = await Promise.all([
      prisma.tacheUtilisateur.findMany({
        where: {
          userId: parseInt(session.user.id),
          OR: orFilters,
        },
        include: {
          tache: {
            include: {
              projet: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: {
          tache: {
            [safeField]: order,
          },
        },
      }),

      prisma.tacheUtilisateur.count({
        where: {
          userId: parseInt(session.user.id),
          OR: orFilters,
        },
      }),     
    ])

    const taches = tachesAssignees.map(t => t.tache)

    return res.status(200).json({
      data: taches,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error('Erreur interne GET mesTaches :', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
