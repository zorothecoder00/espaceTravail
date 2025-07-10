import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export async function GET() {
  const session = await getAuthSession()

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  try {
    const notifications = await prisma.notification.findMany({
      where: {
        userId: parseInt(session.user.id),
      },
      orderBy: {
        dateNotification: 'desc',
      },
    })

    return NextResponse.json({ data: notifications }, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de la récupération des notifications', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
