import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Statut } from "@prisma/client";  

// GET – Liste des tâches
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  // 🔢 Pagination
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const skip = (page - 1) * limit

  // 🔍 Filtrage
  const search = searchParams.get('search')?.trim() || ''  

  // ↕️ Tri dynamique
  const sortField = searchParams.get('sortField') || 'createdAt'
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc'
  try {
    const [taches, total] = await Promise.all([
      prisma.tache.findMany({
        where: {
          OR: [
            { titre: { contains: search } },
            { projet: { nom: { contains: search } } },
            { statut: { equals: search as Statut } },
          ],
        },
        include: {
          projet: true,
        },
        orderBy: { [sortField]: sortOrder },
        skip,
        take: limit,
      }),

      prisma.tache.count()
    ])

    return NextResponse.json({
      data: taches,
      total,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Erreur lors de la récupération des tâches' }, { status: 500 })
  }
}

// POST – Création d'une tâche
export async function POST(req: Request) {
  const body = await req.json()

  if (!body.titre || !body.projetId) {
    return NextResponse.json({ message: 'Le titre et le projet sont requis' }, { status: 400 })
  }

  try {
    const tache = await prisma.tache.create({
      data: {
        titre: body.titre,
        description: body.description || null,
        deadline: body.deadline ? new Date(body.deadline) : null,
        projetId: parseInt(body.projetId),
        statut: body.statut || Statut.ATTENTE,
      },
    })

    return NextResponse.json(tache, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Erreur lors de la création de la tâche' }, { status: 500 })
  }
}
