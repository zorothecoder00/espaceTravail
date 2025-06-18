import { getAuthSession } from "@/lib/auth"
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import type { Departement, User, Projet, Document, PartageDocument } from "@prisma/client"

type PartageAvecRelations = PartageDocument & {
  document: Document  
  user: User | null
  departement: Departement | null
  projet: Projet | null
  partageur: User
}

export async function GET() {
  const session = await getAuthSession()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const userId = parseInt(session.user.id)

  try {
    const partages: PartageAvecRelations[] = await prisma.partageDocument.findMany({
      where: {
        OR: [
          { userId: userId },        // Reçus
          { partageurId: userId }    // Partagés
        ]
      },
      include: {
        document: true,
        user: true,
        departement: true,
        projet: true,
        partageur: true
      },
      orderBy: {
        datePartage: "desc"
      }
    })

    // Séparer les partages reçus et envoyés
    const documentsRecus = partages.filter(p => p.userId === userId)
    const documentsPartages = partages.filter(p => p.partageurId === userId)

    return NextResponse.json({
      recus: documentsRecus,
      partages: documentsPartages
    })
  } catch (error) {
    console.error("Erreur lors de la récupération des documents partagés :", error)
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getAuthSession()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const userId = parseInt(session.user.id)

  try {
    const body = await req.json()

    const { titre, description, utilisateurs, departements, projets } = body

    if (!titre || (!utilisateurs?.length && !departements?.length && !projets?.length)) {
      return NextResponse.json({ message: "Titre ou destinataires manquants" }, { status: 400 })
    }

    // 1. Créer le document
    const document = await prisma.document.create({
      data: {
        titre,
        description,
      },
    })

    const partagesToCreate = []

    // 2. Partages aux utilisateurs
    if (Array.isArray(utilisateurs)) {
      for (const uid of utilisateurs) {
        partagesToCreate.push({
          documentId: document.id,
          userId: uid,
          partageurId: userId,
          historique: `Document partagé avec l'utilisateur ID ${uid}`,
        })
      }
    }

    // 3. Partages aux départements
    if (Array.isArray(departements)) {
      for (const did of departements) {
        partagesToCreate.push({
          documentId: document.id,
          departementId: did,
          partageurId: userId,
          historique: `Document partagé avec le département ID ${did}`,
        })
      }
    }

    // 4. Partages aux projets
    if (Array.isArray(projets)) {
      for (const pid of projets) {
        partagesToCreate.push({
          documentId: document.id,
          projetId: pid,
          partageurId: userId,
          historique: `Document partagé avec le projet ID ${pid}`,
        })
      }
    }

    if (partagesToCreate.length === 0) {
      return NextResponse.json({ message: "Aucun destinataire fourni" }, { status: 400 })
    }

    // Au lieu de createMany, faire des créations une par une en Promise.all
    const partagesCreateds = await Promise.all(
      partagesToCreate.map(data =>
        prisma.partageDocument.create({ data })
      )
    )
    console.log(`${partagesCreateds.length} partages créés`)

    // 6. Créer les notifications uniquement pour les utilisateurs
    const notificationsToCreate = utilisateurs?.map((uid: number) => ({
      userId: uid,
      documentId: document.id,
      message: `Vous avez reçu un nouveau document : ${titre}`,
    })) || []

    await prisma.notification.createMany({
      data: notificationsToCreate,
    })

    return NextResponse.json({
      message: "Document créé et partagé avec succès",
      document,
    })
  } catch (error) {
    console.error("Erreur lors de la création du document :", error)
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 })
  }
}

