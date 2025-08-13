// /pages/api/projetsEncours.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { Statut } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const projetsEnCours = await prisma.projet.findMany({
      where: {
        statut: Statut.EN_COURS,
      },
      select: {
        id: true,
        nom: true,
        deadline: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({ data: projetsEnCours });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets en cours :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
