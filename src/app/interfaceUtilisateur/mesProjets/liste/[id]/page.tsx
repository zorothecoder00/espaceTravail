'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

type Utilisateur = {
  id: number
  nom: string
  prenom: string
}

type Tache = {
  id: number
  titre: string
  statut: string
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

type ProjetDetail = {
  id: number
  nom: string
  description?: string
  chefProjet: Utilisateur
  departement: { id: number; nom: string }
  membres: { user: Utilisateur }[]
  taches: Tache[]
  partages: Document[]
  notifications: Notification[]
  messages: Message[]
}

export default function MesProjetsDetailPage() {
  const { id } = useParams() as { id: string }
  const [projet, setProjet] = useState<ProjetDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjet = async () => {
      try {
        const res = await fetch(`/api/mesProjets/${id}`)
        if (!res.ok) {
          if (res.status === 401) {
            alert("Session expirée. Veuillez vous reconnecter.")
            window.location.href = '/login'
            return
          } else if (res.status === 403) {
            alert("Accès refusé à ce projet.")
            return
          }
          throw new Error("Erreur serveur")
        }

        const json = await res.json()
        setProjet(json.data)
      } catch (error) {
        console.error("Erreur :", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchProjet()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />
  if (!projet) return <p className="text-red-600">Projet introuvable</p>

  return (
    <div className="p-6 space-y-4">
      <Link href="/interfaceUtilisateur/mesProjets/liste" className="text-blue-600 underline">
        ← Retour à mes projets
      </Link>

      <h1 className="text-2xl font-bold">{projet.nom}</h1>
      <p><strong>Description :</strong> {projet.description || "Aucune description"}</p>
      <p><strong>Département :</strong> {projet.departement.nom}</p>
      <p><strong>Chef de projet :</strong> {projet.chefProjet.prenom} {projet.chefProjet.nom}</p>

      <Card>
        <CardContent className="pt-4 space-y-2">
          <h2 className="font-semibold text-lg">Membres</h2>
          <ul className="list-disc ml-5">
            {projet.membres.map(m => (
              <li key={m.user.id}>{m.user.prenom} {m.user.nom}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4 space-y-2">
          <h2 className="font-semibold text-lg">Tâches</h2>
          <ul className="list-disc ml-5">
            {projet.taches.map(t => (
              <li key={t.id}>
                {t.titre} - <Badge>{t.statut}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
