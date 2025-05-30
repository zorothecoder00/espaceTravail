// app/api/departements/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma' 

// GET : récupérer tous les départements
export async function GET() {
  const departements = await prisma.departement.findMany({
    orderBy: { nom: 'asc' },
  })
  return NextResponse.json(departements)
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
