import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Prisma, Statut } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { page = '1', limit = '10', search = '', sortField = 'createdAt', sortOrder = 'desc' } = req.query

    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    const searchStr = (search as string).trim()
    const allowedSortFields = ['titre', 'statut','projet','deadline']
    const field = allowedSortFields.includes(sortField as string)
        ? (sortField as string)
        : 'createdAt'
    const order = sortOrder === 'asc' ? 'asc' : 'desc'

    const orFilters: Prisma.TacheWhereInput[] = [
      { titre: { contains: searchStr, mode: 'insensitive' } },
      { projet: { nom: { contains: searchStr, mode: 'insensitive' } } },
    ]

    if (Object.values(Statut).includes(searchStr as Statut)) {
      orFilters.push({ statut: { equals: searchStr as Statut } })
    }

    try {
      const [taches, total] = await Promise.all([
        prisma.tache.findMany({
          where: { OR: orFilters },
          include: { projet: true },
          orderBy: { [field]: order },
          skip,
          take: limitNum,
        }),
        prisma.tache.count({ where: { OR: orFilters } }),
      ])

      return res.status(200).json({
        data: taches,
        total,
        totalPages: Math.ceil(total / limitNum),
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Erreur lors de la récupération des tâches' })
    }
  }

  if (req.method === 'POST') {
    try {
      const { titre, description, deadline, projetId, statut } = req.body

      if (!titre || !projetId) {
        return res.status(400).json({ message: 'Le titre et le projet sont requis' })
      }

      const tache = await prisma.tache.create({
        data: {
          titre,
          description: description || null,
          deadline: deadline ? new Date(deadline) : null,
          projetId: parseInt(projetId),
          statut: statut || Statut.ATTENTE,
        },
      })

      return res.status(201).json(tache)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Erreur lors de la création de la tâche' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
