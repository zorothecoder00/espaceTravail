import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession()

  if (!session || !session.user?.id) {
    return res.status(401).json({ message: 'Non autorisé' })
  }

  try {
    const notifications = await prisma.notification.findMany({
      where: {
        userId: parseInt(session.user.id),
      },
      orderBy: {
        dateNotification: 'desc',
      },
    })

    return res.status(200).json({ data: notifications })
  } catch (error) {
    console.error('Erreur lors de la récupération des notifications', error)
    return res.status(500).json({ message: 'Erreur serveur' })
  }
}
