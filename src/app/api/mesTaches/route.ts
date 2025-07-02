import { NextResponse } from "next/server"  
import prisma from "@/lib/prisma"
import { getAuthSession } from "@/lib/auth"
import type { Tache, Projet, TacheUtilisateur, Statut } from "@prisma/client"

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
  const limit = 10
  const skip = (page - 1) * limit

  const sortField = searchParams.get('sortField') || "createdAt"
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc'

  try {
    const [tachesAssignees, totalTaches]: [TacheUtilisateurAvecTache[], number] = await Promise.all([
        prisma.tacheUtilisateur.findMany({  
          where: {
            userId: parseInt(session.user.id),
              OR: [
                { tache: { titre: { contains: search, } } },
                { tache: { statut: { equals: search as Statut } } },
                { tache: { projet: { nom: { contains: search } } } },
              ],
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
              [sortField]: sortOrder,
            }         
          },
          skip,
          take: limit,
        }),

        prisma.tacheUtilisateur.count({
          where: {
            userId: parseInt(session.user.id),
            OR: [
              { tache: { titre: { contains: search } } },
              { tache: { statut: { equals: search as Statut } } },
              { tache: { projet: { nom: { contains: search } } } },
            ],
          },
        }),
    ])    

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
