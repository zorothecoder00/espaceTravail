// app/api/utilisateurs/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'

export async function GET() {
  const utilisateurs = await prisma.user.findMany({
    include: { departement: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(utilisateurs)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { nom, prenom, email, password, role, departementId } = body

  if (!nom || !prenom || !email || !password || !role) {
    return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
  }

  const userExist = await prisma.user.findUnique({ where: { email } })
  if (userExist) {
    return NextResponse.json({ message: 'Utilisateur déjà existant' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      nom,
      prenom,
      email,
      password: hashedPassword,
      role,
      departementId: departementId || null,
    },
  })

  return NextResponse.json(user, { status: 201 })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  try {
    await prisma.user.delete({ where: { id: Number(id) } })
    return NextResponse.json({ message: 'Utilisateur supprimé' })
  } catch {
    return NextResponse.json({ message: 'Erreur lors de la suppression' }, { status: 500 })
  }
}
