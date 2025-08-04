import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getAuthSession } from "@/lib/auth";
import { Prisma, Statut } from '@prisma/client'

export default async function handler(  
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tacheId = parseInt(req.query.id as string);
  if (isNaN(tacheId)) {
    return res.status(400).json({ message: "ID de tâche invalide" });
  }

  if (req.method === "GET") {
    try{
      const {
        page = "1",
        limit = "10",
        search = "",
        sortField = "user.nom",
        sortOrder = "asc",
      } = req.query;

      const pageNum = parseInt(page as string);
      const limitNum = parseInt(limit as string);
      const skip = (pageNum - 1) * limitNum;
      const searchStr = (search as string).trim();

      const allowedFields = ["user.nom"];
      const rawField = allowedFields.includes(sortField as string) ? (sortField as string) : "user.nom";
      const order: "asc" | "desc" = sortOrder === "desc" ? "desc" : "asc";

      let orderBy: Prisma.MembreProjetOrderByWithRelationInput;
      if (rawField === "user.nom") {
        orderBy = { user: { nom: order } };
      } else {
        orderBy = { [rawField]: order };
      }

      // Étape 1 : Vérifier la tâche
      const tache = await prisma.tache.findUnique({ where: { id: tacheId }, select: { projetId: true } });
      if (!tache) {
        return res.status(404).json({ message: "Tâche introuvable" });
      }
      const projetId = tache.projetId;

      // Étape 2 & 3 en parallèle
      const [membresProjet, total, assignations] = await Promise.all([
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

        prisma.tacheUtilisateur.findMany({
          where: {
            tacheId,
          },
          select: {
            userId: true,
            statutPersonnel: true,
            dateDebut: true,
            dateFin: true,
          },
        }),
      ]);

      const membresAvecStatut = membresProjet.map((m) => {
        const assignation = assignations.find((a) => a.userId === m.user.id);

        // Vérification sécurisée du statutPersonnel
        let statut: Statut | null = null;
        if (
          assignation?.statutPersonnel &&
          Object.values(Statut).includes(assignation.statutPersonnel)
        ) {
          statut = assignation.statutPersonnel;
        }

        return {
          id: m.user.id,
          nom: m.user.nom,
          estAssigne: !!assignation,
          statutPersonnel: statut,
          dateDebut: assignation?.dateDebut ?? null,
          dateFin: assignation?.dateFin ?? null,
        };
      });

      return res.status(200).json({
        data: membresAvecStatut,
        total,
        totalPages: Math.ceil(total / limitNum),
      });
    }catch (error) {
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
          lien: `/shared/taches/${tacheId}`,
        })),
        ...aSupprimer.map((userId) => ({
          userId,
          emetteurId,
          tacheId,
          projetId: tache.projet.id,
          message: `Vous avez été retiré de la tâche "${tache.titre}" du projet "${tache.projet.nom}"`,
          lien: `/shared/taches/${tacheId}`,
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
