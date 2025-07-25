import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { Statut } from '@prisma/client'
import { getAuthSession } from '@/lib/auth'  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const tacheId = parseInt(req.query.id as string) // récupéré depuis l'URL dynamique [id]

  if (isNaN(tacheId)) {
    return res.status(400).json({ error: 'ID de tâche principal invalide.' })
  }

  if (req.method === 'GET') {
    const { page = 1, limit = 100, search = '', sortBy = 'nom', order = 'asc', sousTacheid } = req.query

    const parsedPage = parseInt(page as string) || 1
    const parsedLimit = parseInt(limit as string) || 100

    // ✅ Cas 1 : si on ne précise PAS sousTacheid => charger toutes les sous-tâches de la tâche principale
    if (!sousTacheid) {
      try {
        const sousTaches = await prisma.sousTacheProjet.findMany({
          where: { tacheId },
          select: {
            id: true,
            titre: true,
            tache: {
              select: {
                id: true,
                titre: true,
              },
            },
          },
        })

        return res.status(200).json({
          data: sousTaches,
          total: sousTaches.length,
        })
      } catch (error) {
        console.error('Erreur lors du chargement des sous-tâches :', error)
        return res.status(500).json({ error: 'Erreur serveur.' })
      }
    }

    // ✅ Cas 2 : on précise sousTacheid => charger les assignations
    const sousTacheId = parseInt(sousTacheid as string)

    if (isNaN(sousTacheId)) {
      return res.status(400).json({ error: 'ID invalide.' })
    }

    try {
      const sousTache = await prisma.sousTacheProjet.findUnique({
        where: { id: sousTacheId },
        include: {
          tache: true, // ⚠️ nécessaire pour accéder à tache.id
        },
      })

      if (!sousTache) {
        return res.status(404).json({ error: 'Sous-tâche non trouvée.' })
      }

      const skip = (Number(parsedPage) - 1) * Number(parsedLimit)

      // Étape 1 : récupérer les utilisateurs assignés à la tâche principale
      const [utilisateursTachePrincipale, total] = await Promise.all([
        prisma.tacheUtilisateur.findMany({
          where: {
            tacheId: sousTache.tache.id,
            user: {
              OR: [
                { nom: { contains: String(search), mode: 'insensitive' } },
                { prenom: { contains: String(search), mode: 'insensitive' } },
              ],
            },
          },
          include: {
            user: true,
          },
          skip,
          take: Number(parsedLimit),
          orderBy: {
            user: { [sortBy as string]: order === 'asc' ? 'asc' : 'desc' },
          },
        }),

        prisma.tacheUtilisateur.count({
          where: {
            tacheId: sousTache.tache.id,
            user: {
              OR: [
                { nom: { contains: String(search), mode: 'insensitive' } },
                { prenom: { contains: String(search), mode: 'insensitive' } },
              ],
            },
          },
        })
      ])

      // Étape 2 : vérifier s’ils sont aussi assignés à la sous-tâche
      const utilisateursIds = utilisateursTachePrincipale.map(ut=> ut.userId)
      const sousTachesAssignations = await prisma.sousTacheUtilisateur.findMany({
        where: { 
            sousTacheProjetId: sousTacheId,
            userId: { in: utilisateursIds },
        }
      })

      const mapAssignations = new Map(
        sousTachesAssignations.map(a => [a.userId, a])
      )

      const resultats = utilisateursTachePrincipale.map(ut =>{ 
        const assignation = mapAssignations.get(ut.userId)
        return {
          id: ut.user.id,  
          nom: ut.user.nom,
          estAssigne: !!assignation,
          statutPersonnel: assignation?.statutPersonnel ?? null,
          dateDebut: assignation?.dateDebut ?? null,
          dateFin: assignation?.dateFin ?? null,
        }
      })

      return res.status(200).json({
        data: {
          sousTache: {
            id: sousTache.id,
            titre: sousTache.titre,
            tachePrincipale: {
              id: sousTache.tache.id,
              titre: sousTache.tache.titre,
            },
          },
          utilisateurs: resultats,
        },
        total,
      })
   
    } catch (error) {
      console.error('Erreur GET assignations sous-tâche :', error)
      return res.status(500).json({ error: 'Erreur serveur.' })
    }
  }

  if (req.method === 'POST') {
    const session = await getAuthSession()
    if (!session || !session.user) {
      return res.status(401).json({ error: 'Non authentifié.' })
    }

    const sousTacheId = parseInt(req.query.sousTacheid as string)

    if (isNaN(sousTacheId)) {
      return res.status(400).json({ error: 'ID invalide.' })
    }

  // 1️⃣ Cas : assignation multiple de plusieurs sous-tâches
  const { assignationsParSousTache }: { assignationsParSousTache?: { sousTacheId: number, utilisateursIds: number[] }[] } = req.body

  if (Array.isArray(assignationsParSousTache)) {
    try {
      for (const { sousTacheId, utilisateursIds } of assignationsParSousTache) {
        const sousTache = await prisma.sousTacheProjet.findUnique({
          where: { id: sousTacheId },
          include: {
            tache: true,
            utilisateurs: true,
          },
        })

        if (!sousTache) continue

        const tacheId = sousTache.tacheId
        const utilisateursValides = await prisma.tacheUtilisateur.findMany({
          where: { tacheId },
          select: { userId: true },
        })

        const idsValides = new Set(utilisateursValides.map(u => u.userId))
        const utilisateursFiltres = utilisateursIds.filter(id => idsValides.has(id))

        const anciensIds = sousTache.utilisateurs.map(u => u.userId)
        const idsAjoutes = utilisateursFiltres.filter(id => !anciensIds.includes(id))
        const idsRetires = anciensIds.filter(id => !utilisateursFiltres.includes(id))

        // Nettoyage
        await prisma.sousTacheUtilisateur.deleteMany({
          where: { sousTacheProjetId: sousTacheId },
        })

        // Nouvelle assignation
        const assignations = utilisateursFiltres.map(userId => ({
          sousTacheProjetId: sousTacheId,
          userId,
          statutPersonnel: 'ATTENTE' as Statut,
          createdAt: new Date(),
          updatedAt: new Date(),
        }))

        await prisma.sousTacheUtilisateur.createMany({
          data: assignations,
          skipDuplicates: true,
        })

        // Notifications
        const notifications = [
          ...idsAjoutes.map(userId => ({
            message: `Vous avez été assigné(e) à la sous-tâche "${sousTache.titre}".`,
            userId,
            emetteurId: parseInt(session.user.id),
            sousTacheProjetId: sousTache.id,
          })),
          ...idsRetires.map(userId => ({
            message: `Vous avez été retiré(e) de la sous-tâche "${sousTache.titre}".`,
            userId,
            emetteurId: parseInt(session.user.id),
            sousTacheProjetId: sousTache.id,
          })),
        ]

        await prisma.notification.createMany({ data: notifications })
      }

      return res.status(200).json({ message: 'Assignations multiples enregistrées.' })
    } catch (error) {
      console.error('Erreur assignation multiple :', error)
      return res.status(500).json({ error: 'Erreur serveur lors des assignations multiples.' })
    }
  }

    // 2️⃣ Cas classique : assignation d’une seule sous-tâche (ton ancienne logique)
    const { utilisateursIds }: { utilisateursIds: number[] } = req.body

    if (!Array.isArray(utilisateursIds)) {
      return res.status(400).json({ error: 'Liste invalide.' })
    }

    try {
      const sousTache = await prisma.sousTacheProjet.findUnique({
        where: { id: sousTacheId },
        include: {
          tache: true,
          utilisateurs: true,
        },
      })

      if (!sousTache) {
        return res.status(404).json({ error: 'Sous-tâche non trouvée.' })
      }

      const tacheId = sousTache.tacheId
      const utilisateursValides = await prisma.tacheUtilisateur.findMany({
        where: { tacheId },
        select: { userId: true },
      })

      const idsValides = new Set(utilisateursValides.map(u => u.userId))
      const idsInvalides = utilisateursIds.filter(id => !idsValides.has(id))
      if (idsInvalides.length > 0) {
        return res.status(400).json({
          error: 'Certains utilisateurs ne sont pas assignés à la tâche principale.',
          invalidUserIds: idsInvalides,
        })
      }

      const anciensIds = sousTache.utilisateurs.map(u => u.userId)
      const idsAjoutes = utilisateursIds.filter(id => !anciensIds.includes(id))
      const idsRetires = anciensIds.filter(id => !utilisateursIds.includes(id))

      await prisma.sousTacheUtilisateur.deleteMany({
        where: { sousTacheProjetId: sousTacheId },
      })

      const assignations = utilisateursIds.map(userId => ({
        sousTacheProjetId: sousTacheId,
        userId,
        statutPersonnel: 'ATTENTE' as Statut,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))

      await prisma.sousTacheUtilisateur.createMany({
        data: assignations,
        skipDuplicates: true,
      })

      const notifications = [
        ...idsAjoutes.map(userId => ({
          message: `Vous avez été assigné(e) à la sous-tâche "${sousTache.titre}".`,
          userId,
          emetteurId: parseInt(session.user.id),
          sousTacheProjetId: sousTache.id,
        })),
        ...idsRetires.map(userId => ({
          message: `Vous avez été retiré(e) de la sous-tâche "${sousTache.titre}".`,
          userId,
          emetteurId: parseInt(session.user.id),
          sousTacheProjetId: sousTache.id,
        })),
      ]

      await prisma.notification.createMany({ data: notifications })

      return res.status(200).json({ message: 'Assignations mises à jour avec notifications.' })
    } catch (error) {
      console.error('Erreur assignation POST :', error)
      return res.status(500).json({ error: 'Erreur serveur.' })
    }
  }

  return res.status(405).json({ error: 'Méthode non autorisée.' })
}
