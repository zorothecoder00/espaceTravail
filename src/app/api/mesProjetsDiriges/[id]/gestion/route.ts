import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'        

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const session = await getAuthSession()

  if (!session?.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const projetId = parseInt(params.id)
 
  try {
    const projetDirige = await prisma.projet.findFirst({
      where: {
        id: projetId,
        chefProjetId: parseInt(session.user.id), // 👈 sécurité : le projet doit être dirigé par l'utilisateur connecté
      },
      include: {
        departement: {
          select: { nom: true },
        },
        chefProjet: {
          select: { nom: true },
        },
        membres: {
          include: {
            user: {
              select: { nom: true },
            },
          },
        },
        taches: true, // 👈 utile si tu veux afficher les tâches aussi
      },
    })

    if (!projetDirige) {
      return NextResponse.json({ message: 'Projet introuvable ou accès refusé' }, { status: 404 })
    }

    return NextResponse.json(projetDirige)
  } catch (error) {
    console.error('Erreur lors de la récupération du projet dirigé:', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}
