import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  const { utilisateurId, tacheId } = body

  if (!utilisateurId || !tacheId) {
    return NextResponse.json({ message: 'utilisateurId et tacheId sont requis' }, { status: 400 })
  }

  try {
    await prisma.utilisateurTache.create({
      data: {
        utilisateurId,
        tacheId,
      },
    })

    return NextResponse.json({ message: 'Assignation réussie' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de l’assignation à la tâche' }, { status: 500 })
  }
}
