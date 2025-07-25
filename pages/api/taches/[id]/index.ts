import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Statut, Priorite } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string)

  if (isNaN(id)) {   
    return res.status(400).json({ message: 'ID invalide' })
  }

  if (req.method === 'GET') {
    try {
      const tache = await prisma.tache.findUnique({
        where: { id },
        include: {
          projet: { 
            select: { 
              id: true, 
              nom: true 
            } 
          },
          TacheUtilisateur: { 
            include: { 
              user: { 
                select: { 
                  id: true,
                  nom: true,
                  prenom: true 
                } 
              } 
            } 
          },
          sousTachesProjet: {
            include: {
              responsable: {
                select: {
                  id: true,
                  nom: true,
                  prenom: true,
                },
              },
              utilisateurs: {
                include: {
                  user: {
                    select: {
                      id: true,
                      nom: true,
                      prenom: true,
                    },
                  },
                },
              },
            },
          },
          notifications: true,
          messages: true,
        },
      })

      if (!tache) {
        return res.status(404).json({ message: 'Tâche introuvable' })
      }

      return res.status(200).json({ data: tache })
    } catch (error) {
      console.error('Erreur serveur GET tâche:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const tache = await prisma.tache.findUnique({ where: { id } })

      if (!tache) {
        return res.status(404).json({ message: 'Tâche introuvable' })
      }

      await prisma.tache.delete({ where: { id } })

      return res.status(200).json({ message: 'Tâche supprimée avec succès' })
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'PUT') {     
    try {
      const { titre, description, deadline, statut, projet, sousTaches } = req.body

      if (!titre || titre.trim() === '' || !statut || isNaN(parseInt(projet))) {
        return res.status(400).json({ message: 'Veuillez saisir les champs manquants' })
      }

      const tache = await prisma.tache.findUnique({ 
        where: { id },
        include: { 
          sousTachesProjet: {
            include: { 
              responsable: {
                select: { nom: true },
              } 
            }, 
          }
        }, 
      })

      if (!tache) {
        return res.status(404).json({ message: 'Tâche introuvable' })
      }

      await prisma.tache.update({
        where: { id },
        data: {
          titre: titre.trim(),
          description: description?.trim() || null,
          deadline: deadline ? new Date(deadline) : null,
          statut: statut as Statut,
          projetId: parseInt(projet),
        },
      })

      if (Array.isArray(sousTaches) && sousTaches.length > 0) {
        // Récupérer les IDs des sous-tâches existantes
        const existingSousTacheIds = tache.sousTachesProjet.map(st => st.id)

        // Récupérer les IDs des sous-tâches envoyées (celles à conserver ou à modifier)
        const incomingIds = sousTaches.map(st => st.id).filter(Boolean)

        // Supprimer les sous-tâches supprimées
        const toDelete = existingSousTacheIds.filter(id => !incomingIds.includes(id))
        await prisma.sousTacheProjet.deleteMany({
          where: { id: { in: toDelete } }
        })

         // Mettre à jour ou créer les sous-tâches
        for (const st of sousTaches) {
          const statutValide = Object.values(Statut).includes(st.statut) ? st.statut : Statut.ATTENTE
          const prioriteValide = Object.values(Priorite).includes(st.priorite) ? st.priorite : Priorite.MOYENNE

          if (st.id) {
            // Mise à jour
            await prisma.sousTacheProjet.update({
              where: { id: st.id },
              data: {
                titre: st.titre,
                description: st.description ?? undefined,
                deadline: st.deadline ? new Date(st.deadline) : undefined,
                statut: statutValide,
                responsableId: st.responsableId ? Number(st.responsableId) : undefined,
                priorite: prioriteValide,
              },
            })
          } else {
            // Création
            await prisma.sousTacheProjet.create({    
              data: {
                titre: st.titre,
                description: st.description ?? undefined,
                deadline: st.deadline ? new Date(st.deadline) : undefined,
                statut: statutValide,
                responsableId: st.responsableId ? Number(st.responsableId) : undefined,
                priorite: prioriteValide,
                tacheId: id,
              },
            })
          }
        }
      }   

      // À la fin, après toutes les mises à jour
      const updatedWithSousTaches = await prisma.tache.findUnique({
        where: { id },
        include: {
          sousTachesProjet: {
            include: {
              responsable: {
                select: { nom: true },
              } 
            },
          },
        },
      })

      return res.status(200).json({
        message: 'Tâche mise à jour avec ses sous-tâches',
        data: updatedWithSousTaches,
      })
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la tâche', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
