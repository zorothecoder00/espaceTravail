// pages/api/projets/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Statut, RoleProjet, Prisma } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    /* ─────── LISTE + recherche, tri, pagination ─────── */
    const {
      page = '1',
      limit = '10',
      search = '',
      sortField = 'createdAt',
      sortOrder = 'desc',
    } = req.query

    const pageNum = parseInt(page as string)
    const limitNum = parseInt(limit as string)
    const skip = (pageNum - 1) * limitNum
    const allowedFields = ['nom', 'statut', 'deadline','chefProjet']  // sécurisation
    const field = allowedFields.includes(sortField as string)
      ? sortField
      : 'createdAt'
    const safeField = field as string
    const order = sortOrder === 'asc' ? 'asc' : 'desc'

    const orFilters: Prisma.ProjetWhereInput[] = [
      { nom: { contains: search as string } },
      { chefProjet: { nom: { contains: search as string } } },
    ]

    // normaliser la recherche
    const searchStr = (search as string).toLowerCase();
        // 🎯 Exemple spécifique sur enum Statut
        const matchingStatus = Object.values(Statut).filter((s) =>
          s.toLowerCase().includes(searchStr)
        ) as Statut[];

        if (matchingStatus.length > 0) {
          orFilters.push({
            statut: { in: matchingStatus },
          });
        }  

    try {
      const [projets, total] = await Promise.all([
        prisma.projet.findMany({
          where: { OR: orFilters },
          include: {
            departement: { select: { nom: true } },
            chefProjet: { select: { nom: true } },
          },
          skip,
          take: limitNum,
          orderBy: { [safeField]: order },
        }),
        prisma.projet.count({ where: { OR: orFilters } }),
      ])

      return res.status(200).json({
        data: projets,
        total,
        totalPages: Math.ceil(total / limitNum),
      })
    } catch (error) {
      console.error('Erreur GET /projets :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'POST') {
    /* ─────── CRÉATION d’un projet ─────── */
    const { nom, description, deadline, statut, departementId, chefProjetId } = req.body

    if (!nom || !departementId || !chefProjetId) {
      return res.status(400).json({
        message: 'Nom, département et chef de projet requis',
      })
    }

    try {
      const projet = await prisma.projet.create({
        data: {
          nom: nom.trim(),
          description: description?.trim() || null,
          deadline: deadline ? new Date(deadline) : null,
          statut: statut || Statut.ATTENTE,
          departementId,
          chefProjetId,
        },
      })

      // Ajout du chef de projet dans MembreProjet
      await prisma.membreProjet.create({
        data: {
          userId: chefProjetId,
          projetId: projet.id,
          role: RoleProjet.CHEF_EQUIPE,
        },
      })

      return res.status(201).json(projet)
    } catch (error) {
      console.error('Erreur POST /projets :', error)
      return res.status(500).json({ message: 'Erreur lors de la création' })
    }
  }

  return res.status(405).json({ message: 'Méthode non autorisée' })
}
