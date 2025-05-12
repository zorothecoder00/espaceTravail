import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

type Params = {
  params: { id: string }
}

export async function GET(req: Request, { params }: Params) {
  const projetId = parseInt(params.id)

  if (isNaN(projetId)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const assignations = await prisma.utilisateurProjet.findMany({
      where: { projetId },
      include: { utilisateur: true },
    })

    return NextResponse.json(assignations)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la récupération' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const projetId = parseInt(params.id)
  const { searchParams } = new URL(req.url)
  const utilisateurId = parseInt(searchParams.get('utilisateurId') || '')

  if (isNaN(projetId) || isNaN(utilisateurId)) {
    return NextResponse.json({ message: 'ID(s) invalide(s)' }, { status: 400 })
  }  

  try {
    await prisma.utilisateurProjet.deleteMany({
      where: { projetId, utilisateurId },
    })

    return NextResponse.json({ message: 'Utilisateur retiré du projet' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la suppression' }, { status: 500 })
  }
}

