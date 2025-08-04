import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth' 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession(req, res)

  if (!session?.user?.id) {
    return res.status(401).json({ message: 'Non autorisé' })
  }

  const notificationId = parseInt(req.query.id as string)
  if (isNaN(notificationId)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

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

    if (!notification.vu) {
      await prisma.notification.update({
        where: { id: notificationId },
        data: { vu: true },
      })
    }  

    const notificationDetail = await prisma.notification.findUnique({
      where: { id: notificationId },
      include: {
        emetteur: { select: { id: true, nom: true, prenom: true } },
        projet: { select: { id: true, nom: true } },
        tache: { select: { id: true, titre: true } },
        document: { select: { id: true, titre: true } },
        messageAssocie: true,
      },
    })

    return res.status(200).json({ data: notificationDetail })
  } catch (error) {
    console.error('Erreur serveur notification/[id].ts :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
