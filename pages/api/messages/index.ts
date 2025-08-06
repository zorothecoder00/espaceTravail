import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import formidable, { File } from 'formidable'
import fs from 'fs'
import path from 'path'
import cloudinary from '@/lib/cloudinary'

export const config = { api: { bodyParser: false } }

const uploadDir = path.join('/tmp', 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

/* Parse multipart/form‑data ------------------------------------------------- */
function parseForm(req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({ uploadDir, keepExtensions: true, maxFileSize: 5 * 1024 * 1024 })
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })))
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /* ------------------------------------------------------------------ GET */
  if (req.method === 'GET') {
    try {
      const messages = await prisma.message.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
          sender: { select: { nom: true } },
          receiver: { select: { nom: true } },
          projet: { select: { nom: true } },
          tache:  { select: { titre: true } },
        },
      })
      return res.status(200).json({ data: messages })
    } catch (error) {
      console.error('Erreur GET messages :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  /* ----------------------------------------------------------------- POST */
  if (req.method === 'POST') {
    const session = await getAuthSession(req, res)
    if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })
    try {
      const { fields, files } = await parseForm(req)
      const contenu     = fields.contenu?.toString() ?? ''
      const receiverId  = parseInt(fields.receiverId?.toString() || '')
      const projetId    = fields.projetId ? parseInt(fields.projetId.toString()) : null
      const tacheId     = fields.tacheId  ? parseInt(fields.tacheId.toString())  : null
      const file        = Array.isArray(files.pieceJointe) ? files.pieceJointe[0] : files.pieceJointe

      if (!receiverId || contenu.trim() === '')
        return res.status(400).json({ message: 'Champs requis manquants' })

      /* Upload Cloudinary si fichier présent -------------------------------- */
      let fileUrl: string | null = null
      if (file) {
        const f = file as File
        if (f.size > 5 * 1024 * 1024) {
          fs.unlinkSync(f.filepath)
          return res.status(400).json({ message: 'Fichier trop volumineux (>5 Mo)' })
        }
        const uploaded = await cloudinary.uploader.upload(f.filepath, {
          folder: 'messages',
          resource_type: 'auto',
          type: 'upload', // Spécifie le type de livraison (upload = public)
          upload_preset: 'my_unsigned_public'
        })
        fs.unlinkSync(f.filepath)
        fileUrl = uploaded.secure_url
      }

      /* Création du message + notification --------------------------------- */
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
          emetteurId: parseInt(session.user.id),
          message: `Nouveau message de ${session.user.nom}`,
          lien: `/shared/messages/${nouveauMessage.id}`,
          messageId: nouveauMessage.id,
        },
      })

      return res.status(201).json({ data: nouveauMessage })
    } catch (error) {
      console.error('Erreur POST message :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  /* ----------------------------------------------------------------- 405  */
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
