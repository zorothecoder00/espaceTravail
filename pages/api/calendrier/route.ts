// app/api/calendrier/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const taches = await prisma.tache.findMany({
      select: {
        id: true,
        titre: true,
        deadline: true,
        projet: {
          select: { nom: true }
        }
      },
      where: {
        deadline: { not: null }  
      },
      orderBy: {
        deadline: 'asc'
      }
    })

    return NextResponse.json(taches)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
