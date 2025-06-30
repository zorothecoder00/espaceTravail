import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export async function GET(req: Request, { params }: { params: { id: string } }) 
{
  const messageId = parseInt(params.id)

  if (isNaN(messageId)) {
    return NextResponse.json(
      { message: 'Identifiant de message invalide' },
      { status: 400 }
    )
  }

  try {
    const message = await prisma.message.findUnique({
      where: { id: messageId },
      include: {
        sender: {
          select: { id: true, nom: true },
        },
        receiver: {
          select: { id: true, nom: true },
        },
        projet: {
          select: { id: true, nom: true },
        },
        tache: {
          select: { id: true, titre: true },
        },
      },
    })

    if (!message) {
      return NextResponse.json(
        { message: 'Message introuvable' },
        { status: 404 }
      )
    }

    return NextResponse.json(message, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de la récupération du message', error)
    return NextResponse.json(
      { message: 'Erreur interne serveur' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) 
{
  const session = await getAuthSession()
  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const messageId = parseInt(params.id)
  if (isNaN(messageId)) {
    return NextResponse.json(
      { message: 'Identifiant invalide' },
      { status: 400 }
    )
  }

  try {
    // Vérifier si l’utilisateur est bien l’expéditeur du message
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    })

    if (!message) {
      return NextResponse.json(
        { message: 'Message introuvable' },
        { status: 404 }
      )
    }

    if (message.senderId !== parseInt(session.user.id)) {
      return NextResponse.json(
        { message: 'Accès refusé : vous n’êtes pas l’auteur de ce message' },
        { status: 403 }
      )
    }

    // Supprimer le message
    await prisma.message.delete({
      where: { id: messageId },
    })

    return NextResponse.json(
      { message: 'Message supprimé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de la suppression du message', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
