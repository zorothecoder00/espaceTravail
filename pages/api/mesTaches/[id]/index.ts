import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Prisma, Statut } from '@prisma/client'
import { getAuthSession } from '@/lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession(req, res)
  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const id = parseInt(req.query.id as string)
  if (isNaN(id)) return res.status(400).json({ message: 'ID invalide' })

  const userId = parseInt(session.user.id)

  // Vérifier que l'utilisateur est bien assigné à cette tâche
  const assignation = await prisma.tacheUtilisateur.findUnique({
    where: {
      tacheId_userId: {
        userId,
        tacheId: id,
      },
    },
  })

  if (!assignation) {
    return res.status(403).json({ message: "Vous n'êtes pas assigné à cette tâche" })
  }

  if (req.method === 'GET') {
    try {
      const tache = await prisma.tache.findUnique({
        where: { id },
        include: {
          projet: { select: { id: true, nom: true } },
          TacheUtilisateur: {
            where: { userId },
            select: {
              statutPersonnel: true,
              dateDebut: true,
              dateFin: true,
            },
          },
          notifications: true,
          messages: true,
        },
      })

      if (!tache) return res.status(404).json({ message: 'Tâche introuvable' })

      return res.status(200).json({ data: tache })
    } catch (error) {
      console.error('Erreur GET mesTaches/[id] :', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  if (req.method === 'PATCH') {
    const { statutPersonnel, dateDebut, dateFin } = req.body

    try {
      const data: Partial<Prisma.TacheUtilisateurUpdateInput> = {}

      if (
        statutPersonnel &&
        typeof statutPersonnel === 'string' &&
        Object.values(Statut).includes(statutPersonnel as Statut)
      ) {
        data.statutPersonnel = statutPersonnel as Statut

        // Dates personnalisées si fournies et valides
        if (dateDebut) {
          const dDebut = new Date(dateDebut)
          if (isNaN(dDebut.getTime())) {
            return res.status(400).json({ message: 'Date de début invalide' })
          }
          data.dateDebut = dDebut
        } else if (statutPersonnel === Statut.EN_COURS) {
          data.dateDebut = new Date() // par défaut si non fournie
        }

        if (dateFin) {
          const dFin = new Date(dateFin)
          if (isNaN(dFin.getTime())) {
            return res.status(400).json({ message: 'Date de fin invalide' })
          }
          data.dateFin = dFin
        } else if (statutPersonnel === Statut.TERMINEE) {
          data.dateFin = new Date() // par défaut si non fournie
        }

        // Si statut EN_COURS, on peut vouloir reset dateFin à null si pas spécifié
        if (statutPersonnel === Statut.EN_COURS && !dateFin) {
          data.dateFin = null
        }

      } else if (statutPersonnel) {
        return res.status(400).json({ message: 'Statut personnel invalide' })
      }

      const updated = await prisma.tacheUtilisateur.update({
        where: {
          tacheId_userId: {
            tacheId: id,
            userId,
          },
        },
        data,
      })

      // Récupérer les infos nécessaires pour notification
      const tacheComplete = await prisma.tache.findUnique({
        where: { id },
        select: {
          id: true,
          titre: true,
          projet: {
            select: {
              id: true,
              nom: true,
              chefProjet: {
                select: { id: true },
              },
            },
          },
        },
      })

      if (
        tacheComplete?.projet?.chefProjet?.id &&
        tacheComplete.projet.chefProjet.id !== userId
      ) {
        await prisma.notification.create({
          data: {
            userId: tacheComplete.projet.chefProjet.id, // destinataire = chef de projet
            emetteurId: userId,                         // celui qui a mis à jour
            tacheId: id,
            projetId: tacheComplete.projet.id,
            message: `L'utilisateur ${session.user.nom} ${session.user.prenom} a mis à jour sa progression sur la tâche "${tacheComplete.titre}" (statut personnel: ${statutPersonnel})`,
          },
        })
      }

      return res.status(200).json({ message: 'Mise à jour réussie', data: updated })
    } catch (error) {
      console.error('Erreur PATCH mesTaches/[id] :', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  res.setHeader('Allow', ['GET', 'PATCH'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
