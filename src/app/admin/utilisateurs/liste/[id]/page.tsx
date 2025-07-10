"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Departement = {
  id: number
  nom: string
}

type Projet = {
  id: number
  nom: string
}

type Tache = {
  id: number
  titre: string
  statut: string
  deadline: string | null
}

type PartageDocument = {
  id: number
  documentId: number
  datePartage: string
}

type Notification = {
  id: number
  message: string
  vu: boolean
  dateNotification: string
}

type UserDetail = {
  id: number
  nom: string
  prenom: string
  email: string
  role: string
  departement: Departement | null
  projetsDiriges: Projet[]
  projets: Projet[]
  taches: Tache[]
  partages: PartageDocument[]
  partagesEnTantQuePartageur: PartageDocument[]
  notifications: Notification[]
  notificationsEmises: Notification[]
}

export default function UserDetailPage() {
  const { id } = useParams() as { id: string }
  const [user, setUser] = useState<UserDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/utilisateurs/${id}`)
        const json = await res.json()
        setUser(json.data)
      } catch (error) {
        console.error("Erreur récupération utilisateur :", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  if (loading) {
    return <Skeleton className="w-full h-32 rounded-xl" />
  }

  if (!user) {
    return <p className="text-red-600">Utilisateur introuvable</p>
  }    

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Détail de l&rsquo;utilisateur</h1>
        <Link href="/admin/utilisateurs/liste" className="text-blue-600 hover:underline block mb-4">
          ← Retour à la liste des utilisateurs
        </Link>


      <Card>
        <CardContent className="space-y-2 pt-4">
          <p><strong>Nom :</strong> {user.nom} {user.prenom}</p>
          <p><strong>Email :</strong> {user.email}</p>
          <p><strong>Rôle :</strong> <Badge>{user.role}</Badge></p>
          <p><strong>Département :</strong> {user.departement?.nom || "Aucun"}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Projets dirigés</h2>
          {user.projetsDiriges.length === 0 ? (
            <p>Aucun</p>
          ) : (
            <ul className="list-disc pl-5">
              {user.projetsDiriges.map(p => (
                <li key={p.id}>{p.nom}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Projets assignés</h2>
          {user.projets.length === 0 ? (
            <p>Aucun</p>
          ) : (
            <ul className="list-disc pl-5">
              {user.projets.map(p => (
                <li key={p.id}>{p.nom}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Tâches assignées</h2>
          <p>{user.taches.length} tâche(s)</p>
          {user.taches.map(t => (
            <div key={t.id}>
              <p><strong>{t.titre}</strong> – {t.statut} {t.deadline ? `(📅 ${new Date(t.deadline).toLocaleDateString("fr-FR")})` : ''}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Documents</h2>
          <p>📥 Reçus : {user.partages.length}</p>
          <p>📤 Partagés : {user.partagesEnTantQuePartageur.length}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
            <p>🔔 Reçues : {user.notifications.length} notif(s)</p>
            <p>📣 Envoyées : {user.notificationsEmises.length} notif(s)</p>
        </CardContent>
      </Card>
    </div>
  )
}
