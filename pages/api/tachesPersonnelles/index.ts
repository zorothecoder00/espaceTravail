import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { Prisma, Statut } from '@prisma/client'

type TachePersonnelleData = {  
  id: number
  titre: string
  date: Date
  superviseur: {
    id: number
    nom: string
  } | null
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Récupération de la session (assure-toi que getAuthSession gère req/res)
  const session = await getAuthSession(req, res)
  if (!session?.user?.id) {
    return res.status(401).json({ error: 'Non autorisé' })
  }   

  if (req.method === 'GET') {
    // Lecture des paramètres de tri depuis la query string
    const {
    search = '',
    page = '1',  
    sortField = 'createdAt',
    sortOrder = 'desc',
  } = req.query

  const pageNum = parseInt(page as string)
  const limit = 10
  const skip = (pageNum - 1) * limit
  const allowedFields = ['titre']  // sécurisation
  const field = allowedFields.includes(sortField as string)
      ? sortField
      : 'date'
  const safeField = field as string
  const order = sortOrder === 'asc' ? 'asc' : 'desc'

  const searchStr = search.toString().trim()

  const orFilters: Prisma.TachePersonnelleWhereInput[] = [
      { titre: { contains: searchStr, mode: 'insensitive' } },
  ]

    try {
      const [taches, total] : [TachePersonnelleData[], number]= await Promise.all([
        await prisma.tachePersonnelle.findMany({
          where: { 
            auteurId: parseInt(session.user.id),
            OR: orFilters,
           },
          orderBy: {
            [safeField]:order,
          },
          select: {
            id: true,
            titre: true,
            date: true,
            superviseur: {
              select: {
                id: true,
                nom: true,
              }
            }
          },
          skip,
          take: limit,
        }),

        await prisma.tachePersonnelle.count({
          where: { 
            auteurId: parseInt(session.user.id),
            OR: orFilters,
           },
        })
      ])
        
      return res.status(200).json({ 
        data: taches,
        total,
        totalPages: Math.ceil(total / limit),
      })
    } catch (error) {
      console.error('Erreur interne',error)
      return res.status(500).json({ error: 'Erreur lors de la récupération des tâches personnelles' })
    }

  } else if (req.method === 'POST') {
    // Attendu : un body JSON contenant { titre, contenu, sousTaches, superviseurId? }
    const { titre, contenu, sousTaches, statut, superviseurId } = req.body

    if (!titre || !contenu) {
      return res.status(400).json({ error: 'Le titre et le contenu sont obligatoires.' })
    }

    try {
      // Créer la tâche personnelle
      const tacheP = await prisma.tachePersonnelle.create({
        data: {
          titre,
          contenu, // Contenu riche (HTML ou Markdown)
          // Selon ton besoin, tu veux que le statut soit par défaut TERMINE :
          statut: Statut[statut as keyof typeof Statut],
          auteur: {
            connect: { id: parseInt(session.user.id) }
          },
          superviseur: superviseurId ? { connect: { id: superviseurId } } : undefined
          // date est automatiquement défini par le default(now)
        }
      })

      // Création des sous-tâches s'il y en a
      if (Array.isArray(sousTaches) && sousTaches.length > 0) {
        // On suppose que `sousTaches` est un tableau de chaînes de caractères
        await prisma.sousTache.createMany({
          data: sousTaches.map((contenuSous: string) => ({
            contenu: contenuSous,
            tachePersonnelleId: tacheP.id
          }))
        })
      }

      // Création de la notification pour le superviseur (si défini)
      if (superviseurId) {
        await prisma.notification.create({
          data: {
            userId: superviseurId,        // Le superviseur est destinataire
            emetteurId: parseInt(session.user.id),   // L'auteur de la tâche est l'émetteur
            message: `Nouvelle tâche personnelle: ${titre}`,
            tachePersonnelleId: tacheP.id
          }
        })
      }

      return res.status(201).json({ message: 'Tâche personnelle créée avec succès', data: tacheP })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erreur lors de la création de la tâche personnelle' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: `Méthode ${req.method} non autorisée` })
  }
}
