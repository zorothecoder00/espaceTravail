import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth";
import { Prisma } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tacheId = parseInt(req.query.id as string);
  if (isNaN(tacheId)) {
    return res.status(400).json({ message: "ID de tâche invalide" });
  }

  if (req.method === "GET") {
    try {
      const { page = "1", limit = "10", search = "", sortField = "nom", sortOrder = "asc" } = req.query;

      const pageNum = parseInt(page as string);
      const limitNum = parseInt(limit as string);
      const skip = (pageNum - 1) * limitNum;
      const searchStr = (search as string).trim();
      // ---------- Sécurisation du champ de tri ----------
      const allowedFields = ['user.nom', 'role']                // 👈 utilisé
      const rawField      = allowedFields.includes(sortField as string)
        ? (sortField as string)
        : 'createdAt'                                           // fallback

      const order: 'asc' | 'desc' = sortOrder === 'asc' ? 'asc' : 'desc'

      // Construction dynamique pour Prisma
      let orderBy: Prisma.MembreProjetOrderByWithRelationInput
      if (rawField === 'user.nom') {
        orderBy = { user: { nom: order } }
      } else if (rawField === 'role') {
        orderBy = { role: order }
      } else {
        orderBy = { createdAt: order }
      }

      // 1. Vérifier que la tâche existe
      const tache = await prisma.tache.findUnique({ where: { id: tacheId } });
      if (!tache) {
        return res.status(404).json({ message: "Tâche introuvable" });
      }

      const projetId = tache.projetId;

      // 2. Récupérer membres du projet avec pagination et filtrage
      const [membresProjet, total] = await Promise.all([
        prisma.membreProjet.findMany({
          where: {
            projetId,
            user: { nom: { contains: searchStr, mode: "insensitive" } },
          },
          include: { user: { select: { id: true, nom: true } } },
          skip,
          take: limitNum,
          orderBy,
        }),

        prisma.membreProjet.count({
          where: {
            projetId,
            user: { nom: { contains: searchStr, mode: "insensitive" } },
          },
        }),
      ]);

      // 3. Récupérer utilisateurs déjà assignés à la tâche
      const assignations = await prisma.tacheUtilisateur.findMany({
        where: { tacheId },
      });

      const idsAssigne = assignations.map((a) => a.userId);

      // 4. Construire réponse avec statut d'assignation
      const membresAvecStatut = membresProjet.map((m) => ({
        id: m.user.id,
        nom: m.user.nom,
        estAssigne: idsAssigne.includes(m.user.id),
      }));

      return res.status(200).json({
        data: membresAvecStatut,
        total,
        totalPages: Math.ceil(total / limitNum),
      });
    } catch (error) {
      console.error("Erreur API assignations tâche :", error);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  if (req.method === "POST") {
    try {
      // Authentification
      const session = await getAuthSession(req, res);
      if (!session?.user?.id) {
        return res.status(401).json({ message: "Non autorisé" });
      }
      const emetteurId = parseInt(session.user.id);

      const body = req.body;
      const utilisateursIds = body.utilisateursIds;

      if (!Array.isArray(utilisateursIds)) {
        return res.status(400).json({ message: "Liste des utilisateurs invalide" });
      }

      // Récupérer assignations existantes
      const anciennesAssignations = await prisma.tacheUtilisateur.findMany({
        where: { tacheId },
        select: { userId: true },
      });

      const anciensIds = anciennesAssignations.map((a) => a.userId);
      const nouveauxIds = utilisateursIds;

      const aAjouter = nouveauxIds.filter((id) => !anciensIds.includes(id));
      const aSupprimer = anciensIds.filter((id) => !nouveauxIds.includes(id));

      // Mise à jour assignations en parallèle
      await Promise.all([
        aAjouter.length > 0
          ? prisma.tacheUtilisateur.createMany({
              data: aAjouter.map((userId) => ({ tacheId, userId })),
            })
          : Promise.resolve(),

        aSupprimer.length > 0
          ? prisma.tacheUtilisateur.deleteMany({
              where: { tacheId, userId: { in: aSupprimer } },
            })
          : Promise.resolve(),
      ]);

      // Récupérer tâche pour notifications
      const tache = await prisma.tache.findUnique({
        where: { id: tacheId },
        select: {
          id: true,
          titre: true,
          projet: { select: { id: true, nom: true } },
        },
      });

      if (!tache) {
        return res.status(404).json({ message: "Tâche introuvable" });
      }

      // Construire notifications
      const notificationsData = [
        ...aAjouter.map((userId) => ({
          userId,
          emetteurId,
          tacheId,
          projetId: tache.projet.id,
          message: `Vous avez été assigné à la tâche "${tache.titre}" du projet "${tache.projet.nom}"`,
          lien: `/taches/${tacheId}`,
        })),
        ...aSupprimer.map((userId) => ({
          userId,
          emetteurId,
          tacheId,
          projetId: tache.projet.id,
          message: `Vous avez été retiré de la tâche "${tache.titre}" du projet "${tache.projet.nom}"`,
          lien: `/taches/${tacheId}`,
        })),
      ];

      if (notificationsData.length > 0) {
        await prisma.notification.createMany({ data: notificationsData });
      }

      return res.status(200).json({ message: "Assignations et notifications mises à jour" });
    } catch (error) {
      console.error("Erreur POST assignations:", error);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` });
}
