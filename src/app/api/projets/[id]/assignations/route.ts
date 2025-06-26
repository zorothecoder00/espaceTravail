import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { RoleProjet } from '@prisma/client'

type Params = {
  params: { id: string }
}

// 🔍 GET — récupérer les membres avec leurs rôles
export async function GET(req: Request, { params }: Params) {
  const projetId = parseInt(params.id)

  if (isNaN(projetId)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const assignations = await prisma.membreProjet.findMany({
      where: { projetId },
      include: { user: true },
    })

    return NextResponse.json(assignations)
  } catch (error) {
    console.error('Erreur GET assignations:', error)
    return NextResponse.json({ message: 'Erreur lors de la récupération' }, { status: 500 })
  }
}

// ❌ DELETE — retirer un utilisateur (sauf chef d’équipe)
export async function DELETE(req: Request, { params }: Params) {
  const projetId = parseInt(params.id)
  const { searchParams } = new URL(req.url)
  const userId = parseInt(searchParams.get('userId') || '')

  if (isNaN(projetId) || isNaN(userId)) {
    return NextResponse.json({ message: 'ID(s) invalide(s)' }, { status: 400 })
  }

  try {
    const membre = await prisma.membreProjet.findUnique({
      where: { userId_projetId: { projetId, userId } },
    })

    if (!membre) {
      return NextResponse.json({ message: 'Aucune assignation trouvée' }, { status: 404 })
    }

    if (membre.role === 'CHEF_EQUIPE') {
      return NextResponse.json({ message: 'Impossible de retirer le chef de projet' }, { status: 403 })
    }

    await prisma.membreProjet.delete({
      where: { userId_projetId: { projetId, userId } },
    })

    return NextResponse.json({ message: 'Utilisateur retiré du projet' })
  } catch (error) {
    console.error('Erreur DELETE assignation:', error)
    return NextResponse.json({ message: 'Erreur lors de la suppression' }, { status: 500 })
  }
}

// ✅ POST — assigner un membre avec un rôle au projet
export async function POST(req: Request, { params }: Params) {
  const projetId = parseInt(params.id)
  const body = await req.json()
  const { userId, role } = body

  if (!userId || !role || isNaN(projetId)) {
    return NextResponse.json({ message: 'Champs requis manquants ou invalides' }, { status: 400 })
  }

  if (role === RoleProjet.CHEF_EQUIPE) {
    const chefExistant = await prisma.membreProjet.findFirst({
      where: {
        projetId,
        role: RoleProjet.CHEF_EQUIPE,
      },
    })

    if (chefExistant && chefExistant.userId !== Number(userId)) {
      return NextResponse.json({ message: 'Ce projet a déjà un chef d\'équipe' }, { status: 400 })
    }
  }

  try {
    const assignation = await prisma.membreProjet.upsert({
      where: { userId_projetId: { userId: Number(userId), projetId } },
      update: { role: role as RoleProjet },
      create: {
        userId: Number(userId),
        projetId,
        role: role as RoleProjet,
      },
    })

    return NextResponse.json(assignation, { status: 201 })
  } catch (error) {
    console.error('Erreur POST assignation:', error)
    return NextResponse.json({ message: 'Erreur lors de l’assignation' }, { status: 500 })
  }
}
