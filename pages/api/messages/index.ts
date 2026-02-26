import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { getAuthSession } from '@/lib/auth'
import formidable, { File } from 'formidable'   
import fs from 'fs'     
import path from 'path'
import cloudinary from '@/lib/cloudinary'   
import Pusher from 'pusher'
import { Prisma } from '@prisma/client'

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true
})

export const config = { api: { bodyParser: false } }

type PatchRequestBody = {
  messageIds: number[]
  action: string
}

async function parseJsonBody(req: NextApiRequest): Promise<PatchRequestBody> {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', chunk => { body += chunk })
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body)

        // Optionnel : valider la forme de parsed avant de resolve
        if (
          typeof parsed === 'object' && parsed !== null &&
          Array.isArray(parsed.messageIds) &&
          typeof parsed.action === 'string'
        ) {
          resolve(parsed as PatchRequestBody)
        } else {
          reject(new Error('Body JSON invalide'))
        }
      } catch (error) {
        reject(error)
      }
    })
  })
}


const uploadDir = path.join('/tmp', 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

/* Parse multipart/form‑data ------------------------------------------------- */
function parseForm(req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({ uploadDir, keepExtensions: true, maxFileSize: 5 * 1024 * 1024 })
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })))
  })
}

async function triggerPusher(channel: string, event: string, data: unknown) {
  try {
    await pusher.trigger(channel, event, data)
  } catch (err) {
    console.error(`Erreur Pusher sur ${channel} / ${event} :`, err)
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const session = await getAuthSession(req, res)
    if (!session?.user?.id) return res.status(401).json({ message: 'Non autorisé' })

  const userId = parseInt(session.user.id)
  if (isNaN(userId)) return res.status(400).json({ message: 'ID utilisateur invalide' })

  /* ------------------------------------------------------------------ GET */
  if (req.method === 'GET') {    

    try {    
      const { conversationWith, limit='50', offset='0', unreadOnly='false' } = req.query

      let whereClause: Prisma.MessageWhereInput = {
        OR: [
          { receiverId: userId },
          { senderId: userId },
        ],
      }

      // Filtrer par conversation spécifique
      if(conversationWith){
        const otherUserId = parseInt(conversationWith.toString())
        whereClause = {
          OR: [
            {
              senderId: userId,
              receiverId: otherUserId
            },
            {
              senderId: otherUserId,
              receiverId: userId
            },
          ],
        }
      }

      // Filtrer seulement les non lus
      if(unreadOnly === 'true'){
        whereClause = {
          ...whereClause,
          vu: false,
          receiverId: userId //seulement les messages reçus
        }
      }

      const messages = await prisma.message.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' },
        take: parseInt(limit.toString()),
        skip: parseInt(offset.toString()),
        include: {
          sender: { select: { id: true, nom: true } },
          receiver: { select: { id: true, nom: true } },
          projet: { select: { nom: true } },
          tache:  { select: { titre: true } },
          planning: { select: { id: true, titre: true, slug: true } },
        },
      })
  

      // Marquer comme lus si c'est une conversation spécifique
      if(conversationWith){
        const messagesToMarkAsRead = messages
        .filter(msg => msg.receiverId === userId && !msg.vu)
        .map(msg => msg.id)

        if(messagesToMarkAsRead.length > 0){
          await prisma.message.updateMany({
            where: { id: { in: messagesToMarkAsRead } },
            data: { vu: true }
          })

          // Notifier via Pusher que les messages sont lus
          await triggerPusher(`user-${conversationWith}`, 'messages-read', {
            messageIds: messagesToMarkAsRead,
            readBy: session.user.id,
          })

        }
      }

      return res.status(200).json({ 
        data: conversationWith ? messages .reverse() : messages,
        total: messages.length
      })
    } catch (error) {
      console.error('Erreur GET messages :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  /* ----------------------------------------------------------------- POST */
  if (req.method === 'POST') {
    
    try {  
      const { fields, files } = await parseForm(req)
      const contenu     = fields.contenu?.toString() ?? ''
      const receiverId  = parseInt(fields.receiverId?.toString() || '')
      const projetId    = fields.projetId   ? parseInt(fields.projetId.toString())   : null
      const tacheId     = fields.tacheId    ? parseInt(fields.tacheId.toString())    : null
      const planningId  = fields.planningId ? parseInt(fields.planningId.toString()) : null
      const file        = Array.isArray(files.pieceJointe) ? files.pieceJointe[0] : files.pieceJointe
      const tempId      = fields.tempId?.toString() || null

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

        fileUrl = uploaded.secure_url // <== ici ! 

        fs.unlinkSync(f.filepath)

      }

      /* Création du message + notification --------------------------------- */
      const nouveauMessage = await prisma.message.create({
        data: {
          contenu,
          pieceJointeUrl: fileUrl,
          senderId: userId,
          receiverId,
          projetId,
          tacheId,
          planningId,
        },
        include: {
          sender:   { select: { id: true, nom: true } },
          receiver: { select: { id: true, nom: true } },
          projet:   { select: { nom: true } },
          tache:    { select: { titre: true } },
          planning: { select: { id: true, titre: true, slug: true } },
        }
      })

      /* Notification en base  */
      const notification = await prisma.notification.create({
        data: {
          userId: receiverId,
          emetteurId: userId,
          message: `Nouveau message de ${session.user.nom}`,
          lien: `/shared/messages/${nouveauMessage.id}`,
          messageId: nouveauMessage.id,
        },
      })

      /* Pusher - Envoyer en temps réel -------------------------------------- */

      /* 🔥 MODIFICATION PRINCIPALE : Inclure tempId dans les événements Pusher */
      const conversationChannel = `conversation-${Math.min(userId, receiverId)}-${Math.max(userId, receiverId)}`

      await Promise.all([
        // Pour le destinataire
        triggerPusher(`user-${receiverId}`, 'new-message', { 
          message: nouveauMessage, 
          notification 
        }),
        
        // 🆕 Pour la conversation (AVEC tempId pour remplacer le message temporaire)
        triggerPusher(conversationChannel, 'new-message', { 
          message: nouveauMessage,
          tempId: tempId // ✅ CRUCIAL : inclure tempId ici
        }),
        
        // 🆕 Optionnel : Confirmation pour l'expéditeur
        tempId ? triggerPusher(`user-${userId}`, 'message-sent', { 
          tempId, 
          message: nouveauMessage 
        }) : Promise.resolve(),
      ])

      return res.status(201).json({ data: nouveauMessage, tempId: tempId }) // ✅ Retourner aussi le tempId dans la réponse })

    } catch (error) {
      console.error('Erreur POST message :', error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  if (req.method === 'DELETE'){
    try{
      const { messageId } = req.query
      if(!messageId){
        return res.status(400).json({ message: 'ID du message requis' })
      }

      const message = await prisma.message.findFirst({
        where: { 
          id: parseInt(messageId.toString()),
          senderId: userId // Seul l'expéditeur peut supprimer
        }
      })
      if (!message) {
        return res.status(404).json({ message: 'Message non trouvé ou non autorisé' })
      }

      await prisma.message.delete({
        where: { id: parseInt(messageId.toString()) }
      })

      // Notifier via Pusher uniquement si les deux IDs existent (message direct)
      if (message.receiverId !== null && message.senderId !== null) {
        await Promise.all([
          triggerPusher(`user-${message.receiverId}`, 'message-deleted', { messageId: message.id }),
          triggerPusher(
            `conversation-${Math.min(message.senderId, message.receiverId)}-${Math.max(message.senderId, message.receiverId)}`,
            'message-deleted',
            { messageId: message.id }
          )
        ])
      }

      return res.status(200).json({ message: 'Message supprimé' })

    }catch(error){
      console.error("Erreur lors de la suppression", error)
      return res.status(500).json({ message: 'Erreur interne' })
    }
  }

  /* ----------------------------------------------- ----------------- PATCH */
  if (req.method === 'PATCH') {
    try {
      const { messageIds, action } = await parseJsonBody(req);

      if (action === 'mark-as-read' && Array.isArray(messageIds)) {

        // 1️⃣ Mettre à jour les messages dans la base
        const updatedMessages = await prisma.message.updateMany({
          where: {
            id: { in: messageIds },
            receiverId: userId
          },
          data: { vu: true, vuAt: new Date() }
        });

        // 2️⃣ Récupérer les messages mis à jour avec les bons senderId / receiverId / vuAt
        const messagesForPusher = await prisma.message.findMany({
          where: { id: { in: messageIds } },
          select: { id: true, senderId: true, receiverId: true, vuAt: true }
        });

        const validMessages = messagesForPusher.filter(
          (m): m is { id: number; senderId: number; receiverId: number; vuAt: Date | null } =>
            m.senderId !== null && m.receiverId !== null
        );


        // 3️⃣ Construire la liste unique des conversations à notifier
        const uniqueConversations = Array.from(
          new Set(validMessages.map(m =>
            `conversation-${Math.min(m.senderId, m.receiverId)}-${Math.max(m.senderId, m.receiverId)}`
          ))
        );

        // 4️⃣ Envoyer les notifications Pusher par conversation
        await Promise.all(
          uniqueConversations.map(channelName => {
            const messagesInChannel = validMessages.filter(m =>
              channelName === `conversation-${Math.min(m.senderId, m.receiverId)}-${Math.max(m.senderId, m.receiverId)}`
            );

            return triggerPusher(channelName, 'messages-read', {
              messageIds: messagesInChannel.map(m => m.id),
              readBy: userId,
              readAt: new Date().toISOString(),
              updatedMessages: messagesInChannel
            });
          })
        );


        return res.status(200).json({
          message: 'Messages marqués comme lus',
          data: messagesForPusher
        });
      }

      return res.status(400).json({ message: 'Action non supportée' });
    } catch (error) {
      console.error('Erreur PATCH message :', error);
      return res.status(500).json({ message: 'Erreur interne' });
    }
  }

  /* ----------------------------------------------------------------- 405  */
  res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PATCH'])
  res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
}
