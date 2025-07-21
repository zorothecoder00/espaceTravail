import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from 'lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req, res })
  if (!session) return res.status(401).json({ message: 'Non authentifié' })

  const userId = session.user.id

  if (req.method === 'GET') {
    const taches = await prisma.tachePersonnelle.findMany({
      where: { auteurId: userId },
      include: {
        sousTaches: true,
        superviseur: true
      },
      orderBy: { date: 'desc' }
    })
    return res.status(200).json(taches)
  }

  if (req.method === 'POST') {
    const { titre, contenu, date, sousTaches, superviseurId } = req.body

    try {
      const nouvelleTache = await prisma.tachePersonnelle.create({
        data: {
          titre,
          contenu,
          date: new Date(date),
          auteurId: userId,
          superviseurId: superviseurId || null,
          sousTaches: {
            create: sousTaches.map((s: any) => ({
              contenu: s.contenu,
              statut: s.statut || 'ATTENTE'
            }))
          },
          notifications: superviseurId
            ? {
                create: {
                  contenu: `Nouvelle tâche à superviser : "${titre}"`,
                  utilisateurId: superviseurId
                }
              }
            : undefined
        },
        include: { sousTaches: true }
      })

      return res.status(201).json(nouvelleTache)
    } catch (err) {
      return res.status(500).json({ error: 'Erreur lors de la création de la tâche.' })
    }
  }

  return res.status(405).json({ message: 'Méthode non autorisée' })
}
