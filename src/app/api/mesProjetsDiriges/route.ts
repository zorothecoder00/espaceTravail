import { NextResponse } from 'next/server'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Statut } from '@prisma/client'
  
export async function GET(req: Request) {
  const session = await getAuthSession()   

  if (!session || !session?.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)

  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1')
  const limit = 10
  const skip = (page - 1) * limit

  const sortField = searchParams.get('sortField') || 'createdAt'
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc'

  try{
    const [projetsDiriges, total] = await Promise.all([
      prisma.projet.findMany({
        where: {
          chefProjetId: parseInt(session.user.id),
          OR: [  
            { nom: { contains: search } },
            { statut: { equals: search as Statut } },
          ]
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
        skip,
        take: limit,
        orderBy: {
          [sortField]: sortOrder,
        }
      }),

      prisma.projet.count({
        where: {
          chefProjetId: parseInt(session.user.id),
          OR: [
            { nom: { contains: search } },
            { statut: { equals: search as Statut } },
          ]
        }
      })
    ])

    return NextResponse.json({
      data: projetsDiriges,
      total,
      totalPages: Math.ceil(total / limit)
    })
  }catch (error) {
    console.error("Erreur lors de la récupération :", error)
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 })
  }
  
}
