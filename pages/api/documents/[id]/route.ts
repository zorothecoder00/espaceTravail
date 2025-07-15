import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  const session = await getAuthSession()
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const documentId = parseInt(req.query.id as string)
  if (isNaN(documentId)) return res.status(400).json({ message: 'ID invalide' })

  const userId = parseInt(session.user.id)

  try {
    /* Vérifie l’accès --------------------------------------------------- */
    const partageOk = await prisma.partageDocument.findFirst({
      where: {
        documentId,
        OR: [
          { partageurId: userId },
          { userId },
          { departement: { users: { some: { id: userId } } } },
          { projet: { membres: { some: { userId } } } },
        ],
      },
    })
    if (!partageOk) return res.status(403).json({ message: 'Accès refusé' })

    /* Récupère le document complet ------------------------------------ */
    const document = await prisma.document.findUnique({
      where: { id: documentId },
      include: {
        partages: {
          include: {
            user:        { select: { id: true, nom: true, prenom: true } },
            departement: { select: { id: true, nom: true } },
            projet:      { select: { id: true, nom: true } },
            partageur:   { select: { id: true, nom: true, prenom: true } },
          },
          orderBy: { datePartage: 'desc' },
        },
        notifications: true,
      },
    })
    if (!document) return res.status(404).json({ message: 'Document introuvable' })

    return res.status(200).json({ data: document })
  } catch (e) {
    console.error('Erreur GET document/[id] :', e)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
