'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

interface Message {   
  id: number
  contenu: string
  createdAt: string
  pieceJointeUrl?: string | null
  sender: { nom: string }
  receiver: { nom: string }
  projet?: { nom: string } | null
  tache?: { titre: string } | null
}

interface Utilisateur {
  id: number
  nom: string
}

export default function ListeMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [contenu, setContenu] = useState('')
  const [receiverId, setReceiverId] = useState<number | ''>('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [messagesRes, usersRes] = await Promise.all([
          fetch('/api/mesMessages'),
          fetch('/api/utilisateurs'),
        ])

        if (!messagesRes.ok || !usersRes.ok) throw new Error('Erreur lors du chargement')

        const messagesData = await messagesRes.json()
        const usersData = await usersRes.json()

        setMessages(messagesData.data)
        setUtilisateurs(usersData.data)
      } catch (err) {
        console.error("Erreur lors de la récupération", err)
        setError("Impossible de charger les messages.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
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
      setContenu('')
      setReceiverId('')
      setOpenModal(false)

      const refreshed = await fetch('/api/mesMessages')
      const data = await refreshed.json()
      setMessages(data.data)
    } catch (err) {
      console.error("Erreur inconnue", err)
      toast.error("Une erreur est survenue.")
    } finally {
      setSending(false)
    }
  }

  if (loading) return <p>Chargement...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (messages.length === 0) return <p>Aucun message.</p>

  return (
    <div className="p-4">
      <Link href="/interfaceUtilisateur/dashboard" className="text-blue-600 underline mb-4 inline-block">
        ← Retour au dashboard
      </Link>
      <h1 className="text-xl font-semibold mb-4">Mes messages</h1>

      <button
        onClick={() => setOpenModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:cursor-pointer"
      >
        ✉️ Nouveau message
      </button>

      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg.id} className="border p-4 rounded shadow-sm">
            <Link href={`/interfaceUtilisateur/mesMessages/liste/${msg.id}`} className="block hover:bg-gray-50 rounded p-2 transition">
              <div className="text-sm text-gray-600 mb-1">
                <span className="font-medium">De :</span> {msg.sender.nom} &nbsp;
                <span className="font-medium">À :</span> {msg.receiver.nom}
              </div>
              <div className="text-gray-800 mb-2">{msg.contenu}</div>

              {msg.projet && (
                <div className="text-sm text-gray-500">
                  Projet : <span className="font-medium">{msg.projet.nom}</span>
                </div>
              )}

              {msg.tache && (
                <div className="text-sm text-gray-500">
                  Tâche : <span className="font-medium">{msg.tache.titre}</span>
                </div>
              )}

              {msg.pieceJointeUrl && (
                <div className="mt-2">
                  📎{' '}
                  <a
                    href={msg.pieceJointeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Voir la pièce jointe
                  </a>
                </div>
              )}

              <div className="text-xs text-gray-400 mt-2">
                {new Date(msg.createdAt).toLocaleString('fr-FR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </Link>
          </li>
        ))}
      </ul>

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
                  className="bg-green-600 text-white px-4 py-2 rounded hover:cursor-pointer"
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
