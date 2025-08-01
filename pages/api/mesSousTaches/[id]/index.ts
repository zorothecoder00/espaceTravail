import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'     
import { Statut, Prisma } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const id = parseInt(req.query.id as string)
  const session = await getAuthSession(req, res)

  if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })  

  if (isNaN(id)) return res.status(400).json({ message: 'ID invalide' })

  const userId = parseInt(session.user.id)

  // Vérifier que l'utilisateur est bien assigné à cette tâche
  const assignation = await prisma.sousTacheUtilisateur.findUnique({
    where: {
      sousTacheProjetId_userId: {
        userId,
        sousTacheProjetId: id,
      },
    },
  })

  if (!assignation) {
    return res.status(403).json({ message: "Vous n'êtes pas assigné à cette sous tâche" })
  }

  if (req.method === 'GET') {

    try {
      const sousTache = await prisma.sousTacheProjet.findUnique({
        where: { id },
        include: {
          tache: {
            select: {
              id: true, 
              titre: true, 
            },
            include: {
              projet: {
                select: {
                  nom: true
                }
              }
            }
          },
          responsable: {
            select: {
              nom: true
            }
          },
          utilisateurs: {
            select: {
              statutPersonnel: true,
              dateDebut: true,
              dateFin: true,
              user: {
                select: {
                  id: true,
                  nom: true,
                  prenom: true,
                }
              }
            }
          },
          piecesJointes: true,
          commentaires: true,
          notifications: true,
        }
      })

      if (!sousTache) {
        return res.status(404).json({ message: 'Sous-tâche introuvable' })
      }

      return res.status(200).json({ data: sousTache })
    } catch (error) {
      console.error("Erreur serveur", error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  if (req.method === 'PUT') {

    const { statutPersonnel, dateDebut, dateFin } = req.body

    try {
      const data: Partial<Prisma.SousTacheUtilisateurUpdateInput> = {}

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
          } else if (statutPersonnel === Statut.TERMINE) {
            data.dateFin = new Date() // par défaut si non fournie
          }

          // Si statut EN_COURS, on peut vouloir reset dateFin à null si pas spécifié
          if (statutPersonnel === Statut.EN_COURS && !dateFin) {
            data.dateFin = null
          }

      }else if (statutPersonnel) {
          return res.status(400).json({ message: 'Statut personnel invalide' })
      }

      const updated = await prisma.sousTacheUtilisateur.update({
        where: {
          sousTacheProjetId_userId: {
            sousTacheProjetId: id,
            userId,
          }    
        },
        data,
      })

      const sousTache = await prisma.sousTacheProjet.findUnique({
        where: { id },
        select: {
          titre: true,
          tache: {
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
              }
            }         
          },
        },
      })

      if (
          sousTache?.tache?.projet?.chefProjet?.id &&
          sousTache.tache?.projet.chefProjet.id !== userId
        ) {
          await prisma.notification.create({
            data: {
              userId: sousTache.tache.projet.chefProjet.id, // destinataire = chef de projet
              emetteurId: userId,                         // celui qui a mis à jour
              sousTacheProjetId: id,
              tacheId: sousTache.tache.id,
              projetId: sousTache.tache.projet.id,
              message: `L'utilisateur ${session.user.nom} ${session.user.prenom} a mis à jour sa progression sur la sous tâche "${sousTache.titre}" de la tâche principale"${sousTache.tache.titre}" (statut personnel: ${statutPersonnel})`,
            },
          })
        }

      return res.status(200).json({ message: 'Mise à jour réussie', data: updated })
    }catch (error) {
      console.error('Erreur PUT mesSousTaches/[id] :', error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  res.setHeader('Allow', ['GET', 'PUT'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée`})
}
