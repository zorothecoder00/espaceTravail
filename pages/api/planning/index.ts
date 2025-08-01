// /pages/api/planning/calendrier.ts
import { NextApiRequest, NextApiResponse } from 'next'  
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'    
import { slugify } from '@/lib/utils' // à créer si besoin

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
  try {
    const session = await getAuthSession(req, res)

    if (!session || !session?.user) {
      return res.status(401).json({ message: 'Non autorisé' })
    }

    const userId = parseInt(session?.user?.id)

    if (req.method === 'GET') {
      const plannings = await prisma.planning.findMany({
        where: { userId },
        orderBy: { date: 'asc' },
        include: {
          responsable: {
            select: { id: true, nom: true, prenom: true },
          },
          taches: true,
        },
      })
      return res.status(200).json({ data: plannings })
    }

    if (req.method === 'POST') {
      const {
        titre,
        date,
        taches,
        responsableId,
      } = req.body

      if (!titre || !date || !taches|| !Array.isArray(taches) || taches.length === 0) {
        return res.status(400).json({ message: 'Champs requis manquants ou mal formatés' })
      }

      const planning = await prisma.planning.create({
        data: {
          titre,
          slug: slugify(titre),
          date: new Date(date),
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
          } ,
          responsableId: responsableId ? parseInt(responsableId) : null,
          userId,
        },
      })   

      return res.status(201).json({ data: planning })
    }

    return res.status(405).json({ message: 'Méthode non autorisée' })
  } catch (error) {
    console.error('Erreur planning calendrier :', error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
}
