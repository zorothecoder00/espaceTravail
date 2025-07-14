'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Statut } from '@prisma/client'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

// Types
type Utilisateur = {
  id: number
  nom: string
  prenom: string
}

type Departement = {
  id: number
  nom: string
}

type Tache = {
  id: number
  titre: string
  statut: Statut
}

type Document = {
  id: number
  titre: string
}

type Notification = {
  id: number
  message: string
}

type Message = {
  id: number
  contenu: string
  sender: Utilisateur
}

type Projet = {
  id: number
  nom: string
  description?: string
  statut: Statut
  deadline: string // ISO string
  departement?: Departement
  chefProjet: Utilisateur
  membres: { user: Utilisateur }[]
  taches: Tache[]
  partages: Document[]
  notifications: Notification[]
  messages: Message[]
}

export default function ProjetDirigePage() {
  const { id } = useParams() as { id: string }
  const [projet, setProjet] = useState<Projet | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjet = async () => {
      try {
        const res = await fetch(`/api/mesProjetsDiriges/${id}`)
        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.message || 'Erreur inconnue')
        }

        setProjet(data.data)
      } catch (err) {
        console.error('Erreur inconnue', err)
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProjet()
    }
  }, [id])

  if (loading) {
    return (
      <div className="space-y-4 p-4">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-40 w-full" />
      </div>
    )
  }

  if (error) return <p className="text-red-500">Erreur : {error}</p>
  if (!projet) return <p>Aucun projet trouvé.</p>

  function couleurStatut(s: Statut) {
    switch (s) {
      case Statut.EN_COURS:
        return 'default'
      case Statut.TERMINE:
        return 'secondary'
      case Statut.ATTENTE:
      default:
        return 'outline'
    }
  }

  return (
    <div className="p-4 space-y-6">
      {/* Détails du projet */}
      <Card>
        <CardContent className="pt-4 space-y-2">
          <h1 className="text-2xl font-bold">{projet.nom}</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Statut :</span>
            <Badge variant={couleurStatut(projet.statut)}>{projet.statut}</Badge>
          </div>
          <p><strong>Deadline :</strong> {new Date(projet.deadline).toLocaleDateString()}</p>
          <p><strong>Description :</strong> {projet.description || 'Aucune'}</p>
          {projet.departement && (
            <p><strong>Département :</strong> {projet.departement.nom}</p>
          )}
          <p><strong>Chef de projet :</strong> {projet.chefProjet.prenom} {projet.chefProjet.nom}</p>
        </CardContent>
      </Card>

      {/* Membres */}
      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Membres</h2>
          {projet.membres.length === 0 ? (
            <p>Aucun membre.</p>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {projet.membres.map((membre, index) => (
                <li key={index}>
                  {membre.user.prenom} {membre.user.nom}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Tâches */}
      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Tâches</h2>
          {projet.taches.length === 0 ? (
            <p>Aucune tâche.</p>
          ) : (
            <ul className="space-y-2">
              {projet.taches.map((tache) => (
                <li key={tache.id} className="flex items-center justify-between">
                  <span>{tache.titre}</span>
                  <Badge variant="secondary">{tache.statut}</Badge>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Documents partagés */}
      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Documents partagés</h2>
          {projet.partages.length === 0 ? (
            <p>Aucun document partagé.</p>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {projet.partages.map((doc) => (
                <li key={doc.id}>{doc.titre}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Messages */}
      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          {projet.messages.length === 0 ? (
            <p>Aucun message.</p>
          ) : (
            <ul className="space-y-2">
              {projet.messages.map((msg) => (
                <li key={msg.id}>
                  <p className="text-sm text-gray-600">
                    <strong>{msg.sender.prenom} {msg.sender.nom}</strong> : {msg.contenu}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Bouton de retour */}
      <div className="mt-6">
        <Link href="/interfaceUtilisateur/mesProjetsDiriges" className="text-blue-600 hover:underline">
          ← Retour à mes projets
        </Link>
      </div>
    </div>
  )
}
