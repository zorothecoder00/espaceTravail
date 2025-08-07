import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Récupération session dans le handler
  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  if (req.method === 'GET') {
    try {
      const userId = parseInt(session.user.id)

      const messages = await prisma.message.findMany({
        where: {
          OR: [
            { receiverId: userId },
            { senderId: userId },
          ],
        },
        orderBy: { createdAt: 'desc' },
        include: {
          sender: { select: { nom: true } },
          receiver: { select: { nom: true } },
          projet: { select: { nom: true } },
          tache: { select: { titre: true } },
        },
      })

      return res.status(200).json({ data: messages })
    } catch (error) {
      console.error('Erreur GET mesMessages :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  // Méthode non autorisée
  res.setHeader('Allow', ['GET'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
