"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Departement = {
  id: number
  nom: string
}

type User = {
  id: number
  nom: string
  prenom: string
}

type Membre = {
  user: User
}

type Tache = {
  id: number
  titre: string
  statut: string
  deadline: string | null
}

type Partage = {
  id: number
  // adapte selon les champs utiles
}

type Notification = {
  id: number
  message: string
  vu: boolean
  dateNotification: string
}

type Message = {
  id: number
  contenu: string
  createdAt: string
}

type ProjetDetail = {
  id: number
  nom: string
  description?: string | null
  deadline?: string | null
  statut: string
  createdAt: string
  updatedAt: string
  departement: Departement | null
  chefProjet: User | null
  membres: Membre[]
  taches: Tache[]
  partages: Partage[]
  notifications: Notification[]
  messages: Message[]
}

export default function ProjetDetailPage() {
  const { id } = useParams() as { id: string }
  const [projet, setProjet] = useState<ProjetDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchProjet() {
      try {
        const res = await fetch(`/api/projets/${id}`)
        const json = await res.json()

        if (!res.ok) {
          setError(json.message || "Erreur inconnue")
          setProjet(null)
        } else {
          setProjet(json.data)  
          setError(null)
        }
      } catch (err) {
          console.error("Erreur serveur :", err)
          setError("Erreur lors de la récupération du projet")
          setProjet(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProjet()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />

  if (error) return <p className="text-red-600">{error}</p>

  if (!projet) return <p className="text-red-600">Projet introuvable</p>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Détail du projet</h1>
      <Link href="/admin/projets/liste" className="text-blue-600 hover:underline mb-4 block">
        ← Retour à la liste des projets
      </Link>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <p><strong>Nom :</strong> {projet.nom}</p>
          <p><strong>Description :</strong> {projet.description || "Aucune description"}</p>
          <p><strong>Deadline :</strong> {projet.deadline ? new Date(projet.deadline).toLocaleDateString("fr-FR") : "Aucune"}</p>
          <p><strong>Statut :</strong> <Badge>{projet.statut}</Badge></p>
          <p><strong>Département :</strong> {projet.departement?.nom || "Aucun"}</p>
          <p><strong>Chef de projet :</strong> {projet.chefProjet ? `${projet.chefProjet.nom} ${projet.chefProjet.prenom}` : "Aucun"}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Membres</h2>
          {projet.membres.length === 0 ? (
            <p>Aucun membre</p>
          ) : (
            <ul className="list-disc pl-5">
              {projet.membres.map(({ user }) => (
                <li key={user.id}>{user.nom} {user.prenom}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Tâches</h2>
          {projet.taches.length === 0 ? (
            <p>Aucune tâche</p>
          ) : (
            <ul className="list-disc pl-5">
              {projet.taches.map(t => (
                <li key={t.id}>
                  {t.titre} — {t.statut} {t.deadline ? `(📅 ${new Date(t.deadline).toLocaleDateString("fr-FR")})` : ""}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Tu peux aussi afficher partages, notifications, messages selon besoin */}

    </div>
  )
}
