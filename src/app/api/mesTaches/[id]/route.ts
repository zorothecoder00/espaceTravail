import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { getAuthSession } from "@/lib/auth"  

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession()

  if (!session?.user) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  try {
    // Vérifie que l'utilisateur est bien assigné à la tâche
    const assignation = await prisma.tacheUtilisateur.findUnique({
      where: {
        tacheId_userId: {
          userId: parseInt(session.user.id),
          tacheId: id,
        },
      },
    })

    if (!assignation) {
      return NextResponse.json(
        { message: "Vous n'êtes pas assigné à cette tâche" },
        { status: 403 }
      )
    }

    // Récupère la tâche complète avec toutes les relations utiles
    const tache = await prisma.tache.findUnique({
      where: { id },
      include: {
        projet: { select: { id: true, nom: true } },
        TacheUtilisateur: {
          include: {
            user: { select: { id: true, nom: true, prenom: true } },
          },
        },
        notifications: true,
        messages: true,
      },
    })

    if (!tache) {
      return NextResponse.json({ message: "Tâche introuvable" }, { status: 404 })
    }

    return NextResponse.json({ data: tache }, { status: 200 })
  } catch (error) {
    console.error("Erreur serveur GET tâche détaillée :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}
