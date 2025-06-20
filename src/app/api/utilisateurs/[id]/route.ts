import prisma from "@/lib/prisma"
import { Role } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"        

export async function DELETE(req: Request, { params }: { params: { id: string }})
{
	const id = parseInt(params.id)
	if(!params.id || isNaN(id)){
		return NextResponse.json({ message: "ID invalide"}, { status: 400})
	}

	const user = await prisma.user.findUnique({ where: { id }})
	if (!user) {
	    return NextResponse.json({ message: "Utilisateur introuvable" }, { status: 404 })
	}

	try{
		await prisma.user.delete({ where: { id }})
		return NextResponse.json({ message: "Utilisateur supprimé avec succès"}, { status: 200})  
	}catch(error){
		console.error("Erreur lors de la suppression", error)
		return NextResponse.json({ message: "Erreur interne"}, { status: 500})
	}
}

export async function PUT(req: Request, { params }: { params: { id: string}})
{
	const id = parseInt(params.id)
	if(!params.id || isNaN(id)){    
		return NextResponse.json({ message: "ID invalide"}, { status: 400})
	}

	const body = await req.json()
	const { nom, prenom, email, password, role, departement } = body

	if (!nom || !prenom || !email || !password || !role) {
    return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
  	}

  	// Vérification si l'utilisateur existe
	const user = await prisma.user.findUnique({ where: { id } })
	if (!user) {
	   return NextResponse.json({ message: "Utilisateur introuvable" }, { status: 404 })
	}

	try{
		const hashedPassword = await bcrypt.hash(password.trim(), 10)

		const updatedUser = await prisma.user.update({
			where: { id },
			data: {
				nom: nom.trim(),
				prenom: prenom.trim(),
				email: email.trim(),
				password: hashedPassword,
				role: role as Role,
				departementId: parseInt(departement)
			}
		})
		return NextResponse.json(updatedUser, { status: 200 })
	}catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}