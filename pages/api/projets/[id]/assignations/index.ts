import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Prisma, RoleProjet } from '@prisma/client'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const projetId = parseInt(id as string)

  if (!id || isNaN(projetId)) {
    return res.status(400).json({ message: 'ID de projet invalide' })
  }

  if (req.method === 'GET') {
    try {
      const { page = '1', limit = '10', search = '', sortField = 'nom', sortOrder = 'asc' } = req.query
      const pageNum = parseInt(page as string)
      const limitNum = parseInt(limit as string)
      const skip = (pageNum - 1) * limitNum
      const allowedFields = ['nom', 'email']
      const field = allowedFields.includes(sortField as string) ? sortField : 'createdAt'
      const safeField = field as string
      const order = sortOrder === 'asc' ? 'asc' : 'desc'
      const searchStr = (search as string).trim()

      const orFilters: Prisma.UserWhereInput[] = [{ nom: { contains: searchStr } }]
      if (Object.values(RoleProjet).includes(searchStr as RoleProjet)) {
        orFilters.push({
          projets: {
            some: {
              role: searchStr as RoleProjet,
            },
          },
        })
      }

      const [users, total] = await Promise.all([
        prisma.user.findMany({
          where: { OR: orFilters },
          include: {
            projets: {
              where: { projetId },
              select: { role: true },
            },
          },
          skip,
          take: limitNum,
          orderBy: { [safeField]: order },
        }),

        prisma.user.count({
          where: { OR: orFilters },
        }),
      ])

      const membres = users.map(u => ({
        id: u.id,
        nom: u.nom,
        role: u.projets[0]?.role ?? null,
        estDejaMembre: u.projets.length > 0,
      }))

      return res.status(200).json({
        data: membres,
        total,
        totalPages: Math.ceil(total / limitNum),
      })
    } catch (error) {
      console.error('Erreur GET utilisateurs projet:', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  if (req.method === 'POST') {
    // Authentification
    const session = await getAuthSession(req, res)
    if (!session?.user?.id) {
      return res.status(401).json({ message: 'Non autorisé' })
    }

    const emetteurId = parseInt(session.user.id)

    try {
      const { utilisateursIds } = req.body

      if (!Array.isArray(utilisateursIds)) {
        return res.status(400).json({ message: 'Liste des utilisateurs invalide' })
      }

      // Récupérer anciennes assignations
      const anciens = await prisma.membreProjet.findMany({
        where: { projetId },
        select: { userId: true },
      })

      const anciensIds = anciens.map(m => m.userId)
      const nouveauxIds = utilisateursIds

      const aAjouter = nouveauxIds.filter(id => !anciensIds.includes(id))
      const aRetirer = anciensIds.filter(id => !nouveauxIds.includes(id))

      // Mise à jour assignations
      await Promise.all([
        aAjouter.length > 0
          ? prisma.membreProjet.createMany({
              data: aAjouter.map(userId => ({
                userId,
                projetId,
                role: 'MEMBRE',
              })),
            })
          : Promise.resolve(),

        aRetirer.length > 0
          ? prisma.membreProjet.deleteMany({
              where: {
                projetId,
                userId: { in: aRetirer },
              },
            })
          : Promise.resolve(),
      ])

      // Récupérer nom du projet
      const projet = await prisma.projet.findUnique({
        where: { id: projetId },
        select: { id: true, nom: true },
      })

      if (!projet) {
        return res.status(404).json({ message: 'Projet introuvable' })
      }

      // Préparer notifications
      const notificationsData = [
        ...aAjouter.map(userId => ({
          userId,
          emetteurId,
          projetId,
          message: `Vous avez été ajouté au projet "${projet.nom}"`,
          lien: `/projets/${projetId}`,
        })),
        ...aRetirer.map(userId => ({
          userId,
          emetteurId,
          projetId,
          message: `Vous avez été retiré du projet "${projet.nom}"`,
          lien: `/projets/${projetId}`,
        })),
      ]

      if (notificationsData.length > 0) {
        await prisma.notification.createMany({ data: notificationsData })
      }

      return res.status(200).json({ message: 'Assignations et notifications mises à jour.' })
    } catch (error) {
      console.error('Erreur POST assignations projet:', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  return res.status(405).json({ message: 'Méthode non autorisée' })
}
