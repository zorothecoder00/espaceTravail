import { NextResponse } from "next/server"
import { getAuthSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import type { Statut, Projet, Departement, MembreProjet } from "@prisma/client"

type ProjetAvecDepartement = Projet & {
  departement: Departement
}

type MembreProjetAvecProjet = MembreProjet & {
  projet: ProjetAvecDepartement
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

  const sortField = searchParams.get('sortField') || 'createdAt'
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc'

  try {
    const [projetsAssignes, total]: [MembreProjetAvecProjet[], number] = await Promise.all([
      prisma.membreProjet.findMany({
        where: {
          userId: parseInt(session.user.id),
          OR: [
            { projet: { nom: { contains: search } } },
            { projet: { statut: { equals: search as Statut } } },
            { projet: { departement: { nom: { contains: search } } } },
          ],
        },
        include: {
          projet: {
            include: {
              departement: true,
            },
          },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          projet: {
            [sortField]: sortOrder,
          },
        },
      }),

      prisma.membreProjet.count({
        where: {
          userId: parseInt(session.user.id),
          OR: [
            { projet: { nom: { contains: search } } },
            { projet: { statut: { equals: search as Statut } } },
            { projet: { departement: { nom: { contains: search } } } },
          ],
        },
      }),
    ])

    const projets = projetsAssignes.map((item) => item.projet)

    return NextResponse.json({
      data: projets,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des projets assignés:', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
