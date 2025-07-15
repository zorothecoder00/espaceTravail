import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const messageId = parseInt(req.query.id as string)
  if (isNaN(messageId)) return res.status(400).json({ message: 'ID invalide' })

  /* ------------------------------------------------------------- GET */
  if (req.method === 'GET') {
    try {
      const message = await prisma.message.findUnique({
        where: { id: messageId },
        include: {
          sender:   { select: { id: true, nom: true } },
          receiver: { select: { id: true, nom: true } },
          projet:   { select: { id: true, nom: true } },
          tache:    { select: { id: true, titre: true } },
        },
      })
      if (!message) return res.status(404).json({ message: 'Message introuvable' })
      return res.status(200).json({ data: message })
    } catch (error) {
      console.error('Erreur GET /messages/[id] :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  /* ------------------------------------------------------------ DELETE */
  if (req.method === 'DELETE') {
    const session = await getAuthSession(req, res)
    if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })
    try {
      const message = await prisma.message.findUnique({ where: { id: messageId } })
      if (!message)   return res.status(404).json({ message: 'Message introuvable' })
      if (message.senderId !== parseInt(session.user.id))
        return res.status(403).json({ message: 'Accès refusé : vous n’êtes pas auteur' })

      await prisma.message.delete({ where: { id: messageId } })
      return res.status(200).json({ message: 'Message supprimé avec succès' })
    } catch (error) {
      console.error('Erreur DELETE /messages/[id] :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  /* ------------------------------------------------------------- 405 */
  res.setHeader('Allow', ['GET', 'DELETE'])
  res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
