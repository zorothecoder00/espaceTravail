'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

type Utilisateur = {
  id: number  
  nom: string
  prenom: string
}

type Projet = {
  id: number
  nom: string
}

type Notification = {
  id: number
  contenu: string
  date: string
}

type Message = {
  id: number
  contenu: string
  date: string
}

type TacheDetail = {
  id: number
  titre: string
  description: string | null
  deadline: string | null
  statut: string
  projet: Projet
  TacheUtilisateur: { 
    user: Utilisateur
    statutPersonnel?: string
    dateDebut?: string
    dateFin?: string 
  }[]
  notifications: Notification[]
  messages: Message[]
}

export default function TacheDetailPage() {
  const { id } = useParams() as { id: string }
  const [tache, setTache] = useState<TacheDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return

    const fetchTache = async () => {
      try {
        const res = await fetch(`/api/mesTaches/${id}`)
        if (!res.ok) {
          if (res.status === 401) {
            setError('Non autorisé. Veuillez vous connecter.')
          } else if (res.status === 403) {
            setError("Vous n'êtes pas assigné à cette tâche.")
          } else if (res.status === 404) {
            setError('Tâche introuvable.')
          } else {
            setError('Erreur lors de la récupération.')
          }
          return
        }

        const data = await res.json()
        setTache(data.data)
      } catch (err) {
        console.error(err)
        setError('Erreur réseau.')
      } finally {
        setLoading(false)
      }
    }

    fetchTache()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />
  if (error) return <p className="text-red-600">{error}</p>
  if (!tache) return <p className="text-red-600">Aucune donnée trouvée.</p>

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/interfaceUtilisateur/mesTaches/liste"
        className="text-sm text-blue-600 underline"
      >
        ← Retour à la liste des tâches
      </Link>

      <h1 className="text-2xl font-bold">Détail de la tâche</h1>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <p><strong>Titre :</strong> {tache.titre}</p>
          <p><strong>Description :</strong> {tache.description || 'Aucune description'}</p>
          <p><strong>Deadline :</strong> {tache.deadline ? new Date(tache.deadline).toLocaleString('fr-FR') : 'Non définie'}</p>
          <p><strong>Statut :</strong> <Badge>{tache.statut}</Badge></p>
          <p><strong>Projet :</strong> {tache.projet?.nom || 'Aucun'}</p>
          <p>
            <strong>Utilisateurs assignés :</strong>{' '}
            {tache.TacheUtilisateur.length === 0 ? (
              'Aucun'
            ) : (
              tache.TacheUtilisateur.map((a, i) => {
                const debut = a.dateDebut ? new Date(a.dateDebut).toLocaleDateString('fr-FR') : '-'
                const fin = a.dateFin ? new Date(a.dateFin).toLocaleDateString('fr-FR') : '-'
                return (
                  <span key={a.user.id}>
                    {a.user.prenom} {a.user.nom} (
                    statut: {a.statutPersonnel || '-'}, début: {debut}, fin: {fin}
                    ){i < tache.TacheUtilisateur.length - 1 ? ', ' : ''}
                  </span>
                )
              })    
            )}
          </p>

          <p><strong>Notifications :</strong> {tache.notifications.length}</p>
          <p><strong>Messages :</strong> {tache.messages.length}</p>
        </CardContent>
      </Card>
    </div>
  )
}
