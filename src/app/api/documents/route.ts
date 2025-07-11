import { getAuthSession } from "@/lib/auth"
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import formidable, { File } from "formidable"
import fs from "fs"
import path from "path"
import type { IncomingMessage } from "http"
import type { Departement, User, Projet, Document, PartageDocument } from "@prisma/client"

export const config = {  
  api: {
    bodyParser: false, // désactiver le body parser Next.js
  },
}

type PartageAvecRelations = PartageDocument & {
  document: Document  
  user: User | null
  departement: Departement | null
  projet: Projet | null
  partageur: User
}

const uploadDir = path.join('/tmp', 'uploads') // ✅ uniquement autorisé sur Vercel 

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Utilitaire pour parser formulaire avec formidable et gérer fichiers
function parseForm(req: IncomingMessage): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 1 * 1024 * 1024, // 1 Mo max
    multiples: false,
  })

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })
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
          { userId: userId },
          { partageurId: userId }
        ]
      },
      include: {
        document: true,
        user: true,
        departement: true,
        projet: true,
        partageur: true
      },
      orderBy: { datePartage: "desc" }
    })

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
    const { fields, files } = await parseForm(req as unknown as IncomingMessage)

    const titre = Array.isArray(fields.titre) ? fields.titre[0] : fields.titre
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description ?? ''

    const utilisateurs = fields.utilisateurs ? JSON.parse(Array.isArray(fields.utilisateurs) ? fields.utilisateurs[0] : fields.utilisateurs) : []
    const departements = fields.departements ? JSON.parse(Array.isArray(fields.departements) ? fields.departements[0] : fields.departements) : []
    const projets = fields.projets ? JSON.parse(Array.isArray(fields.projets) ? fields.projets[0] : fields.projets) : []

    if (!titre || (!utilisateurs.length && !departements.length && !projets.length)) {
      return NextResponse.json({ message: "Titre ou destinataires manquants" }, { status: 400 })
    }

    // Gérer le fichier uploadé (optionnel)
    let fichierPath: string | null = null
    if (files.fichier) {
      const file = Array.isArray(files.fichier) ? files.fichier[0] : files.fichier as File

      if (file.size > 1_048_576) {
        // Supprimer fichier trop gros
        fs.unlinkSync(file.filepath)
        return NextResponse.json({ message: "Fichier trop volumineux (max 1 Mo)" }, { status: 400 })
      }
      // Stocker le chemin relatif dans la base
      fichierPath = `/uploads/${path.basename(file.filepath)}`
    }

    // 1. Créer le document avec fichier
    const document = await prisma.document.create({
      data: {
        titre,
        description,
        fichier: fichierPath,
      },
    })

    // 2. Créer les partages
    const partagesToCreate = []

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

    const partagesCreateds = await Promise.all(
      partagesToCreate.map(data =>
        prisma.partageDocument.create({ data })
      )
    )
    console.log(`${partagesCreateds.length} partages créés`)

    // Notifications pour utilisateurs uniquement
    const notificationsToCreate = utilisateurs?.map((uid: number) => ({
      userId: uid,
      documentId: document.id,
      message: `Vous avez reçu un nouveau document : ${titre}`,
    })) || []

    await prisma.notification.createMany({ data: notificationsToCreate })

    return NextResponse.json({
      message: "Document créé, fichier uploadé (si fourni) et partagé avec succès",
      document,
    })
  } catch (error) {
    console.error("Erreur lors de la création du document :", error)
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 })
  }
}
