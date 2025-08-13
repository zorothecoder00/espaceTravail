// /pages/api/usersOnline.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // adapte le chemin selon ton projet

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const now = new Date();
    const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);

    const usersOnline = await prisma.user.findMany({
      where: {
        lastActiveAt: {
          gte: thirtyMinutesAgo,
        },
      },
      select: {
        prenom: true,
        nom: true,
        image: true,
      },
      orderBy: {
        nom: "asc",
      },
    });

    // Si pas d'image, on met une image par défaut
    const formattedUsers = usersOnline.map((u) => ({
      ...u,
      image: u.image || "/profile.png",
    }));

    return res.status(200).json({ data: formattedUsers });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs en ligne :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
