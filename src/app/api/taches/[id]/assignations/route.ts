// /app/api/taches/[id]/assignations/route.ts

import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getAuthSession } from "@/lib/auth"

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
      estAssigne: idsAssigne.includes(m.user.id),

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

export async function POST(req: Request, { params }: { params: { id: string } }) {

   // 1. Récupérer la session (l'utilisateur connecté)
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }
  const emetteurId = parseInt(session.user.id)

  const tacheId = parseInt(params.id)
  if (isNaN(tacheId)) {
    return NextResponse.json({ message: "ID de tâche invalide" }, { status: 400 })
  }

  try {
    const body = await req.json();
    const { utilisateursIds } = body

    if (!Array.isArray(utilisateursIds)) {
      return NextResponse.json({ message: "Liste des utilisateurs invalide" }, { status: 400 })
    }

    // Récupère les assignations existantes
    const anciennesAssignations = await prisma.tacheUtilisateur.findMany({
      where: { tacheId },
      select: { userId: true },
    });

    const anciensIds = anciennesAssignations.map((a) => a.userId);
    const nouveauxIds = utilisateursIds;

    const aAjouter = nouveauxIds.filter((id) => !anciensIds.includes(id));
    const aSupprimer = anciensIds.filter((id) => !nouveauxIds.includes(id));

    // 2. Effectue en parallèle les ajouts et suppressions
    await Promise.all([
      aAjouter.length > 0
        ? prisma.tacheUtilisateur.createMany({
            data: aAjouter.map((userId) => ({ tacheId, userId })),
          })
        : Promise.resolve(), // ✅

      aSupprimer.length > 0
        ? prisma.tacheUtilisateur.deleteMany({
            where: {
              tacheId,
              userId: { in: aSupprimer },
            },
          })
        : Promise.resolve(), // ✅
    ]);

    // 2. Récupère la tâche avec son projet pour les notifications
    const tache = await prisma.tache.findUnique({
      where: { id: tacheId },
      select: {
        id: true,
        titre: true,
        projet: {
          select: {
            id: true,
            nom: true,
          },
        },
      },
    });

    if (!tache) {
      return NextResponse.json({ message: "Tâche introuvable" }, { status: 404 });
    }

    // 3. Construit les notifications
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

    // 4. Enregistre les notifications
    if (notificationsData.length > 0) {
      await prisma.notification.createMany({ data: notificationsData });
    }

    return NextResponse.json({ message: "Assignations et notifications mises à jour" });
  } catch (error) {
    console.error("Erreur POST assignations:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
