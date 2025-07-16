import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Role } from '@prisma/client'
import bcrypt from 'bcryptjs'
import path from 'path'
import fs from 'fs'
import formidable, { File } from 'formidable'
import cloudinary from '@/lib/cloudinary'

export const config = {
  api: {
    bodyParser: false,
  },
}

const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const uploadDir = path.join('/tmp', 'uploads')

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5 Mo max (tu peux ajuster)
    multiples: false,
  })

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string)

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID invalide' })
  }

  if (req.method === 'GET') {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        include: {
          departement: { select: { id: true, nom: true } },
          projetsDiriges: { select: { id: true, nom: true } },
          projets: {         // <- clé vers MembreProjet[]
            include: {
              projet: { select: { id: true, nom: true } }
            }
          },
          taches: {          // <- clé vers TacheUtilisateur[]
            include: {
              tache: {
                select: { id: true, titre: true, statut: true, deadline: true }
              }
            }
          },
          partages: true,
          partagesEnTantQuePartageur: true,
          notificationsEmises: true,
          notifications: true,
        },
      })

      if (!user) {
        return res.status(404).json({ message: 'Utilisateur introuvable' })
      }

      return res.status(200).json({ data: user })
    } catch (error) {
      console.error('Erreur serveur GET:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const { fields, files } = await parseForm(req)

      const { nom, prenom, email, password, role, departementId } = fields
      const image = files.image

      if (!nom || !prenom || !email || !password || !role) {
        return res.status(400).json({ message: 'Champs requis manquants' })
      }

      const roleValue = role.toString()
      if (!Object.values(Role).includes(roleValue as Role)) {
        return res.status(400).json({ message: 'Rôle invalide' })
      }

      const user = await prisma.user.findUnique({ where: { id } })
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur introuvable' })
      }

      let imagePath = user.image

      if (image) {
        if (Array.isArray(image)) {
          return res.status(400).json({ message: 'Une seule image autorisée' })
        }

        const file = image as File

        if (file.size > 5 * 1024 * 1024) {
          fs.unlinkSync(file.filepath)
          return res.status(400).json({ message: 'Image trop volumineuse (> 5 Mo)' })
        }

        const uploaded = await cloudinary.uploader.upload(file.filepath, {
          folder: 'utilisateurs',
          resource_type: 'image',
        })

        fs.unlinkSync(file.filepath)
        imagePath = uploaded.secure_url
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          nom: nom.toString().trim(),
          prenom: prenom.toString().trim(),
          email: email.toString().trim(),
          password: await bcrypt.hash(password.toString().trim(), 10),
          role: role.toString() as Role,
          departementId: departementId ? parseInt(departementId.toString()) : null,
          image: imagePath,
        },
      })

      return res.status(200).json({ data: updatedUser })
    } catch (error) {
      console.error('Erreur serveur PUT:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const user = await prisma.user.findUnique({ where: { id } })
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur introuvable' })
      }

      if (user.image) {
        // Supprime l'image locale si existante (si tu stockes localement, sinon adapte)
        const imagePath = path.join('/tmp', 'uploads', user.image)
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath)
        }
      }

      await prisma.user.delete({ where: { id } })
      return res.status(200).json({ message: 'Utilisateur supprimé avec succès' })
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
