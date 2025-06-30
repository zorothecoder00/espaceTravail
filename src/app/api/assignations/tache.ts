import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await getAuthSession()    
   
  if (!session || !session.user?.id) {  
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const body = await req.json()
  const { userId, tacheId } = body

  if (!userId || !tacheId) {
    return NextResponse.json({ message: 'userId et tacheId sont requis' }, { status: 400 })
  }

  try {
    const dejaAssigne = await prisma.tacheUtilisateur.findUnique({
      where: {
        tacheId_userId: {
          tacheId,
          userId,
        },
      },
    })

    if (dejaAssigne) {
      return NextResponse.json({ message: 'Cet utilisateur est déjà assigné à cette tâche' }, { status: 400 })
    }

    // Récupérer le titre de la tâche pour la notification
    const tache = await prisma.tache.findUnique({
      where: { id: tacheId },
      select: { titre: true },
    })

    if (!tache) {
      return NextResponse.json({ message: 'Tâche introuvable' }, { status: 404 })
    }

    await prisma.tacheUtilisateur.create({
      data: {
        userId,
        tacheId,
      },
    })

    // Créer la notification
    await prisma.notification.create({
      data: {
        userId,
        emetteurId: parseInt(session.user.id),
        message: `Vous avez été assigné à la tâche "${tache.titre}"`,
        tacheId,
        lien: `/interfaceUtilisateur/mesTaches/${tacheId}`,
      },
    })

    return NextResponse.json({ message: 'Assignation réussie et notification envoyée' })
  } catch (error) {
    console.error('Erreur lors de l’assignation à la tâche :', error)
    return NextResponse.json({ message: 'Erreur lors de l’assignation à la tâche' }, { status: 500 })
  }
}
