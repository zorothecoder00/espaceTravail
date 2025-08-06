import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { Statut, Priorite } from '@prisma/client'
import { getAuthSession } from '@/lib/auth'

interface SousTachePayload {
  titre: string
  description?: string
  deadline?: string
  statut?: Statut
  responsableId?: number | string
  priorite?: Priorite
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const session = await getAuthSession(req, res)
  if (!session || !session?.user) {
    return res.status(401).json({ error: 'Non autorisé' })
  }

  try {
    const { tacheId, sousTaches } = req.body  

    if (!tacheId || !Array.isArray(sousTaches) || sousTaches.length === 0) {
      return res.status(400).json({ error: 'Tâche ou sous-tâches invalides' })
    }

    const userId = Number(session.user.id)

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'ID utilisateur invalide' })
    }


    const isAssigned = await prisma.tacheUtilisateur.findUnique({
      where: {
        tacheId_userId: {
          tacheId: Number(tacheId),
          userId,
        },
      },
    })

    if (!isAssigned) {
      return res.status(403).json({ error: 'Vous n\'êtes pas autorisé à ajouter des sous-tâches à cette tâche' })
    }

    const statutValides = [Statut.ATTENTE, Statut.EN_COURS, Statut.TERMINE]
    const prioriteValides = [Priorite.BASSE, Priorite.MOYENNE, Priorite.ELEVEE]

    const createdSousTaches = await Promise.all(

      sousTaches.map(async (sousTache: SousTachePayload) => {
        const statutValide = statutValides.includes(sousTache.statut as Statut)
          ? sousTache.statut
          : Statut.ATTENTE

        const prioriteValide = prioriteValides.includes(sousTache.priorite as Priorite)
          ? sousTache.priorite
          : Priorite.MOYENNE

        return await prisma.sousTacheProjet.create({
          data: {
            titre: sousTache.titre,
            description: sousTache.description ?? undefined,
            deadline: sousTache.deadline ? new Date(sousTache.deadline) : undefined,
            statut: statutValide,
            priorite: prioriteValide,
            responsableId: sousTache.responsableId ? Number(sousTache.responsableId) : undefined,
            tacheId: Number(tacheId),
            utilisateurs: {
              create: {
                userId,
              },
            },
          },
          include: {
            utilisateurs: true,
            responsable: true,
          },
        })
      })
    )

    // Récupérer le chefProjetId via la relation imbriquée
    // Récupérer une seule fois le chefProjetId
    const sousTacheAvecChef = await prisma.sousTacheProjet.findFirst({
      where: { tacheId: Number(tacheId) },
      select: {
        tache: {
          select: {
            projet: {
              select: {
                chefProjetId: true,
                nom: true,    // <--- ici on récupère le nom du projet
              },
            },
          },
        },
      },
    });

    const chefProjetId = sousTacheAvecChef?.tache?.projet?.chefProjetId;
    const projetNom = sousTacheAvecChef?.tache?.projet?.nom ?? "votre projet";

    // Récupérer le nom/prénom de l'émetteur (user connecté)
    const emetteur = await prisma.user.findUnique({
      where: { id: userId },
      select: { nom: true, prenom: true }
    })
    const emetteurNom = emetteur ? `${emetteur.nom ?? ''}`.trim() : `Utilisateur ${userId}`

    // Puis boucle pour créer les notifications
    for (const sousTache of createdSousTaches) {
      const sousTacheId = sousTache.id;

      // Ne pas créer la notification si l'émetteur est aussi le chef du projet
      if (chefProjetId && chefProjetId !== userId) {
        await prisma.notification.create({
          data: {
            userId: chefProjetId,
            emetteurId: userId,
            message: `L'utilisateur ${emetteurNom} a créé une nouvelle sous-tâche dans votre projet "${projetNom}".`,
            sousTacheProjetId: sousTacheId,
            dateNotification: new Date(),
            vu: false,
          },
        });
      }
    }

    return res.status(201).json({
      message: 'Sous-tâches créées avec succès',
      data: createdSousTaches,
    })

  } catch (error) {
    console.error('Erreur lors de la création des sous-tâches :', error)
    return res.status(500).json({ error: 'Erreur serveur' })
  }
}