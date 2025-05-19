import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  const { userId, tacheId } = body

  if (!userId || !tacheId) {
    return NextResponse.json({ message: 'userId et tacheId sont requis' }, { status: 400 })
  }

  try {
    await prisma.tacheUtilisateur.create({
      data: {
        userId,
        tacheId,
      },
    })

    return NextResponse.json({ message: 'Assignation réussie' })
  } catch (error) {
    console.error('Erreur lors de l’assignation à la tâche :', error)
    return NextResponse.json({ message: 'Erreur lors de l’assignation à la tâche' }, { status: 500 })
  }
}
