'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { toast } from 'react-toastify'
import Pusher, { Channel } from 'pusher-js'
import { useSession } from 'next-auth/react'
import Linkify from 'linkify-react'
import Link from 'next/link'

type Utilisateur = {  
  id: number   
  nom: string    
}

type Message = {
  id: number
  contenu: string
  createdAt: string
  vu: boolean
  sender: Utilisateur
  receiver: Utilisateur
  tempId?: string
  sending?: true // flag pour animation "envoi en cours"
}

export default function ChatPage() {
  const { data: session } = useSession()
  const userId = session?.user?.id ? parseInt(session.user.id) : null

  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])

  const [loading, setLoading] = useState(false)

  const [conversationWith, setConversationWith] = useState<number | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')
  const [sending, setSending] = useState(false)

  const pusherRef = useRef<Pusher | null>(null)
  const conversationChannelRef = useRef<Channel>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  //Scroll automatique en bas quand messages changent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Chargement des utilisateurs
  const fetchUtilisateurs = useCallback(async () => {
    setLoading(true) // ✅ Activer le loading avant la requête
    try {
      const res = await fetch('/api/utilisateurs')
      const data = await res.json()
      setUtilisateurs(data.data)
    } catch (error) {
      console.error('Erreur fetch utilisateurs:', error)
      toast.error('Erreur lors du chargement des utilisateurs')
    }finally{
      setLoading(false)
    }
  }, [])

  // Chargement des messages de la conversation sélectionnée
  const fetchMessages = useCallback(async (convWith: number) => {

    try {
      const res = await fetch(`/api/messages?conversationWith=${convWith}&limit=100&offset=0`)
      const data = await res.json()
      // Trier par date ascendante pour chat
      setMessages(data.data.sort((a: Message, b: Message) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))
    } catch (error) {
      console.error('Erreur fetch messages:', error)
      toast.error('Erreur lors du chargement des messages')
    }
  }, [])

  // Initialisation Pusher et abonnement conversation
  useEffect(() => {
    if (!userId) return

    if (!process.env.NEXT_PUBLIC_PUSHER_KEY || !process.env.NEXT_PUBLIC_PUSHER_CLUSTER) {
      console.error("❌ Clés Pusher manquantes dans .env.local");
      return
    }

    pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    })

    return () => {
      if (conversationChannelRef.current) {
        conversationChannelRef.current.unbind_all()
        pusherRef.current?.unsubscribe(conversationChannelRef.current.name)
      }
      pusherRef.current?.disconnect()
    }
  }, [userId])

  // Changement de conversation: abonnement Pusher et fetch messages
  useEffect(() => {
    if (!userId || !pusherRef.current) return

    if (conversationChannelRef.current) {
      conversationChannelRef.current.unbind_all()
      pusherRef.current.unsubscribe(conversationChannelRef.current.name)
      conversationChannelRef.current = null
    }

    if (conversationWith) {
      const channelName = `conversation-${Math.min(userId, conversationWith)}-${Math.max(userId, conversationWith)}`
      conversationChannelRef.current = pusherRef.current.subscribe(channelName)

      conversationChannelRef.current.bind('new-message', (data: { message: Message, tempId?: string }) => {  
        setMessages(prev => {
          // Si c'est un message qu'on vient d'envoyer (avec tempId), remplacer le message temporaire
          if (data.tempId) {
            return prev.map(m => 
              m.tempId === data.tempId ? data.message : m
            ).filter(m => m.id !== -1 || !m.tempId) // Nettoyer les doublons temporaires
          }
          
          // Sinon, vérifier si le message existe déjà pour éviter les doublons
          if (prev.find(m => m.id === data.message.id)) return prev
          
          return [...prev, data.message].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        })

        // Toast uniquement pour les messages reçus (pas envoyés par soi-même)
        if (data.message.sender.id !== userId) {
          toast.info(`📩 Nouveau message de ${data.message.sender.nom}`, { autoClose: 3000 })
        }
      })

      conversationChannelRef.current.bind('message-deleted', (data: { messageId: number }) => {
        setMessages(prev => prev.filter(m => m.id !== data.messageId))
        toast.warn('🗑️ Un message a été supprimé', { autoClose: 2000 })
      })

      fetchMessages(conversationWith)
    } else {
      setMessages([])
    }

  }, [conversationWith, userId, fetchMessages])

  // Chargement initial utilisateurs
  useEffect(() => {
    fetchUtilisateurs()
  }, [fetchUtilisateurs])

  // Marquer messages comme lus automatiquement
  useEffect(() => {
    if (!userId || !conversationWith) return

    const unreadIds = messages.filter(m => !m.vu && m.receiver.id === userId).map(m => m.id)

    if (unreadIds.length > 0) {
      fetch('/api/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageIds: unreadIds, action: 'mark-as-read' })
      }).catch(console.error)
    }
  }, [messages, userId, conversationWith])

  // Envoi message
  const sendMessage = async () => {
    if (!messageInput.trim() || !conversationWith || !userId) return
    setSending(true)

    const tempId = `temp_${Date.now()}_${userId}`
    const tempMsg: Message = {
      id: -1,
      tempId,
      contenu: messageInput,
      createdAt: new Date().toISOString(),
      vu: false,
      sender: { id: userId, nom: session?.user?.nom || 'Vous' },
      receiver: utilisateurs.find(u => u.id === conversationWith)!,
      sending: true // flag pour animation "envoi en cours"
    }
    setMessages(prev => [...prev, tempMsg])
    setMessageInput('')

    try {
      const formData = new FormData()
      formData.append('contenu', tempMsg.contenu)
      formData.append('receiverId', conversationWith.toString())
      formData.append('tempId', tempId)

      const res = await fetch('/api/messages', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Erreur envoi')

      // Toast succès après confirmation serveur
      toast.success('Message envoyé ✅', { autoClose: 1500 })

      // Le message réel sera reçu via Pusher, le temp sera remplacé
    } catch (err) {
      console.error('Erreur lors de l’envoi', err)
      // Marquer le message comme "échec"
      // Supprimer le message temporaire en cas d'échec
      setMessages(prev => prev.filter(m => m.tempId !== tempId))
      toast.error('Erreur lors de l’envoi ❌', { autoClose: 2000 });
    } finally {
      setSending(false)
    }
  }

  const cleanupTempMessages = useCallback(() => {
    setMessages(prev => prev.filter(m => {
      // Supprimer les messages temporaires de plus de 30 secondes
      if (m.tempId && m.id === -1) {
        const messageTime = new Date(m.createdAt).getTime()
        const now = Date.now()
        return (now - messageTime) < 5000 // Garder seulement les messages de moins de 5s
      }
      return true
    }))
  }, [])

  // 4. Utiliser useEffect pour nettoyer périodiquement
  useEffect(() => {
    const interval = setInterval(cleanupTempMessages, 10000) // Nettoyer toutes les 10 secondes
    return () => clearInterval(interval)
  }, [cleanupTempMessages])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleDeleteMessage = async (messageId: number) => {
    if (!confirm("Voulez-vous vraiment supprimer ce message ?")) return

    try {
      const res = await fetch(`/api/messages?messageId=${messageId}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Erreur suppression')

      // Met à jour la liste localement
      setMessages(prev => prev.filter(m => m.id !== messageId))

    } catch (error) {
      console.error('Erreur lors de la suppression du message', error)
      toast.error('Erreur lors de la suppression du message')
    }
  } 


  return (
    <div className="flex h-screen p-4 gap-6 max-w-7xl mx-auto">

      {/* Lien retour dashboard */}
      <div className="absolute bottom-4 left-4">
        <Link href="/interfaceUtilisateur/dashboard" 
          className="text-blue-600 hover:underline font-semibold">
          ← Retour au dashboard
        </Link>
      </div>

      {/* Liste utilisateurs */}
      <aside className="w-64 border-r border-gray-300 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Utilisateurs</h2>
        {loading ? (
          // ✅ État de chargement
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
            <p className="text-sm text-gray-500">Chargement...</p>
          </div>
        ) : utilisateurs?.length === 0 ? (
          // ✅ État vide (pas d'utilisateurs)
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">Aucun utilisateur trouvé</p>
          </div>
        ) : (
          // ✅ Liste des utilisateurs
          <ul>
            {utilisateurs.filter(u => u.id !== userId).map(user => (
              <li
                key={user.id}
                className={`cursor-pointer px-4 py-2 rounded hover:bg-blue-100 transition-colors duration-150 ${
                  conversationWith === user.id ? 'bg-blue-200 font-bold' : ''
                }`}
                onClick={() => setConversationWith(user.id)}
              >
                <div className="flex items-center gap-2">
                  {/* Avatar ou initiale */}
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user.nom.charAt(0).toUpperCase()}
                  </div>
                  <span>{user.nom}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Zone chat */}
      <section className="flex flex-col flex-1 border rounded shadow ">
        <header className="border-b p-4 font-semibold bg-black text-white">
          {conversationWith
            ? `Conversation avec ${utilisateurs.find(u => u.id === conversationWith)?.nom ?? 'Inconnu'}`
            : 'Sélectionnez un utilisateur pour commencer'}
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-3 bg-green-100">
          {!conversationWith ? (
            <p className="text-gray-500">Aucune conversation sélectionnée.</p>
          ) : messages.length === 0 ? (
            <p className="text-gray-500">Aucun message dans cette conversation.</p>
          ) : (
            messages.map(msg => {       
              const isSender = msg.sender.id === userId
              return (
                <div
                  key={msg.tempId || msg.id}
                  className={`max-w-xs p-2 rounded-lg break-words whitespace-pre-wrap 
                  ${isSender ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-gray-900 mr-auto'} 
                  relative
                  ${msg.sending ? 'opacity-50 italic' : ''}`}
                >
                  <p>
                    <Linkify
                      options={{
                        target: '_blank',  // ouvre les liens dans un nouvel onglet
                        rel: 'noopener noreferrer',
                        className: 'text-black underline hover:text-blue-600', // ici ta classe Tailwind pour liens
                      }}
                    >
                      {msg.contenu}
                    </Linkify>
                    {/* Animation si en cours d'envoi */}
                    {msg.sending && (
                      <span className="ml-2 inline-block animate-pulse">⏳</span>
                    )}
                  </p>
                  <small className="block text-xs text-gray-700 mt-1 text-right">
                    {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    {!msg.vu && !isSender && <span className="ml-1 inline-block w-2 h-2 bg-blue-600 rounded-full"></span>}
                  </small>

                  {isSender && (
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="absolute top-1 right-1 text-xs text-red-600 hover:text-red-800"
                      aria-label="Supprimer message"
                    >
                      ×
                    </button>
                  )}
                </div>
              )
            })
          )}
          <div ref={messagesEndRef} />
        </main>

        {/* Formulaire d'envoi */}
        {conversationWith && (
          <footer className="border-t p-4 bg-gray-50 flex gap-2">
            <textarea
              rows={2}
              className="flex-1 resize-none border rounded px-3 py-2 focus:outline-blue-500"
              placeholder="Tapez votre message..."
              value={messageInput}
              onChange={e => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={sending}
            />
            <button
              onClick={sendMessage}
              disabled={sending || !messageInput.trim()}
              className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              Envoyer
            </button>
          </footer>
        )}
      </section>
    </div>
  )
}
