import { NextResponse } from 'next/server' 
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json()
  const { userId, projetId } = body

  if (!userId || !projetId) {
    return NextResponse.json({ message: 'userId et projetId sont requis' }, { status: 400 })
  }

  try {
    await prisma.membreProjet.create({
      data: {
        userId,
        projetId,
      },
    })

    return NextResponse.json({ message: 'Assignation réussie' })
  } catch (error) {
    console.error('Erreur lors de l’assignation au projet :', error);
    return NextResponse.json({ message: 'Erreur lors de l’assignation au projet' }, { status: 500 })
  }
}
