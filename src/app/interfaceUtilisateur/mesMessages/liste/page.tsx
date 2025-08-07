'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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

export default function ListeMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/mesMessages')
        if (!res.ok) throw new Error('Erreur lors du chargement')
        const data = await res.json()
        setMessages(data.data)
      } catch (err) {
        console.error("Erreur lors de la récupération" ,err)
        setError("Impossible de charger les messages.")
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (messages.length === 0) return <p>Aucun message.</p>

  return (
    <div className="p-4">
      <Link href="/interfaceUtilisateur/dashboard" className="text-blue-600 underline mb-4 inline-block">
        ← Retour au dashboard
      </Link>
      <h1 className="text-xl font-semibold mb-4">Mes messages</h1>
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
    </div>
  )
}
