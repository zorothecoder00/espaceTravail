import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const notificationId = parseInt(req.query.id as string)
  if (isNaN(notificationId)) return res.status(400).json({ message: 'ID invalide' })

  if (req.method === 'PUT') {
    try {
      const notification = await prisma.notification.findFirst({
        where: {
          id: notificationId,
          userId: parseInt(session.user.id),
        },
      })

      if (!notification) {
        return res.status(404).json({ message: 'Notification introuvable' })
      }

      const updated = await prisma.notification.update({
        where: { id: notificationId },
        data: { vu: true },
      })

      return res.status(200).json({ data: updated })
    } catch (error) {
      console.error('Erreur PUT notification:', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  res.setHeader('Allow', ['PUT'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
