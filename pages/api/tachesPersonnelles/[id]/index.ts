import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const tacheId = parseInt(id as string)

  if (req.method === 'GET') {
    const tache = await prisma.tachePersonnelle.findUnique({
      where: { id: tacheId },
      include: {
        sousTaches: true,
        auteur: true,
        superviseur: true
      }
    })

    if (!tache) {
      return res.status(404).json({ message: 'Tâche non trouvée' })
    }

    return res.status(200).json(tache)
  }

  return res.status(405).json({ message: 'Méthode non autorisée' })
}
