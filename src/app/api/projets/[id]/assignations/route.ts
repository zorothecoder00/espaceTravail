import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { RoleProjet } from '@prisma/client' // optionnel si tu veux typer

export async function GET(req: Request, { params }: { params: { id: string } }) 
{
  const projetId = parseInt(params.id)

  if (isNaN(projetId)) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 400 })
  }

  const { searchParams } = new URL(req.url)

  // ✅ Lecture des query params
  const page = parseInt(searchParams.get("page") || "1")
  const limit = parseInt(searchParams.get("limit") || "10")
  const skip = (page - 1) * limit

  const search = searchParams.get("search") || ""

  const sortField = searchParams.get("sortField") || "nom"
  const sortOrder = searchParams.get("sortOrder") === "desc" ? "desc" : "asc"

  try {
    // Vérifie que le projet existe
    const projet = await prisma.projet.findUnique({
      where: { id: projetId },
    })

    if (!projet) {
      return NextResponse.json({ message: "Projet introuvable" }, { status: 404 })
    }

    // Récupère les utilisateurs
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: { 
          OR: [
          { nom: { contains: search } } ,
          { projets: { role: { equals: search as RoleProjet } } },
         ],
        }, 
        include: {
          projets: {
            where: {
              select: {
                role: true,
              }
            }
          },
        },
        skip,
        take: limit,
        orderBy: {
          [sortField]: sortOrder
        }
      }),

      prisma.user.count({
        where: {
          projetId,
          OR: [
            { nom: { contains: search } },
            { projts: { role: { equals: search as RoleProjet } } },
          ],
        }
      })
    ])

    // Structure propre à retourner
    const membres = users.map((u) => ({
      id: u.id,
      nom: u.nom,
      role: u.projets[0]?.role ?? null,
      estDejaMembre: u.projets.length > 0,
    }))

    return NextResponse.json({
      data: membres,
      total,
      totalPages: Math.ceil(total / limit)
    })
  } catch (error) {
    console.error("Erreur API utilisateurs :", error)
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 })
  }
}
