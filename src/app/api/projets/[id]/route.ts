import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { Statut, RoleProjet } from "@prisma/client" 

// GET — Récupérer les détails d’un projet
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)

  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  try {
    const projet = await prisma.projet.findUnique({
      where: { id },  
      include: {
        departement: { select: { id: true, nom: true } },
        chefProjet: { select: { id: true, nom: true, prenom: true } },
        membres: {
          include: {
            user: { select: { id: true, nom: true, prenom: true } },
          },
        },
        taches: true,
        partages: true,
        notifications: true,
        messages: true,
      },
    })

    if (!projet) {
      return NextResponse.json({ message: "Projet introuvable" }, { status: 404 })
    }

    return NextResponse.json({ data: projet }, { status: 200 })
  } catch (error) {
    console.error("Erreur serveur GET projet :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } })
{
	const id = parseInt(params.id)

	if(!params.id || isNaN(id)){
		return NextResponse.json({ message : "ID invalide" }, { status : 400})
	}

	const projet = await prisma.projet.findUnique({ where: { id } })
	if (!projet) {
	  return NextResponse.json({ message: "Projet introuvable" }, { status: 404 })
	}


	try {
    // Supprimer les entrées liées dans MembreProjet (toutes les assignations liées au projet)
    await prisma.membreProjet.deleteMany({ where: { projetId: id } })

    // Supprimer le projet
    await prisma.projet.delete({ where: { id } })

	    return NextResponse.json({ message: "Projet supprimé avec succès" }, { status: 200 })
	}catch (error) {
	    console.error("Erreur lors de la suppression", error)
	    return NextResponse.json({ message: "Erreur interne" }, { status: 500})
	  
	}
}

// PUT — Mise à jour d’un projet + MAJ du chef dans MembreProjet
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  const body = await req.json()
  const { nom, description, deadline, statut, departement, chefProjet } = body

  if (!nom || nom.trim() === "" || !statut || isNaN(parseInt(departement)) || isNaN(parseInt(chefProjet))) {
    return NextResponse.json({ message: "Champs requis manquants ou invalides" }, { status: 400 })
  }

  try {
    const projet = await prisma.projet.findUnique({ where: { id } })
    if (!projet) {
      return NextResponse.json({ message: "Projet introuvable" }, { status: 404 })
    }

    const updated = await prisma.projet.update({
      where: { id },
      data: {
        nom: nom.trim(),
        description: description?.trim() || null,
        deadline: deadline ? new Date(deadline) : null,
        statut: statut as Statut,
        departementId: parseInt(departement),
        chefProjetId: parseInt(chefProjet),
      },
    })

    // Met à jour ou insère le chef dans MembreProjet avec le rôle CHEF_EQUIPE
    await prisma.membreProjet.upsert({
      where: {
        userId_projetId: {
          userId: parseInt(chefProjet),
          projetId: id,
        },
      },
      update: { role: RoleProjet.CHEF_EQUIPE },
      create: {
        userId: parseInt(chefProjet),
        projetId: id,
        role: RoleProjet.CHEF_EQUIPE,
      },
    })

    return NextResponse.json({ data: updated }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}