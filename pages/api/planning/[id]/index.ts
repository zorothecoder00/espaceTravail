import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import slugify from 'slugify'

type Tache = {      
  id: number
  titre: string
  heure: string
  etat?: boolean   
  commentaires?: string
  resultatAttendu?: string
  objectif?: string
  priorite?: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const planningId = parseInt(id as string)

  if (isNaN(planningId)) {
    return res.status(400).json({ error: 'ID invalide' })
  }

  if (req.method === 'GET') {
    try {
      const planning = await prisma.planning.findUnique({
        where: { id: planningId },
        include: {
          taches: true, // ✅ Ajout des tâches ici
          responsable: {
            select: { id: true, nom: true, prenom: true },
          },
          user: {
            select: { id: true, nom: true, prenom: true },
          },
          messages: {
            select: {
              id: true,
              contenu: true,
              createdAt: true,
              sender: {
                select: { id: true, nom: true, prenom: true },
              },
            },
            orderBy: { createdAt: 'desc' },
          },
        },
      })

      if (!planning) {
        return res.status(404).json({ error: 'Planning non trouvé' })
      }

      return res.status(200).json({ data: planning })
    } catch (error) {
      console.error('Erreur API GET /planning/[id]:', error)
      return res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const {
        titre,
        date,
        taches,
        responsableId,
      } = req.body

      if (!titre || !date || !taches || !Array.isArray(taches)) {
        return res.status(400).json({ message: 'Champs requis manquants ou mal formatés' })
      }

      // Supprimer les tâches existantes liées à ce planning
      await prisma.tachePlanning.deleteMany({
        where: { planningId },
      })

      // Mettre à jour le planning et recréer les tâches
      const updatedPlanning = await prisma.planning.update({
        where: { id: planningId },
        data: {
          titre,
          slug: slugify(titre),
          date: new Date(date),
          responsableId: responsableId ? parseInt(responsableId) : null,
          taches: {
            createMany: {
              data: taches.map((t: Tache) => ({
                titre: t.titre,
                heure: t.heure,
                objectif: t.objectif ?? '',
                resultatAttendu: t.resultatAttendu ?? '',
                etat: t.etat ?? false,
                commentaires: t.commentaires ?? '',
                priorite: t.priorite ?? false,
              })),
            },
          },
        },
      })

      return res.status(200).json({ data: updatedPlanning })
    } catch (error) {
      console.error('Erreur API PUT /planning/[id]:', error)
      return res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  res.setHeader('Allow', ['GET', 'PUT'])
  return res.status(405).json({ error: `Méthode ${req.method} non autorisée` })
}
