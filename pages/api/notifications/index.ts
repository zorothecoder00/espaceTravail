import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession(req, res)

  if (!session || !session.user?.id) {
    return res.status(401).json({ message: 'Non autorisé' })
  }

  const userId = parseInt(session.user.id)

  /* --------------------------- GET : Liste des notifs --------------------------- */
  if (req.method === 'GET') {
    try {
      const notifications = await prisma.notification.findMany({
        where: { userId },
        orderBy: { dateNotification: 'desc' },
      })

      return res.status(200).json({ data: notifications })
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  /* --------------------------- DELETE : Supprimer --------------------------- */
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query

      if (id) {
        // 🔹 Supprimer une seule notification
        const notifId = parseInt(id.toString())
        if (isNaN(notifId)) {
          return res.status(400).json({ message: 'ID invalide' })
        }

        await prisma.notification.deleteMany({
          where: { id: notifId, userId },
        })

        return res.status(200).json({ message: 'Notification supprimée' })
      } else {
        // 🔹 Vider toutes les notifications
        await prisma.notification.deleteMany({
          where: { userId },
        })

        return res.status(200).json({ message: 'Toutes les notifications ont été supprimées' })
      }
    } catch (error) {
      console.error('Erreur lors de la suppression des notifications', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  /* --------------------------- Méthodes non supportées --------------------------- */
  res.setHeader('Allow', ['GET', 'DELETE'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
