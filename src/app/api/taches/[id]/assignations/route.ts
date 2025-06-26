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
    const assignations = await prisma.tacheUtilisateur.findMany({
      where: { tacheId },
      include: { user: true },
    })

    return NextResponse.json(assignations)
  } catch (error) {
    console.error('Erreur GET assignations:', error)  // <-- logger l’erreur
    return NextResponse.json({ message: 'Erreur lors de la récupération' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: Params) {
  const tacheId = parseInt(params.id)
  const { searchParams } = new URL(req.url)
  const userId = parseInt(searchParams.get('userId') || '')

  if (isNaN(tacheId) || isNaN(userId)) {
    return NextResponse.json({ message: 'ID(s) invalide(s)' }, { status: 400 })
  }    

  try {
    await prisma.tacheUtilisateur.delete({
      where: { tacheId_userId: { tacheId, userId } },
    })


    return NextResponse.json({ message: 'Utilisateur retiré de la tâche' })
  } catch (error) {
    console.error('Erreur DELETE assignation:', error)  // <-- logger l’erreur
    return NextResponse.json({ message: 'Erreur lors de la suppression' }, { status: 500 })
  }

}