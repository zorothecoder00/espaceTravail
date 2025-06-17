import { NextResponse } from "next/server"  
import prisma from "@/lib/prisma"
import { getAuthSession } from "@/lib/auth"
import type { Tache, Projet, TacheUtilisateur } from "@prisma/client"

type TacheAvecProjet = Tache & {
  projet: Projet
}

type TacheUtilisateurAvecTache = TacheUtilisateur & {
  tache: TacheAvecProjet
}


export async function GET(req: Request) {
  const session = await getAuthSession()

  if (!session?.user) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 25

  try {
    const tachesAssignees: TacheUtilisateurAvecTache[] = await prisma.tacheUtilisateur.findMany({
      where: {
        userId: parseInt(session.user.id),
        tache: {
            titre: {
              contains: search,
            },
        },
      },
      include: {
        tache: {
          include: {
            projet: true,
          },
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    })

    const totalTaches = await prisma.tacheUtilisateur.count({
      where: {
        userId: parseInt(session.user.id),
        tache: { 
            titre: {
              contains: search,
            },
        },
      },
    })

    const taches = tachesAssignees.map((item) => item.tache)

    return NextResponse.json({  
      taches,
      total: totalTaches,
      totalPages: Math.ceil(totalTaches / limit),
    })
  } catch (error) {
    console.error("Erreur interne :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}
