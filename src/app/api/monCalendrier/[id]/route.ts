import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const tacheAssignée = await prisma.tacheUtilisateur.findFirst({
      where: {
        userId: parseInt(session.user.id),
        tacheId: id,
        tache: {
          deadline: { not: null }
        }
      },
      include: {
        tache: {
          include: {
            projet: { select: { id: true, nom: true } },
          },
        },
      },
    })

    if (!tacheAssignée) {
      return NextResponse.json({ message: 'Tâche non trouvée ou non assignée à vous' }, { status: 404 })
    }

    const { tache } = tacheAssignée

    return NextResponse.json({
      data: {
        id: tache.id,
        titre: tache.titre,
        deadline: tache.deadline,
        description: tache.description,
        statut: tache.statut,
        projet: tache.projet,
      }
    }, { status: 200 })
  } catch (error) {
    console.error('Erreur GET monCalendrier/:id :', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}
