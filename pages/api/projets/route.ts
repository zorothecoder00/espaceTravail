import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' 

// GET — liste avec option de recherche et pagination
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const search = searchParams.get('search') || ''

  const projets = await prisma.projet.findMany({
    where: {
      nom: {
        contains: search,
        mode: 'insensitive',
      },
    },
    include: {
      departement: true,
    },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' },
  })

  const total = await prisma.projet.count({
    where: {
      nom: {
        contains: search,
        mode: 'insensitive',
      },
    },
  })

  return NextResponse.json({ data: projets, total })
}

// POST — création d’un projet
export async function POST(req: Request) {
  const body = await req.json()

  if (!body.nom || !body.departementId) {
    return NextResponse.json({ message: 'Nom et département requis' }, { status: 400 })
  }

  try {
    const projet = await prisma.projet.create({
      data: {
        nom: body.nom,
        description: body.description || null,
        departementId: body.departementId,
      },
    })
    return NextResponse.json(projet, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la création' }, { status: 500 })
  }
}
