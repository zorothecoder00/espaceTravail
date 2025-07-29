import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma' // adapte ce chemin à ton projet

export default async function handler(req: NextApiRequest, res: NextApiResponse) {     
  const planningId = parseInt(req.query.planningId as string)

  if (isNaN(planningId)) {  
    return res.status(400).json({ message: 'ID invalide' })
  }

  if (req.method === 'GET') {
    try {
      const planning = await prisma.planning.findUnique({
        where: { id: planningId }
      })

      if (!planning) {
        return res.status(404).json({ message: 'Planning non trouvé' })
      }

      return res.status(200).json({ data: planning })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  } else {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }
}
