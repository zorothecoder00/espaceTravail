import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  const { utilisateurId, projetId } = body

  if (!utilisateurId || !projetId) {
    return NextResponse.json({ message: 'utilisateurId et projetId sont requis' }, { status: 400 })
  }

  try {
    await prisma.utilisateurProjet.create({
      data: {
        utilisateurId,
        projetId,
      },
    })

    return NextResponse.json({ message: 'Assignation réussie' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de l’assignation au projet' }, { status: 500 })
  }
}
