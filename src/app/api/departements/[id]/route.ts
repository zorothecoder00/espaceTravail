// src/app/api/departements/[id]/route.ts
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

/* ──────────────── GET – lire un département ──────────────── */
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)

  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  try {
    const departement = await prisma.departement.findUnique({ where: { id } })

    if (!departement) {
      return NextResponse.json(
        { message: "Département introuvable" },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: departement }, { status: 200 })
  } catch (error) {
    console.error("Erreur GET département :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}

/* ──────────────── PUT – mettre à jour ──────────────── */
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)

  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  const body = await req.json()
  const { nom } = body

  if (!nom || nom.trim() === "") {
    return NextResponse.json(
      { message: "Le nom du département est requis" },
      { status: 400 }
    )
  }

  try {
    const departement = await prisma.departement.findUnique({ where: { id } })
    if (!departement) {
      return NextResponse.json(
        { message: "Département introuvable" },
        { status: 404 }
      )
    }

    const updated = await prisma.departement.update({
      where: { id },
      data: { nom: nom.trim() },
    })
    return NextResponse.json({ data: updated }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de la mise à jour du département", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}

/* ──────────────── DELETE – supprimer ──────────────── */
export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  if (!params.id || isNaN(id)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  try {
    await prisma.departement.delete({ where: { id } })
    return NextResponse.json(
      { message: "Département supprimé avec succès" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erreur lors de la suppression du département", error)
    return NextResponse.json(
      { message: "Erreur lors de la suppression" },
      { status: 400 }
    )
  }
}
