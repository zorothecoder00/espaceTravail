import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)

  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const tache = await prisma.tache.findUnique({
      where: { id },
      select: {
        id: true,
        titre: true,
        deadline: true,
        description: true,
        statut: true,
        projet: {
          select: { id: true, nom: true }
        },
      },
    })

    if (!tache) {
      return NextResponse.json({ message: 'Tâche introuvable' }, { status: 404 })
    }

    return NextResponse.json({ data: tache }, { status: 200 })
  } catch (error) {
    console.error('Erreur GET calendrier/:id :', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}
