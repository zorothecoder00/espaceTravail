import { NextResponse } from "next/server"
import { getAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getAuthSession()
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 })
  }

  const documentId = parseInt(params.id)
  if (!params.id || isNaN(documentId)) {
    return NextResponse.json({ message: "ID invalide" }, { status: 400 })
  }

  const userId = parseInt(session.user.id)

  try {
    /* -----------------------------------------------------------
       1. On vérifie que l’utilisateur a réellement accès au document
       ----------------------------------------------------------- */
    const partage = await prisma.partageDocument.findFirst({
      where: {
        documentId,
        OR: [
          { partageurId: userId },          // c’est moi qui ai partagé
          { userId },                       // partagé directement à moi
          { departement: { users: { some: { id: userId } } } }, // partagé à mon département
          { projet: { membres: { some: { userId } } } },               // partagé à un projet dont je suis membre
        ],
      },
    })

    if (!partage) {
      return NextResponse.json(
        { message: "Accès refusé ou document non partagé avec vous" },
        { status: 403 }
      )
    }

    /* -----------------------------------------------------------
       2. Récupération complète du document et de ses partages
       ----------------------------------------------------------- */
    const document = await prisma.document.findUnique({
      where: { id: documentId },
      include: {
        partages: {
          include: {
            user: { select: { id: true, nom: true, prenom: true } },
            departement: { select: { id: true, nom: true } },
            projet: { select: { id: true, nom: true } },
            partageur: { select: { id: true, nom: true, prenom: true } },
          },
          orderBy: { datePartage: "desc" },
        },
        notifications: true,
      },
    })

    if (!document) {
      return NextResponse.json({ message: "Document introuvable" }, { status: 404 })
    }

    return NextResponse.json({ data: document }, { status: 200 })
  } catch (error) {
    console.error("Erreur GET documents/:id :", error)
    return NextResponse.json({ message: "Erreur interne" }, { status: 500 })
  }
}
