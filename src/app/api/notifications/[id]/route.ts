import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const notificationId = parseInt(params.id)
  if (!params.id || isNaN(notificationId)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    // 1. Vérifie que la notification appartient bien à l’utilisateur
    const notification = await prisma.notification.findFirst({
      where: {
        id: notificationId,
        userId: parseInt(session.user.id),
      },
    })

    if (!notification) {
      return NextResponse.json(
        { message: 'Notification introuvable' },
        { status: 404 }
      )
    }

    // 2. Si elle n’est pas encore vue, on la marque comme vue
    if (!notification.vu) {
      await prisma.notification.update({
        where: { id: notificationId },
        data: { vu: true },
      })
    }

    // 3. Recharge avec les relations complètes pour la réponse
    const notificationDetail = await prisma.notification.findUnique({
      where: { id: notificationId },
      include: {
        emetteur: { select: { id: true, nom: true, prenom: true } },
        projet: { select: { id: true, nom: true } },
        tache: { select: { id: true, titre: true } },
        document: { select: { id: true, titre: true } },
        messageAssocie: true,
      },
    })

    return NextResponse.json({ data: notificationDetail }, { status: 200 })
  } catch (error) {
    console.error('Erreur serveur notification/:id :', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}
