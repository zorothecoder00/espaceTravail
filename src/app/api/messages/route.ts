import { NextResponse } from 'next/server'
import { IncomingForm, Files, Fields } from 'formidable'
import fs from 'fs'
import path from 'path'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { IncomingMessage } from 'http'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadDir = path.join('/tmp', 'uploads') // ✅ uniquement autorisé sur Vercel   
if (!fs.existsSync(uploadDir)) {  
  fs.mkdirSync(uploadDir, { recursive: true })
}

const parseForm = async (
  req: IncomingMessage
): Promise<{ fields: Fields; files: Files }> => {
  const form = new IncomingForm({
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

// 🔍 GET : Lister tous les messages
export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        sender: {
          select: { nom: true },
        },
        receiver: {
          select: { nom: true },
        },
        projet: {
          select: { nom: true },
        },
        tache: {
          select: { titre: true },
        },
      },
    })
    return NextResponse.json(messages, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de la récupération des messages', error)
    return NextResponse.json({ message: 'Erreur interne' }, { status: 500 })
  }
}

// 📨 POST : Créer un message avec fichier facultatif
export async function POST(req: Request) {
  const session = await getAuthSession()
  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Non autorisé' }, { status: 401 })
  }

  try {
    const { fields, files } = await parseForm(req as unknown as IncomingMessage)
    const contenu = fields.contenu?.toString()
    const receiverId = parseInt(fields.receiverId?.toString() || '')
    const projetId = fields.projetId ? parseInt(fields.projetId.toString()) : null
    const tacheId = fields.tacheId ? parseInt(fields.tacheId.toString()) : null
    const file = Array.isArray(files.pieceJointe) ? files.pieceJointe[0] : files.pieceJointe || null

    if (!receiverId || !contenu || contenu.trim() === '') {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
    }

    const fileUrl = file
      ? `/uploads/${path.basename(file.filepath)}`
      : null

    const nouveauMessage = await prisma.message.create({
      data: {
        contenu,
        pieceJointeUrl: fileUrl,
        senderId: parseInt(session.user.id),
        receiverId,
        projetId,
        tacheId,
      },
    })

    await prisma.notification.create({   
      data: {
        userId: receiverId,
        emetteurId: parseInt(session.user.id), // facultatif mais recommandé
        message: `Nouveau message de ${session.user.nom}`,
        lien: `/interfaceUtilisateur/mesMessages/${nouveauMessage.id}`,
        messageId: nouveauMessage.id, // si tu veux garder la trace du message lié
      },
    })

    return NextResponse.json(nouveauMessage, { status: 201 })
  } catch (error) {
    console.error('Erreur lors de la création du message', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
