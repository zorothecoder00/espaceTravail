// app/api/mon-calendrier/route.ts
import { NextResponse } from "next/server"
import { getAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import type { TacheUtilisateur, Tache, Projet } from "@prisma/client"

type TacheAvecProjet = Tache & {
  projet: Projet  
}

type TacheUtilisateurAvecTache = TacheUtilisateur & {
  tache: TacheAvecProjet
}

export async function GET() {
  const session = await getAuthSession()
  if (!session?.user) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  try {
    const taches:TacheUtilisateurAvecTache[] = await prisma.tacheUtilisateur.findMany({
      where: {
        userId: parseInt(session.user.id),
        tache: {
          deadline: { not: null }
        }
      },
      include: {
        tache: {
          include: {
            projet: true,
          },
        },
      },
      orderBy: {
        tache: {
          deadline: 'asc'
        }
      }
    })

    const result = taches.map((item)=> ({
      id: item.tache.id,
      titre: item.tache.titre,
      deadline: item.tache.deadline,
      projet: item.tache.projet?.nom || '',
    }))

    return NextResponse.json({ data: result })
  } catch (error) {
    console.error("Erreur calendrier personnel :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}
