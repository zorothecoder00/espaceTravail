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
    const projet = await prisma.projet.findFirst({
      where: {
        id: projetId,
        chefProjetId: parseInt(session.user.id), // sécurité
      },
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
      return NextResponse.json({ message: "Projet introuvable ou accès refusé" }, { status: 404 })
    }

    return NextResponse.json({ data: projet }, { status: 200 })
  } catch (error) {
    console.error("Erreur GET mesProjetsDiriges/:id :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }  
}
