   import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getAuthSession } from "@/lib/auth"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const projetId = parseInt(params.id)
  if (!params.id || isNaN(projetId)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  try {
    // Vérifie si l’utilisateur est membre du projet
    const membre = await prisma.membreProjet.findUnique({
      where: {
        userId_projetId: {
          userId: parseInt(session.user.id),
          projetId,
        },
      },
    })

    if (!membre) {
      return NextResponse.json({ message: "Accès refusé à ce projet" }, { status: 403 })
    }

    const projet = await prisma.projet.findUnique({
      where: { id: projetId },
      include: {
        departement: { select: { id: true, nom: true } },
        chefProjet: { select: { id: true, nom: true, prenom: true } },
        membres: {
          include: {
            user: { select: { id: true, nom: true, prenom: true } },
          },
        },
        taches: true,
        partages: true,
        notifications: true,
        messages: true,
      },
    })

    if (!projet) {
      return NextResponse.json({ message: "Projet introuvable" }, { status: 404 })
    }

    return NextResponse.json({ data: projet }, { status: 200 })
  } catch (error) {
    console.error("Erreur GET mesProjets/:id :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}
