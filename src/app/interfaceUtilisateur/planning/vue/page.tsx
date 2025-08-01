'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
     
type TachePlanning = {
  id: number
  titre: string
  heure: string
  objectif?: string
  resultatAttendu?: string
  etat?: boolean
  commentaires?: string
  priorite?: boolean
}      
type Planning = {
  id: number
  titre: string    
  date: string
  slug: string
  taches: TachePlanning[]
  responsable?: {
    nom: string
    prenom: string
  }
}

export default function CalendrierPage() {
  
  const [plannings, setPlannings] = useState<Planning[]>([])

  useEffect(() => {
    fetch('/api/planning')
      .then((res) => res.json())
      .then((data) => setPlannings(data.data))
  }, [])

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <Link href="/interfaceUtilisateur/dashboard" className="text-blue-600 hover:underline">
          ← Retour au Dashboard
        </Link>
        <Link href="/interfaceUtilisateur/planning/new" className="text-blue-600 hover:underline">
          + Créer un nouveau Planning
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Planning Journalier</h1>

      {plannings.map((plan) => (
        <div key={plan.id} className="mb-10 border border-gray-400 rounded overflow-hidden shadow-sm">
          <div className="bg-gray-100 px-4 py-2 font-semibold text-sm border-b">
            📅 {formatDate(plan.date)} — {plan.titre}
          </div>

          <table className="w-full text-sm">
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
              {plan.taches?.length > 0 ? (
                plan.taches.map((tache) => (
                  <tr key={tache.id}>
                    <td className="p-2 border">{tache.heure}</td>
                    <td className="p-2 border">{tache.titre}</td>
                    <td className="p-2 border">{tache.objectif || '--'}</td>
                    <td className="p-2 border">{tache.resultatAttendu || '--'}</td>
                    <td className="p-2 border">
                      {plan.responsable
                      ? `${plan.responsable.prenom} ${plan.responsable.nom}`
                      : '--'}
                    </td>
                    <td className="p-2 border">
                      {tache.etat ? '✅ Terminé' : '⏳ En cours'}
                    </td>
                    <td className="p-2 border">
                      {tache.priorite ? '🔥 Élevée' : '⚠️ Moyenne'}
                    </td>
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
          {/* Liens pour voir/modifier le planning */}
          <div className="flex gap-4 p-4 border-t bg-gray-50">
            <Link
              href={`/interfaceUtilisateur/planning/vue/${plan.id}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              Voir le détail
            </Link>
            <Link
              href={`/interfaceUtilisateur/planning/edit/${plan.id}`}
              className="text-green-600 hover:underline font-semibold"
            >
              Modifier
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
