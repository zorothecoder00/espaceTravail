   "use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Projet = {
  id: number
  nom: string
}

type TacheDetail = {
  id: number
  titre: string
  description: string | null
  deadline: string | null
  statut: string
  projet: Projet
}

export default function CalendrierTacheDetail() {
  const { id } = useParams() as { id: string }
  const [tache, setTache] = useState<TacheDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    async function fetchTache() {
      try {
        const res = await fetch(`/api/calendrier/${id}`)
        if (!res.ok) throw new Error("Erreur récupération tâche")
        const json = await res.json()
        setTache(json.data)
      } catch (error) {
        console.error("Erreur :", error)
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
      <h1 className="text-2xl font-bold">Détail de la tâche (Calendrier)</h1>
      <Link href="/admin/calendrier" className="text-blue-600 hover:underline block mb-4">
        ← Retour au calendrier
      </Link>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <p><strong>Titre :</strong> {tache.titre}</p>
          <p><strong>Description :</strong> {tache.description || "Aucune description"}</p>
          <p><strong>Deadline :</strong> {tache.deadline ? new Date(tache.deadline).toLocaleString("fr-FR") : "Non définie"}</p>
          <p><strong>Statut :</strong> <Badge>{tache.statut}</Badge></p>
          <p><strong>Projet :</strong> {tache.projet?.nom || "Aucun"}</p>
        </CardContent>
      </Card>
    </div>
  )
}
