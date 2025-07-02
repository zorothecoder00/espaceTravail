// app/api/departements/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' 

// GET : récupérer tous les départements
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  // 🔢 Pagination
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const skip = (page - 1) * limit

  // 🔍 Filtrage (par nom)
  const search = searchParams.get('search')?.trim() || ''  

  // ↕️ Tri dynamique
  const sortField = searchParams.get('sortField') || 'createdAt'
  const sortOrder = searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc'

  try{
    const [departements, total] = await Promise.all([
      prisma.departement.findMany({
        where: {
          OR: [
            { nom: { contains: search } },
          ],
        },
        orderBy: { [sortField]: sortOrder },
        skip,
        take: limit,
      }),

      prisma.departement.count(),
    ])
    
    return NextResponse.json({
      data: departements,
      total,
      totalPages: Math.ceil(total / limit)
    })
  }catch(error){
    console.error("Erreur lors de la récupération", error)
    return NextResponse.json({ message: "Erreur interne"}, { status: 500 })
  } 
}

// POST : créer un nouveau département
export async function POST(req: Request) {
  const body = await req.json()

  if (!body.nom || body.nom.trim() === '') {
    return NextResponse.json({ message: 'Le nom est requis' }, { status: 400 })
  } 

  const exist = await prisma.departement.findFirst({ where: { nom: body.nom } })
  if (exist) {
    return NextResponse.json({ message: 'Département déjà existant' }, { status: 409 })
  }

  const departement = await prisma.departement.create({
    data: { nom: body.nom },
  })

  return NextResponse.json(departement, { status: 201 })
}  



