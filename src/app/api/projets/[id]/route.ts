import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { Statut } from "@prisma/client"  

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


	try{
		await prisma.projet.delete({ where: { id } })
		return NextResponse.json({ message : "Projet supprimé avec succès"}, { status : 200})
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
	const { nom, description, deadline, statut, departement } = body

	if (!nom || nom.trim() === "" || !statut || isNaN(parseInt(departement))) {
	  return NextResponse.json({ message: "Veuillez saisir les champs manquants" }, { status: 400 })
	}	

	try{
		const projet = await prisma.projet.findUnique({ where: { id } })
		if(!projet){
			return NextResponse.json({ message : "Projet introuvable"}, { status : 404 })
		}

		const updated = await prisma.projet.update({
		 where: { id },
		 data: {
		 	nom: nom.trim(),
		 	description: description?.trim(),
		 	deadline: deadline? new Date(deadline) : null,
		 	statut: statut as Statut,
		 	departementId: parseInt(departement),
		 } 
		})
		return NextResponse.json(updated, { status : 200 })
	} catch (error) {
    console.error("Erreur lors de la mise à jour du projet", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  	}
}