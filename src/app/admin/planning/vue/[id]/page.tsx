'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type User = {     
  nom: string
  prenom: string
}

type Tache = {
  id: number
  titre: string
  heure: string
  etat?: boolean
  commentaires?: string
  resultatAttendu?: string
  objectif?: string
  priorite?: boolean
  responsable?: User
}

type Planning = {
  id: number
  titre: string
  date: string
  taches: Tache[]
  responsable?: User
}

export default function PlanningJournalier() {
  const { id } = useParams() as { id: string }
  const [planningData, setPlanningData] = useState<Planning | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPlanning = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/planning/${id}`)

        if (!res.ok) {
          setMessage('Erreur lors de la récupération')
          return
        }

        const data = await res.json()
        setPlanningData(data.data)
      } catch (error) {
        console.error('Erreur serveur', error)
        setMessage('Erreur serveur')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPlanning()
    }
  }, [id])

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  if (loading) return <p>Chargement...</p>
  if (message) return <p>{message}</p>
  if (!planningData) return <p>Aucun planning trouvé.</p>

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <Link href="/admin/planning/vue" className="text-blue-600 hover:underline">
          ← Retour sur la liste des Plannings
        </Link>
        <Link href="/admin/planning/new" className="text-blue-600 hover:underline">
          + Créer un nouveau Planning
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">
        Planning Journalier — {formatDate(planningData.date)}
      </h1>

      <div className="mb-6">
        <p><span className="font-semibold">Titre :</span> {planningData.titre}</p>
        <p>
          <span className="font-semibold">Responsable :</span>{' '}
          {planningData.responsable
            ? `${planningData.responsable.prenom} ${planningData.responsable.nom}`
            : '--'}
        </p>
      </div>

      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-2 border">🕐 Heure</th>
            <th className="p-2 border">🗂️ Tâche prévue</th>
            <th className="p-2 border">🎯 Objectif</th>
            <th className="p-2 border">📌 Résultat attendu</th>
            <th className="p-2 border">👤 Responsable</th>
            <th className="p-2 border">📊 État</th>
            <th className="p-2 border">⚠️ Priorité</th>
            <th className="p-2 border">📝 Commentaires</th>
          </tr>
        </thead>
        <tbody>
          {planningData.taches?.length > 0 ? (
            planningData.taches.map((tache) => (
              <tr key={tache.id}>
                <td className="p-2 border">{tache.heure}</td>
                <td className="p-2 border">{tache.titre}</td>
                <td className="p-2 border">{tache.objectif || '--'}</td>
                <td className="p-2 border">{tache.resultatAttendu || '--'}</td>
                <td className="p-2 border">
                  {tache.responsable
                    ? `${tache.responsable.prenom} ${tache.responsable.nom}`
                    : '--'}
                </td>
                <td className="p-2 border">{tache.etat ? '✅ Terminé' : '⏳ En cours'}</td>
                <td className="p-2 border">{tache.priorite ? '🔥 Élevée' : '⚠️ Moyenne'}</td>
                <td className="p-2 border">{tache.commentaires || '--'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 border italic text-gray-500" colSpan={8}>
                Aucune tâche prévue pour ce jour.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
