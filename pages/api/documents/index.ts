import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import formidable, { File } from 'formidable'  
import fs from 'fs'
import path from 'path'
import cloudinary from '@/lib/cloudinary'
import type { Departement, User, Projet, Document, PartageDocument } from '@prisma/client'

export const config = { api: { bodyParser: false } }

type PartageAvecRelations = PartageDocument & {
  document: Document
  user: User | null
  departement: Departement | null
  projet: Projet | null
  partageur: User
}

const uploadDir = path.join('/tmp', 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

/* Parse multipart -------------------------------------------------------- */
function parseForm(req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({ uploadDir, keepExtensions: true, maxFileSize: 5_242_880 /* 5 Mo */ })
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })))
  })
}

/* Handler principal ------------------------------------------------------ */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /* ---------------------------------------------------------------- GET */
  if (req.method === 'GET') {
    const session = await getAuthSession(req, res)
    if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

    const userId = parseInt(session.user.id)   
    try {
      const partages: PartageAvecRelations[] = await prisma.partageDocument.findMany({
        where: { OR: [{ userId }, { partageurId: userId }] },
        include: {  
          document: true,
          user: true,
          departement: true,    
          projet: true,
          partageur: true,
        },
        orderBy: { datePartage: 'desc' },
      })

      return res.status(200).json({
        recus: partages.filter(p => p.userId === userId && p.partageurId !== userId),
        partages: partages.filter(p => p.partageurId === userId),
      })
    } catch (e) {
      console.error('Erreur GET documents :', e)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  /* --------------------------------------------------------------- POST */
  if (req.method === 'POST') {
    const session = await getAuthSession(req, res)
    if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

    const userId = parseInt(session.user.id)
    try {
      const { fields, files } = await parseForm(req)
      const titre        = Array.isArray(fields.titre)        ? fields.titre[0]        : fields.titre
      const description  = Array.isArray(fields.description)  ? fields.description[0]  : fields.description ?? ''
      const utilisateurs = (fields.utilisateurs ? JSON.parse(Array.isArray(fields.utilisateurs) ? fields.utilisateurs[0] : fields.utilisateurs) : []).map(Number)
      const departements = (fields.departements ? JSON.parse(Array.isArray(fields.departements) ? fields.departements[0] : fields.departements) : []).map(Number)
      const projets      = (fields.projets      ? JSON.parse(Array.isArray(fields.projets)      ? fields.projets[0]      : fields.projets)      : []).map(Number)

      if (!titre || (!utilisateurs.length && !departements.length && !projets.length))
        return res.status(400).json({ message: 'Titre ou destinataires manquants' })

      /* Upload fichier -------------------------------------------------- */
      let fichierUrl: string | null = null
      if (files.fichier) {
        const file = Array.isArray(files.fichier) ? (files.fichier[0] as File) : (files.fichier as File)
        if (file.size > 5 * 1024 * 1024) {
          fs.unlinkSync(file.filepath)
          return res.status(400).json({ message: 'Fichier trop volumineux (> 5 Mo)' })
        }
        const uploaded = await cloudinary.uploader.upload(file.filepath, {
          folder: 'documents',
          resource_type: 'auto',
          type: 'upload', // Spécifie le type de livraison (upload = public)
          upload_preset: 'my_unsigned_public'
        })

        if (!uploaded.secure_url) throw new Error('Upload Cloudinary échoué');

        fs.unlinkSync(file.filepath)
        fichierUrl = uploaded.secure_url
      }

      /* Création document + partages ----------------------------------- */
      const document = await prisma.document.create({
        data: { titre, description, fichier: fichierUrl },
      })

      const partagesData = [
        ...utilisateurs.map((uid: number) => ({
          documentId: document.id,
          userId: uid,
          partageurId: userId,
          historique: `Partagé à l'utilisateur ID ${uid}`,
        })),
        ...departements.map((did: number) => ({
          documentId: document.id,
          departementId: did,
          partageurId: userId,
          historique: `Partagé au département ID ${did}`,
        })),
        ...projets.map((pid: number) => ({
          documentId: document.id,
          projetId: pid,
          partageurId: userId,
          historique: `Partagé au projet ID ${pid}`,
        })),
      ]

      if (partagesData.length) {
        await prisma.partageDocument.createMany({ data: partagesData });
      }


      /* Notifications pour utilisateurs directs ----------------------- */
      if (utilisateurs.length) {
        await prisma.notification.createMany({  
          data: utilisateurs.map((uid: number) => ({  
            userId: uid,
            documentId: document.id,
            message: `Vous avez reçu un nouveau document ${titre}`,
            lien: `/shared/documents/${document.id}`,
          })),
        })
      }

      return res.status(201).json({
        message: 'Document créé et partagé avec succès',
        data: document,
      })
    } catch (e) {
      console.error('Erreur POST document :', e)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  /* --------------------------------------------------------------- 405 */
  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
