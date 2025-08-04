"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"  
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

type User = {
  id: number
  nom: string
  prenom: string
}

type Departement = {
  id: number
  nom: string
}

type Projet = {
  id: number
  nom: string
}

type Partage = {
  id: number
  user?: User | null
  departement?: Departement | null
  projet?: Projet | null
  partageur: User
  datePartage: string
}

type Notification = {
  id: number
  message: string
  vu: boolean
  dateNotification: string
}

type DocumentDetail = {
  id: number
  titre: string
  description: string
  fichier?: string | null
  createdAt: string
  updatedAt: string
  partages: Partage[]
  notifications: Notification[]
}

export default function DocumentDetailPage() {
  const { id } = useParams() as { id: string }
  const [document, setDocument] = useState<DocumentDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const fetchDocument = async () => {
      try {
        const res = await fetch(`/api/documents/${id}`)
        if (!res.ok) {
          throw new Error("Erreur lors du chargement")
        }
        const json = await res.json()
        setDocument(json.data)
      } catch (error) {
        console.error("Erreur :", error)
      } finally {
        setLoading(false)
      }
    }
  
    fetchDocument()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />

  if (!document) return <p className="text-red-600">Document introuvable ou accès refusé</p>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Détail du document</h1>

      <Link href={`/notifications/${document.notifications[0]?.id} `} className="text-blue-600 hover:underline block mb-4">
        ← Retour à la notification
      </Link>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <p><strong>Titre :</strong> {document.titre}</p>
          <p><strong>Description :</strong> {document.description || "Aucune description"}</p>
          {document.fichier && (
            <p>
              <strong>Fichier :</strong>{" "}
              <a href={document.fichier} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Voir le fichier
              </a>
            </p>
          )}
          <p><strong>Créé le :</strong> {new Date(document.createdAt).toLocaleDateString("fr-FR")}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4 space-y-2">
          <h2 className="text-lg font-semibold">Partages</h2>
          {document.partages.length === 0 ? (
            <p>Aucun partage</p>
          ) : (
            <ul className="list-disc pl-5">
              {document.partages.map((p) => (
                <li key={p.id}>
                  {p.user
                    ? `🔹 Partagé à ${p.user.prenom} ${p.user.nom}`
                    : p.departement
                    ? `🏢 Partagé au département ${p.departement.nom}`
                    : p.projet
                    ? `📁 Partagé au projet ${p.projet.nom}`
                    : "Partage inconnu"}
                  {" "}par {p.partageur.prenom} {p.partageur.nom} le{" "}
                  {new Date(p.datePartage).toLocaleDateString("fr-FR")}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4 space-y-2">
          <h2 className="text-lg font-semibold">Notifications liées</h2>
          {document.notifications.length === 0 ? (
            <p>Aucune notification</p>
          ) : (
            <ul className="list-disc pl-5">
              {document.notifications.map((n) => (
                <li key={n.id}>
                  {n.message} –{" "}
                  {n.vu ? "✔️ Vue" : "❗ Non vue"} –{" "}
                  {new Date(n.dateNotification).toLocaleString("fr-FR")}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
