import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { Statut, Priorite } from '@prisma/client'

interface SousTachePayload {
  titre: string
  description?: string
  deadline?: string
  statut?: string
  responsableId?: number | string
  priorite?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  try {
    const { tacheId, sousTaches } = req.body

    if (!tacheId || !Array.isArray(sousTaches) || sousTaches.length === 0) {
      return res.status(400).json({ error: 'Tâche parente ou sous-tâches invalides' })
    }

    const statutValides = [Statut.ATTENTE, Statut.EN_COURS, Statut.TERMINE]
    const prioriteValides = [Priorite.BASSE, Priorite.MOYENNE, Priorite.ELEVEE]

    const data = sousTaches.map((sousTache: SousTachePayload) => {
      const statutValide = statutValides.includes(sousTache.statut as Statut)
        ? (sousTache.statut as Statut)
        : Statut.ATTENTE

      const prioriteValide = prioriteValides.includes(sousTache.priorite as Priorite)
        ? (sousTache.priorite as Priorite)
        : Priorite.MOYENNE

      return {
        titre: sousTache.titre,
        description: sousTache.description ?? undefined,
        deadline: sousTache.deadline ? new Date(sousTache.deadline) : undefined,
        statut: statutValide,
        responsableId: sousTache.responsableId ? Number(sousTache.responsableId) : undefined,
        priorite: prioriteValide,
        tacheId: Number(tacheId),
      }
    })

    const created = await prisma.sousTacheProjet.createMany({ data })

    return res.status(201).json({
      message: 'Sous-tâches créées avec succès',
      count: created.count,
    })
  } catch (error) {
    console.error('Erreur lors de la création des sous-tâches :', error)
    return res.status(500).json({ error: 'Erreur serveur' })
  }
}
