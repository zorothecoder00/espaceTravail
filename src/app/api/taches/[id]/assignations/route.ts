// /app/api/taches/[id]/assignations/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) 
{
  const tacheId = parseInt(params.id);

  if (isNaN(tacheId)) {
    return NextResponse.json({ message: "ID de tâche invalide" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const search = searchParams.get("search") || "";

  const sortField = searchParams.get("sortField") || "nom";
  const sortOrder = searchParams.get("sortOrder") === "desc" ? "desc" : "asc";

  try {
    // 1. Récupère la tâche
    const tache = await prisma.tache.findUnique({
      where: { id: tacheId },
    });

    if (!tache) {
      return NextResponse.json({ message: "Tâche introuvable" }, { status: 404 });
    }

    const projetId = tache.projetId;

    // 2. Récupère les membres du projet
    const [membresProjet, assignations] = await Promise.all([
      prisma.membreProjet.findMany({
        where: { 
          projetId,
          user: { nom: { contains: search } }, 
      },
        include: { 
          user: {
            select: { id: true, nom: true}
          }
        },
        skip,
        take: limit,
        orderBy: {
          [sortField]: sortOrder,
        }
      }),

      // 3. Récupère les utilisateurs déjà assignés à cette tâche
      prisma.tacheUtilisateur.findMany({
        where: { tacheId },
      }),
    ])

    const idsAssigne = assignations.map((a) => a.userId);

    // 4. Construit la réponse
    const membresAvecStatut = membresProjet.map((m) => ({
      id: m.user.id,
      nom: m.user.nom,
      estAssigne: idsAssigne.includes(m.userId),

    }));

    // 5. Total pour pagination
    const total = await prisma.membreProjet.count({
      where: {
        projetId,
        user: { nom: { contains: search } },
      },
    });

    return NextResponse.json({
      data: membresAvecStatut,
      total,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error("Erreur API assignations tâche :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}   
