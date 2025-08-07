// src/app/admin/messages/liste/[id]/page.tsx

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type MessageDetail = {
  id: number
  contenu: string
  createdAt: string
  sender: {
    id: number
    nom: string
  }
  receiver: {
    id: number
    nom: string
  }
  projet?: {
    id: number
    nom: string
  } | null
  tache?: {
    id: number
    titre: string
  } | null
}

export default async function Page({ params }: { params: { id: string } }) {
  const messageId = params.id

  const res = await fetch(`/api/messages/${messageId}`, {
    cache: 'no-store',
  })

  if (!res.ok) return notFound()

  const { data: message }: { data: MessageDetail } = await res.json()

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link
        href="/admin/messages/liste"
        className="text-sm text-blue-600 hover:underline block mb-4"
      >
        ← Retour à la liste des messages
      </Link>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">Message #{message.id}</h1>

          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <span>Envoyé le {new Date(message.createdAt).toLocaleString('fr-FR')}</span>
            <Badge variant="default">De : {message.sender.nom}</Badge>
            <Badge variant="secondary">À : {message.receiver.nom}</Badge>
            {message.projet && (
              <Badge variant="outline">Projet : {message.projet.nom}</Badge>
            )}
            {message.tache && (
              <Badge variant="outline">Tâche : {message.tache.titre}</Badge>
            )}
          </div>

          <p className="text-gray-800 whitespace-pre-wrap">{message.contenu}</p>
        </CardContent>
      </Card>
    </div>
  )
}
