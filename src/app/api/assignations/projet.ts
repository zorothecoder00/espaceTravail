import { NextResponse } from 'next/server' 
import { prisma } from '@/lib/prisma'
import { RoleProjet } from '@prisma/client'

export async function POST(req: Request) {
  const body = await req.json()
  const { userId, projetId, role } = body

  if (!userId || !projetId) {
    return NextResponse.json({ message: 'userId et projetId sont requis' }, { status: 400 })
  }

  const dejaMembre = await prisma.membreProjet.findUnique({
    where: {
      userId_projetId: {
        userId,
        projetId,
      },
    },
  })

  if (dejaMembre) {
    return NextResponse.json({ message: 'Utilisateur déjà assigné à ce projet' }, { status: 400 })  
  }

  const rolesAutorises = Object.values(RoleProjet)
  if (role && !rolesAutorises.includes(role)) {
    return NextResponse.json({ message: 'Rôle invalide' }, { status: 400 })
  }

  if (role === RoleProjet.CHEF_EQUIPE) {
    const chefExistant = await prisma.membreProjet.findFirst({
      where: {
        projetId,
        role: RoleProjet.CHEF_EQUIPE,
      },
    })

    if (chefExistant) {
      return NextResponse.json({ message: 'Ce projet a déjà un chef d\'équipe' }, { status: 400 })
    }
  }


  try {  
    await prisma.membreProjet.create({
      data: {
        userId,
        projetId,
        role: role || RoleProjet.MEMBRE
      },
    })

    return NextResponse.json({ message: 'Assignation réussie' })
  } catch (error) {
    console.error('Erreur lors de l’assignation au projet :', error);
    return NextResponse.json({ message: 'Erreur lors de l’assignation au projet' }, { status: 500 })
  }
}
