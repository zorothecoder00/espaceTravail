import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Statut, RoleProjet } from '@prisma/client'

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
        //mode: 'insensitive',
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
        //mode: 'insensitive',
      },
    },
  })

  return NextResponse.json({ data: projets, total })
}

// POST — création d’un projet avec chefProjet et insertion dans MembreProjet
export async function POST(req: Request) {
  const body = await req.json()
  const { nom, description, deadline, statut, departementId, chefProjetId } = body

  if (!nom || !departementId || !chefProjetId) {
    return NextResponse.json(
      { message: 'Nom, département et chef de projet requis' },
      { status: 400 }
    )
  }

  try {
    // Étape 1 : création du projet
    const projet = await prisma.projet.create({
      data: {
        nom: nom.trim(),
        description: description?.trim() || null,
        deadline: deadline ? new Date(deadline) : null,
        statut: statut || Statut.ATTENTE,
        departementId,
        chefProjetId,
      },
    })

    // Étape 2 : ajout du chef dans MembreProjet avec le rôle CHEF_EQUIPE
    await prisma.membreProjet.create({
      data: {
        userId: chefProjetId,
        projetId: projet.id,
        role: RoleProjet.CHEF_EQUIPE,
      },
    })

    return NextResponse.json(projet, { status: 201 })
  } catch (error) {
    console.error('Erreur création projet:', error)
    return NextResponse.json({ message: 'Erreur lors de la création' }, { status: 500 })
  }
}
