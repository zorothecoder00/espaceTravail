"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link" 
import ReactMarkdown from "react-markdown"   

type User = {
  id: number
  nom: string
  prenom: string
}

type TacheUtilisateur = {
  id: number
  user: User
}

type Projet = {
  id: number
  nom: string
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

type TacheDetail = {
  id: number
  titre: string
  description: string | null
  deadline: string | null
  statut: string
  projet: Projet
  TacheUtilisateur: TacheUtilisateur[]
  notifications: Notification[]
  messages: Message[]
}

export default function TacheDetailPage() {
  const { id } = useParams() as { id: string }
  const [tache, setTache] = useState<TacheDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    async function fetchTache() {
      try {
        const res = await fetch(`/api/taches/${id}`)
        if (!res.ok) {
          throw new Error("Erreur récupération tâche")
        }
        const json = await res.json()
        setTache(json.data)

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTache()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />

  if (!tache) return <p className="text-red-600">Tâche introuvable</p>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Détail de la tâche</h1>
      <Link href="/admin/taches/liste" className="text-blue-600 hover:underline mb-4 block">
        ← Retour à la liste des tâches
      </Link>
  
      <Card>
        <CardContent>          
          <p><strong>Titre :</strong> {tache.titre}</p>
          <div>
            <strong>Description :</strong>  
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
              <ReactMarkdown>
                {tache.description ?? "_Aucune description_"}
              </ReactMarkdown>
            </div>
          </div>
          <p><strong>Statut :</strong> {tache.statut}</p>
          <p><strong>Deadline :</strong> {tache.deadline ? new Date(tache.deadline).toLocaleDateString("fr-FR") : "Non définie"}</p>
          <p><strong>Projet :</strong> {tache.projet.nom}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Utilisateurs assignés</h2>
          {tache.TacheUtilisateur.length === 0 ? (
            <p>Aucun utilisateur assigné</p>
          ) : (
            <ul className="list-disc pl-5">
              {tache.TacheUtilisateur.map((tu) => (
                <li key={tu.user.id}>{tu.user.nom} {tu.user.prenom}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Notifications liées</h2>
          {tache.notifications.length === 0 ? (
            <p>Aucune notification</p>
          ) : (
            <ul className="list-disc pl-5">
              {tache.notifications.map((notif) => (
                <li key={notif.id}>{notif.message} {notif.vu ? "(Vu)" : "(Non vu)"}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Messages associés</h2>
          {tache.messages.length === 0 ? (
            <p>Aucun message</p>
          ) : (
            <ul className="list-disc pl-5">
              {tache.messages.map((msg) => (
                <li key={msg.id}>
                  <p>{msg.contenu}</p>
                  <small className="text-gray-500">{new Date(msg.createdAt).toLocaleString("fr-FR")}</small>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )

}
