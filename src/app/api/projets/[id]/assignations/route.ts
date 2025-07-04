import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { RoleProjet } from '@prisma/client' // optionnel si tu veux typer
import { getAuthSession } from "@/lib/auth"

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
          { projets: { some: { role: search as RoleProjet } } },
         ],
        }, 
        include: {
          projets: {
            where: { projetId },
            select: {
              role: true,
            }
            }
          },
        skip,
        take: limit,
        orderBy: {
          [sortField]: sortOrder
        }
      }),

      prisma.user.count({
        where: {
          projets: { some: { projetId } },
          OR: [
            { nom: { contains: search } },
            { projets: { some: { role: search as RoleProjet } } },
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

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const projetId = parseInt(params.id)

  if (isNaN(projetId)) {
    return NextResponse.json({ message: "ID de projet invalide" }, { status: 400 })
  }

  // ✅ Authentifie l'émetteur
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const emetteurId = parseInt(session.user.id)

  try {
    const body = await req.json()
    const { utilisateursIds } = body

    if (!Array.isArray(utilisateursIds)) {
      return NextResponse.json({ message: "Liste des utilisateurs invalide" }, { status: 400 })
    }

    // 🔎 Anciennes assignations
    const anciens = await prisma.membreProjet.findMany({
      where: { projetId },
      select: { userId: true }
    })

    const anciensIds = anciens.map(m => m.userId)
    const nouveauxIds = utilisateursIds

    const aAjouter = nouveauxIds.filter(id => !anciensIds.includes(id))
    const aRetirer = anciensIds.filter(id => !nouveauxIds.includes(id))

    // 🔁 Met à jour les assignations
    await Promise.all([
      aAjouter.length > 0
        ? prisma.membreProjet.createMany({
            data: aAjouter.map(userId => ({
              userId,
              projetId,
              role: 'MEMBRE'
            })),
          })
        : Promise.resolve(),

      aRetirer.length > 0
        ? prisma.membreProjet.deleteMany({
            where: {
              projetId,
              userId: { in: aRetirer },
            },
          })
        : Promise.resolve(),
    ])

    // 🔍 Récupère le nom du projet
    const projet = await prisma.projet.findUnique({
      where: { id: projetId },
      select: { id: true, nom: true }
    })

    if (!projet) {
      return NextResponse.json({ message: "Projet introuvable" }, { status: 404 })
    }

    // 🔔 Prépare les notifications
    const notificationsData = [
      ...aAjouter.map(userId => ({
        userId,
        emetteurId,
        projetId,
        message: `Vous avez été ajouté au projet "${projet.nom}"`,
        lien: `/projets/${projetId}`,
      })),
      ...aRetirer.map(userId => ({
        userId,
        emetteurId,
        projetId,
        message: `Vous avez été retiré du projet "${projet.nom}"`,
        lien: `/projets/${projetId}`,
      })),
    ]

    // 📨 Enregistre les notifications
    if (notificationsData.length > 0) {
      await prisma.notification.createMany({ data: notificationsData })
    }

    return NextResponse.json({ message: "Assignations et notifications mises à jour." })
  } catch (error) {
    console.error("Erreur POST assignations projet :", error)
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 })
  }
}