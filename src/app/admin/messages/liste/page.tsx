'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

type Utilisateur = {
  id: number
  nom: string
}

type Message = {
  id: number
  contenu: string
  createdAt: string
  sender: Utilisateur
  receiver: Utilisateur
}

export default function ListeMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])

  const [openModal, setOpenModal] = useState(false)

  const [contenu, setContenu] = useState('')
  const [receiverId, setReceiverId] = useState<number | ''>('')

  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/messages')
      const data = await res.json()
      setMessages(data.data)
      setLoading(false)
    }

    const fetchUtilisateurs = async () => {
      const res = await fetch('/api/utilisateurs')
      const data = await res.json()
      setUtilisateurs(data.data)
    }

    fetchMessages()
    fetchUtilisateurs()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!receiverId || !contenu) return 
    setSending(true)

    try {
      const formData = new FormData()
      formData.append('contenu', contenu)
      formData.append('receiverId', receiverId.toString())

      const res = await fetch('/api/messages', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        toast.error("Erreur lors de l'envoi du message")
        return
      }

      toast.success('Message envoyé avec succès 🎉')

      // Reset form
      setContenu('')
      setReceiverId('')
      setOpenModal(false)

      // Refresh messages
      setLoading(true)
      const refreshed = await fetch('/api/messages')
      const data = await refreshed.json()
      setMessages(data.data)
    } catch (err) {
      console.error("Erreur inconnue", err)
      toast.error("Une erreur est survenue.")
    } finally {
      setSending(false)
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Messages reçus / envoyés</h1>

      <button
        onClick={() => setOpenModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:cursor-pointer"
      >
        ✉️ Nouveau message
      </button>    

      <div className="space-y-3">
        {loading ? (
          <p className="text-gray-500">Chargement des messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-500">Aucun message.</p>
        ) : (
          messages.map((msg) => (
            <Link key={msg.id} href={`/admin/messages/liste/${msg.id}`}>
              <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">
                <p className="text-sm text-gray-600">
                  De : {msg.sender?.nom ?? 'Inconnu'} → {msg.receiver?.nom ?? 'Inconnu'} •{' '}
                  {new Date(msg.createdAt).toLocaleString('fr-FR')}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Modale de création de message */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[400px]">
            <h2 className="text-lg font-bold mb-4 ">Nouveau message</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <select
                className="w-full border px-3 py-2 rounded"
                value={receiverId}
                onChange={(e) => setReceiverId(Number(e.target.value))}
                required
              >
                <option value="">Sélectionner un destinataire</option>
                {utilisateurs.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.nom}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Contenu"
                className="w-full border px-3 py-2 rounded"
                rows={4}
                value={contenu}
                onChange={(e) => setContenu(e.target.value)}
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  disabled={sending}
                >
                  {sending ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 mr-2"></span>
                  ) : null}
                  {sending ? 'Envoi...' : 'Envoyer'}
                </button>
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="text-gray-600 hover:underline"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
