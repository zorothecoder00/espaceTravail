import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuthSession } from '@/lib/auth' // corrige le chemin si besoin
import { prisma } from '@/lib/prisma'     

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession(req, res)

  if (!session || !session.user?.id) {
    return res.status(401).json({ error: 'Non autorisé' })
  }

  const { id } = req.query
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID de message invalide' })
  }

  const messageId = parseInt(id)
  const userId = parseInt(session.user.id)

  if (req.method === 'GET') {
    try {
      const message = await prisma.message.findUnique({
        where: { id: messageId },
        include: {
          sender: { select: { id: true, nom: true, prenom: true } },
          receiver: { select: { id: true, nom: true, prenom: true } },
          projet: { select: { id: true, nom: true } },
          tache: { select: { id: true, titre: true } },
          planning: { select: { id: true, titre: true } },
        },
      })

      if (!message) return res.status(404).json({ error: 'Message introuvable' })

      if (message.senderId !== userId && message.receiverId !== userId) {
        return res.status(403).json({ error: 'Accès interdit' })
      }

      return res.status(200).json({ data: message })
    } catch (error) {
      console.error('Erreur serveur:', error)
      return res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  else if (req.method === 'PUT') {
    try {
      // On vérifie que le message existe et que l'user est bien le receiver
      const message = await prisma.message.findUnique({
        where: { id: messageId },
        select: { receiverId: true, vu: true },
      })

      if (!message) return res.status(404).json({ error: 'Message introuvable' })

      if (message.receiverId !== userId) {
        return res.status(403).json({ error: 'Accès interdit : vous n\'êtes pas le destinataire' })
      }

      if (message.vu) {
        return res.status(200).json({ message: 'Message déjà marqué comme vu' })
      }

      // Mise à jour
      await prisma.message.update({
        where: { id: messageId },
        data: { vu: true },
      })

      return res.status(200).json({ message: 'Message marqué comme vu' })
    } catch (error) {
      console.error('Erreur serveur:', error)
      return res.status(500).json({ error: 'Erreur serveur' })
    }
  }

  else {
    res.setHeader('Allow', ['GET', 'PUT'])
    return res.status(405).json({ error: `Méthode ${req.method} non autorisée` })
  }
}
