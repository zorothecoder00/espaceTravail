import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Statut } from "@prisma/client";

// GET – Liste des tâches
export async function GET() {
  try {
    const taches = await prisma.tache.findMany({
      include: {
        projet: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(taches)
  } catch (error) {
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
        statut: body.statut || STATUT.ATTENTE,
      },
    })

    return NextResponse.json(tache, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la création de la tâche' }, { status: 500 })
  }
}
