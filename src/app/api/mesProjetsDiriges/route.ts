import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
  
export async function GET() {
  const session = await getAuthSession()   

  if (!session || !session?.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const projetsDiriges = await prisma.projet.findMany({
    where: {
      chefProjetId: parseInt(session.user.id),  
    },
    include: {
      departement: true,
      membres: {
        include: {
          user: true,
        },
      },
      taches: true,
    },
  })

  return NextResponse.json(projetsDiriges)
}
