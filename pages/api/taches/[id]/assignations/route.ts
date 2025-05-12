import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

type Params = {
  params: { id: string }
} 

export async function GET(req: Request, { params }: Params) {
  const tacheId = parseInt(params.id)

  if (isNaN(tacheId)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    const assignations = await prisma.utilisateurTache.findMany({
      where: { tacheId },
      include: { utilisateur: true },
    })

    return NextResponse.json(assignations)
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la récupération' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const tacheId = parseInt(params.id)
  const { searchParams } = new URL(req.url)
  const utilisateurId = parseInt(searchParams.get('utilisateurId') || '')

  if (isNaN(tacheId) || isNaN(utilisateurId)) {
    return NextResponse.json({ message: 'ID(s) invalide(s)' }, { status: 400 })
  }

  try {
    await prisma.utilisateurTache.deleteMany({
      where: { tacheId, utilisateurId },
    })

    return NextResponse.json({ message: 'Utilisateur retiré de la tâche' })
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la suppression' }, { status: 500 })
  }
}

