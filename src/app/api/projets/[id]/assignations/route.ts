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
    const assignations = await prisma.membreProjet.findMany({
      where: { projetId },
      include: { user: true },
    })

    return NextResponse.json(assignations)
  } catch (error) {
    console.error('Erreur GET assignations:', error)  // <-- logger l’erreur
    return NextResponse.json({ message: 'Erreur lors de la récupération' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const projetId = parseInt(params.id)
  const { searchParams } = new URL(req.url)
  const userId = parseInt(searchParams.get('userId') || '')

  if (isNaN(projetId) || isNaN(userId)) {
    return NextResponse.json({ message: 'ID(s) invalide(s)' }, { status: 400 })
  }  

  try {
    await prisma.membreProjet.deleteMany({
      where: { projetId, userId },
    }) 

    return NextResponse.json({ message: 'Utilisateur retiré du projet' })
  } catch (error) {
    console.error('Erreur DELETE assignation:', error)  // <-- logger l’erreur
    return NextResponse.json({ message: 'Erreur lors de la suppression' }, { status: 500 })
  }
}

