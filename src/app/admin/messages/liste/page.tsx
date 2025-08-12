'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { toast } from 'react-toastify'
import Pusher, { Channel } from 'pusher-js'
import { useSession } from 'next-auth/react'
import Linkify from 'linkify-react'

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
}

export default function ChatPage() {
  const { data: session } = useSession()
  const userId = session?.user?.id ? parseInt(session.user.id) : null

  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [conversationWith, setConversationWith] = useState<number | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')
  const [sending, setSending] = useState(false)

  const pusherRef = useRef<Pusher | null>(null)
  const conversationChannelRef = useRef<Channel>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll automatique en bas quand messages changent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

  // Chargement des messages de la conversation sélectionnée
  const fetchMessages = useCallback(async (convWith: number) => {
    try {
      const res = await fetch(`/api/messages?conversationWith=${convWith}&limit=100&offset=0`)
      const data = await res.json()
      // Trier par date ascendante pour chat
      setMessages(data.data.sort((a: Message, b: Message) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))
    } catch (error) {
      console.error('Erreur fetch messages:', error)
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

      conversationChannelRef.current.bind('new-message', (data: { message: Message }) => {  
        setMessages(prev => {
          if (prev.find(m => m.id === data.message.id)) return prev
          return [...prev, data.message].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        })
      })

      conversationChannelRef.current.bind('message-deleted', (data: { messageId: number }) => {
        setMessages(prev => prev.filter(m => m.id !== data.messageId))
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

    const tempId = `temp_${Date.now()}`
    const tempMsg: Message = {
      id: -1,
      tempId,
      contenu: messageInput,
      createdAt: new Date().toISOString(),
      vu: false,
      sender: { id: userId, nom: session?.user?.nom || 'Vous' },
      receiver: utilisateurs.find(u => u.id === conversationWith)!,
      
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

      // Le message réel sera reçu via Pusher, le temp sera remplacé
    } catch (err) {
      console.error('Erreur lors de l’envoi', err)
      setMessages(prev => prev.filter(m => m.tempId !== tempId))
      toast.error('Erreur lors de l’envoi')
    } finally {
      setSending(false)
    }
  }

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
      {/* Liste utilisateurs */}
      <aside className="w-64 border-r border-gray-300 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Utilisateurs</h2>
        <ul>
          {utilisateurs.filter(u => u.id !== userId).map(user => (
            <li
              key={user.id}
              className={`cursor-pointer px-4 py-2 rounded hover:bg-blue-100 ${
                conversationWith === user.id ? 'bg-blue-200 font-bold' : ''
              }`}
              onClick={() => setConversationWith(user.id)}
            >
              {user.nom}
            </li>
          ))}
        </ul>
      </aside>

      {/* Zone chat */}
      <section className="flex flex-col flex-1 border rounded shadow ">
        <header className="border-b p-4 font-semibold bg-gray-50">
          {conversationWith
            ? `Conversation avec ${utilisateurs.find(u => u.id === conversationWith)?.nom ?? 'Inconnu'}`
            : 'Sélectionnez un utilisateur pour commencer'}
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-3 bg-green-200">
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
                  className={`max-w-xs p-2 rounded-lg break-words whitespace-pre-wrap ${
                    isSender ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 text-gray-900 mr-auto'
                  } relative`} // position relative pour placer bouton
                >
                  <p>
                    <Linkify
                      options={{
                        target: '_blank',  // ouvre les liens dans un nouvel onglet
                        rel: 'noopener noreferrer',
                        className: 'text-blue-600 underline hover:text-blue-600', // ici ta classe Tailwind pour liens
                      }}
                    >
                      {msg.contenu}
                    </Linkify>
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
