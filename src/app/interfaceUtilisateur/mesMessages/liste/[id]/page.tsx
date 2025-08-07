'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'   
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Linkify from 'linkify-react'

interface Message {
  id: number
  contenu: string
  pieceJointeUrl?: string | null
  createdAt: string
  vu: boolean
  sender: { nom: string }
  receiver: { nom: string } | null
  projet?: { nom: string } | null
  tache?: { titre: string } | null
  planning?: { id: number } | null
}

export default function MessageDetails() {
  const { id } = useParams() as { id: string }
  const [message, setMessage] = useState<Message | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`/api/mesMessages/${id}`)
        if (!res.ok) throw new Error('Erreur lors du chargement')
        const data = await res.json()
        setMessage(data.data)
      } catch (err) {
        console.error(err)
        setError("Impossible de charger le message.")
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchMessage()
  }, [id])

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  if (error || !message) {
    return <p className="text-red-500">{error ?? "Message introuvable."}</p>
  }

  return (
    <div className="p-4">
      <Link href="/interfaceUtilisateur/mesMessages/liste" className="text-blue-600 underline text-sm">
        ← Retour à la liste
      </Link>

      <Card className="mt-4">
        <CardContent className="space-y-4 pt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Détails du message</h2>
            <Badge variant={message.vu ? 'default' : 'outline'}>
              {message.vu ? 'Vu' : 'Non lu'}
            </Badge>
          </div>

          <div className="text-sm text-gray-600">
            <p><strong>De :</strong> {message.sender.nom}</p>
            <p><strong>À :</strong> {message.receiver?.nom ?? '—'}</p>
          </div>

          <div className="text-gray-800 whitespace-pre-wrap hover:text-blue-600">
            <Linkify options={{ target: '_blank', rel: 'noopener noreferrer' }}>
              {message.contenu}
            </Linkify>
          </div>

          {message.pieceJointeUrl && (
            <div>
              📎{' '}
              <a
                href={message.pieceJointeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Voir la pièce jointe
              </a>
            </div>   
          )}

          <div className="text-sm text-gray-500">
            {message.projet && <p><strong>Projet :</strong> {message.projet.nom}</p>}
            {message.tache && <p><strong>Tâche :</strong> {message.tache.titre}</p>}
            {message.planning && <p><strong>Planning :</strong> #{message.planning.id}</p>}
          </div>

          <div className="text-xs text-gray-400 mt-2">
            Envoyé le : {new Date(message.createdAt).toLocaleString('fr-FR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
