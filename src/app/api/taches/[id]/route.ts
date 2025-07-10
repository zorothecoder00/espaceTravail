import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { Statut } from "@prisma/client"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)

  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  try {
    const tache = await prisma.tache.findUnique({
      where: { id },
      include: {
        projet: { select: { id: true, nom: true } }, // relation projet
        TacheUtilisateur: {
          include: { user: { select: { id: true, nom: true, prenom: true } } }
        },
        notifications: true,
        messages: true,
      }
    })

    if (!tache) {
      return NextResponse.json({ message: "Tâche introuvable" }, { status: 404 })
    }

    return NextResponse.json({ data: tache }, { status: 200 })
  } catch (error) {
    console.error("Erreur serveur GET tâche:", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}


export async function DELETE(req: Request, { params }: { params: { id: string } })
{
	const id = parseInt(params.id)

	if(!params.id || isNaN(id)){
		return NextResponse.json({ message : "ID invalide" }, { status : 400})
	}

	const tache = await prisma.tache.findUnique({ where: { id } })
	if (!tache) {
	  return NextResponse.json({ message: "Tâche introuvable" }, { status: 404 })
	}

	try{
		await prisma.tache.delete({ where: { id } })
		return NextResponse.json({ message : "Tâche supprimée avec succès"}, { status : 200})
	}catch(error){
		console.error("Erreur lors de la suppression", error)
		return NextResponse.json({ message : "Erreur interne"}, { status : 500})
	}
}

export async function PUT(req: Request, { params }: { params :{ id: string } })
{    
	const id = parseInt(params.id)

	if(!params.id || isNaN(id)){
		return NextResponse.json({ message : "ID invalide" }, { status : 400})
	}

	const body = await req.json()
	const { titre, description, deadline, statut, projet } = body

	if (!titre || titre.trim() === "" || !statut || isNaN(parseInt(projet))) {
	  return NextResponse.json({ message: "Veuillez saisir les champs manquants" }, { status: 400 })
	}	

	try{
		const tache = await prisma.tache.findUnique({ where: { id } })
		if(!tache){
			return NextResponse.json({ message : "Tâche introuvable"}, { status : 404 })
		}

		const updated = await prisma.tache.update({
		 where: { id },
		 data: {
		 	titre: titre.trim(),
		 	description: description?.trim() || null,
		 	deadline: deadline? new Date(deadline) : null,
		 	statut: statut as Statut,
		 	projetId: parseInt(projet),
		 } 
		})
		return NextResponse.json({ data: updated }, { status : 200 })
	} catch (error) {
    console.error("Erreur lors de la mise à jour de la tâche", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  	}
}