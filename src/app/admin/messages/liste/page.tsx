'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import Pusher, { Channel } from 'pusher-js'
import { useSession } from 'next-auth/react'

type Utilisateur = {
  id: number   
  nom: string    
}

type Message = {
  id: number
  contenu: string
  createdAt: string
  lu: boolean
  pieceJointeUrl?: string
  sender: Utilisateur
  receiver: Utilisateur
  projet?: { nom: string }
  tache?: { titre: string }
  tempId?: string // Pour les messages temporaires
}

export default function ListeMessagesPage() {
  const { data: session } = useSession()
  const [messages, setMessages] = useState<Message[]>([])
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])

  const [conversationWith, setConversationWith] = useState<number | null>(null)
  const [unreadOnly, setUnreadOnly] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const [contenu, setContenu] = useState('')
  const [receiverId, setReceiverId] = useState<number | ''>('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
 
  const [loadingMore, setLoadingMore] = useState(false)
  const [limit] = useState(50)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const pusherRef = useRef<Pusher | null>(null)
  const channelRef = useRef<Channel>(null)
  const conversationChannelRef = useRef<Channel>(null)

  // Initialisation Pusher
  useEffect(() => {
    if(!session?.user?.id) return

    pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    })

    // Canal personnel pour recevoir les nouveaux messages
    channelRef.current = pusherRef.current.subscribe(`user-${session.user.id}`)

    channelRef.current.bind('new-message', (data: { message: Message, notification: Notification }) => 
    {
      setMessages(prev => [data.message, ...prev])
      toast.info(`Nouveau message de ${data.message.sender.nom}`)
    })

    channelRef.current.bind('message-sent', (data: { tempId: string, message: Message }) => 
    {
      setMessages(prev => prev.map(msg => 
        msg.tempId === data.tempId ? { ...data.message, tempId: undefined } : msg
      ))
    })

    channelRef.current.bind('message-deleted', (data: { messageId: number }) => {
        setMessages(prev => prev.filter(msg => msg.id !== data.messageId))
    })

    channelRef.current.bind('messages-read', (data: { messageIds: number[], readBy: string }) => 
    {
      setMessages(prev => prev.map(msg => 
        data.messageIds.includes(msg.id) ? { ...msg, lu: true } : msg
      ))
    })

    return () => {
      if (channelRef.current) {
        channelRef.current.unbind_all()
        pusherRef.current?.unsubscribe(`user-${session.user.id}`)
      }
      if (conversationChannelRef.current) {
        conversationChannelRef.current.unbind_all()
      }
      pusherRef.current?.disconnect()
    }
  }, [session?.user?.id])

  // Canal de conversation spécifique
  useEffect(() => {
    if (!session?.user?.id || !pusherRef.current) return

    // Nettoyer l'ancien canal de conversation s'il existe
    if (conversationChannelRef.current) {
      conversationChannelRef.current.unbind_all()
      pusherRef.current.unsubscribe(conversationChannelRef.current.name)
      conversationChannelRef.current = null
    }

    // S'abonner au nouveau canal seulement si une conversation est sélectionnée
    if (conversationWith) {
      const userId = parseInt(session.user.id)
      const channelName = `conversation-${Math.min(userId, conversationWith)}-${Math.max(userId, conversationWith)}`
      
      conversationChannelRef.current = pusherRef.current.subscribe(channelName)
      
      conversationChannelRef.current.bind('new-message', (data: { message: Message }) => {
        setMessages(prev => {
          const exists = prev.find(msg => msg.id === data.message.id)
          if (exists) return prev
          return [...prev, data.message]
        })
      })

      conversationChannelRef.current.bind('message-deleted', (data: { messageId: number }) => {
        setMessages(prev => prev.filter(msg => msg.id !== data.messageId))
      })
    }

    return () => {
      if (conversationChannelRef.current) {
        conversationChannelRef.current.unbind_all()
        pusherRef.current?.unsubscribe(conversationChannelRef.current.name)
      }
    }
  }, [conversationWith, session?.user?.id])

  // Chargement des messages
  const fetchMessages = useCallback(async (reset = false) => {
    if (reset) {
      setOffset(0)
      setLoading(true)
    } else {
      setLoadingMore(true)
    }

    try {
      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: reset ? '0' : offset.toString(),
        ...(conversationWith && { conversationWith: conversationWith.toString() }),
        ...(unreadOnly && { unreadOnly: 'true' })
      })

      const res = await fetch(`/api/messages?${params}`)
      const data = await res.json()
      
      if (reset) {
        setMessages(data.data)
      } else {
        setMessages(prev => {
          const ids = new Set(prev.map(m => m.id))
          const nouveaux = data.data.filter((m: Message) => !ids.has(m.id))
          return [...prev, ...nouveaux]
        })
      }
      
      setHasMore(data.data.length === limit)
      setOffset(prev => reset ? limit : prev + limit)
    } catch (error) {
      console.error('Erreur fetch messages:', error)
      toast.error('Erreur lors du chargement des messages')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [conversationWith, unreadOnly, offset, limit])

  // Chargement des utilisateurs
  const fetchUtilisateurs = useCallback(async () => {
    try {
      const res = await fetch('/api/utilisateurs')
      const data = await res.json()
      setUtilisateurs(data.data)
    } catch (error) {
      console.error('Erreur fetch utilisateurs:', error)
    }
  }, [])

  useEffect(() => {
    fetchMessages(true)
    fetchUtilisateurs()
  }, [conversationWith, unreadOnly, fetchMessages, fetchUtilisateurs])

   // Marquer automatiquement les messages reçus comme lus
  useEffect(() => {
    if (!session?.user?.id || messages.length === 0) return

    const userId = parseInt(session.user.id)
    const unreadMessageIds = messages
      .filter(msg => 
        !msg.lu && 
        msg.receiver.id === userId &&
        !msg.tempId // Exclure les messages temporaires
      )
      .map(msg => msg.id)

    if (unreadMessageIds.length > 0) {
      markAsRead(unreadMessageIds)
    }
  }, [messages, session?.user?.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!receiverId || !contenu.trim()) return 
    setSending(true)

    // Message temporaire pour l'UI optimiste
    const tempId = `temp_${Date.now()}`
    const tempMessage: Message = {
      id: -1,
      tempId,
      contenu,
      createdAt: new Date().toISOString(),
      lu: false,
      sender: { id: parseInt(session?.user?.id || '0'), nom: session?.user?.nom || 'Vous' },
      receiver: utilisateurs.find(u => u.id === receiverId) || { id: receiverId as number, nom: 'Inconnu' }
    }

    setMessages(prev => [tempMessage, ...prev])

    try {
      const formData = new FormData()
      formData.append('contenu', contenu)
      formData.append('receiverId', receiverId.toString())
      formData.append('tempId', tempId)
      
      if (selectedFile) {
        formData.append('pieceJointe', selectedFile)
      }

      const res = await fetch('/api/messages', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        // Retirer le message temporaire en cas d'erreur
        setMessages(prev => prev.filter(msg => msg.tempId !== tempId))
        toast.error("Erreur lors de l'envoi du message")
        return
      }

      toast.success('Message envoyé avec succès 🎉')

      // Reset form
      setContenu('')
      setReceiverId('')
      setSelectedFile(null)
      setOpenModal(false)

    } catch (err) {
      console.error("Erreur inconnue", err)
      setMessages(prev => prev.filter(msg => msg.tempId !== tempId))
      toast.error("Une erreur est survenue.")
    } finally {
      setSending(false)
    }
  }

  // Suppression de message
  const deleteMessage = async (messageId: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) return

    try {
      const res = await fetch(`/api/messages?messageId=${messageId}`, {
        method: 'DELETE'
      })

      if (!res.ok) {
        toast.error('Erreur lors de la suppression')
        return
      }

      toast.success('Message supprimé')
    } catch (error) {
      console.error('Erreur suppression:', error)
      toast.error('Erreur lors de la suppression')
    }
  }

  // Marquer comme lu
  const markAsRead = async (messageIds: number[]) => {
    try {
      const res = await fetch('/api/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messageIds, 
          action: 'mark-as-read' 
        })
      })

      if (!res.ok) {
        console.error('Erreur lors du marquage comme lu')
      }
    } catch (error) {
      console.error('Erreur marquage lu:', error)
    }
  }

  // Charger plus de messages
  const loadMore = () => {
    if (!loadingMore && hasMore) {
      fetchMessages(false)
    }
  }

  return (
    <div className="p-6">
      <Link href="/admin/dashboard" className="text-blue-600 underline mb-4 inline-block">
        ← Retour au dashboard
      </Link>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          ✉️ Nouveau message
        </button>
      </div>

      {/* Filtres */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Conversation avec:</label>
          <select
            className="border rounded px-3 py-1 text-sm"
            value={conversationWith ?? ''}
            onChange={(e) => setConversationWith(e.target.value ? parseInt(e.target.value) : null)}
          >
            <option value="">Tous les utilisateurs</option>
            {utilisateurs.filter(u => u.id !== parseInt(session?.user?.id ?? '0')).map(user => (
              <option key={user.id} value={user.id}>{user.nom}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="unread"
            checked={unreadOnly}
            onChange={(e) => setUnreadOnly(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="unread" className="text-sm font-medium">Non lus uniquement</label>
        </div>

        <button
          onClick={() => fetchMessages(true)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          🔄 Actualiser
        </button>
      </div>   

      {/* Liste des messages */}
      <div className="space-y-3">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
            <p className="text-gray-500 mt-2">Chargement des messages...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>Aucun message trouvé.</p>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <div 
                key={msg.tempId || msg.id} 
                className={`border rounded-lg p-4 transition-all ${
                  msg.tempId ? 'opacity-60' : 'hover:shadow-md'
                } ${
                  !msg.lu && msg.receiver.id === parseInt(session?.user?.id || '0') 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <span className="font-medium">
                        {msg.sender?.nom ?? 'Inconnu'} → {msg.receiver?.nom ?? 'Inconnu'}
                      </span>
                      {msg.projet && (
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                          📁 {msg.projet.nom}
                        </span>
                      )}
                      {msg.tache && (
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                          ✓ {msg.tache.titre}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-800 mb-2">{msg.contenu}</p>
                    {msg.pieceJointeUrl && (
                      <a 
                        href={msg.pieceJointeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                      >
                        📎 Pièce jointe
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {new Date(msg.createdAt).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}
                    {!msg.lu && msg.receiver.id === parseInt(session?.user?.id || '0') && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                    {msg.sender?.id === parseInt(session?.user?.id || '0') && !msg.tempId && (
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                        title="Supprimer"
                      >
                        🗑️
                      </button>
                    )}
                    {msg.tempId && (
                      <span className="text-xs text-gray-400">Envoi...</span>
                    )}
                  </div>
                </div>

                {!msg.tempId && (
                  <Link href={`/admin/messages/liste/${msg.id}`}>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      Voir détails →
                    </button>
                  </Link>
                )}
              </div>
            ))}

            {/* Bouton charger plus */}
            {hasMore && (
              <div className="text-center py-4">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  {loadingMore ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                      Chargement...
                    </span>
                  ) : (
                    'Charger plus de messages'
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modale de création de message */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[500px] max-w-[90vw] max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Nouveau message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Destinataire *</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={receiverId}
                  onChange={(e) => setReceiverId(e.target.value ? Number(e.target.value) : '')}
                  required
                >
                  <option value="">Sélectionner un destinataire</option>
                  {utilisateurs.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  placeholder="Tapez votre message..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  value={contenu}
                  onChange={(e) => setContenu(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Pièce jointe (optionnel)</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  accept="image/*,application/pdf,.doc,.docx,.txt"
                />
                {selectedFile && (
                  <p className="text-sm text-gray-600 mt-1">
                    Fichier sélectionné: {selectedFile.name}
                  </p>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setOpenModal(false)
                    setContenu('')
                    setReceiverId('')
                    setSelectedFile(null)
                  }}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2"
                >
                  Annuler
                </button>
                
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  disabled={sending || !contenu.trim() || !receiverId}
                >
                  {sending && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {sending ? 'Envoi...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
