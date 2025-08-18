'use client'

import { useEffect, useState, useRef } from 'react'
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
  const [commentairesLocaux, setCommentairesLocaux] = useState<Record<number, string>>({})
  
  // Ref pour stocker les timers par tâche
  const timersRef = useRef<Record<number, NodeJS.Timeout>>({})

  // 🔹 Récupération des plannings et initialisation des commentaires
  useEffect(() => {
    fetch('/api/planning')
      .then((res) => res.json())
      .then((data) => {
        setPlannings(data.data)

        // Initialise les commentaires locaux
        const init: Record<number, string> = {}
        data.data.forEach((plan: Planning) => {
          plan.taches.forEach((t: TachePlanning) => {
            init[t.id] = t.commentaires ?? ""
          })
        })
        setCommentairesLocaux(init)
      })
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

  const updateTache = async (tacheId: number, updates: Partial<TachePlanning>) => {
    try {
      const res = await fetch(`/api/planning/tache/${tacheId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      })
      const data = await res.json()
      if (res.ok) {
        setPlannings((prev) =>
          prev.map((plan) => ({
            ...plan,
            taches: plan.taches.map((t) =>
              t.id === tacheId ? { ...t, ...data.data } : t
            ),
          }))
        )
      } else {
        console.error('Erreur update tache:', data)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // 🔹 Fonction pour gérer le changement de commentaire avec debounce
  const handleCommentChange = (tacheId: number, value: string) => {
    // Met à jour le state local immédiatement
    setCommentairesLocaux((prev) => ({
      ...prev,
      [tacheId]: value,
    }))

    // Si un timer existait pour cette tâche → on l'annule
    if (timersRef.current[tacheId]) {
      clearTimeout(timersRef.current[tacheId])
    }

    // Nouveau timer pour sauvegarde après 500ms d'inactivité
    timersRef.current[tacheId] = setTimeout(() => {
      const tache = plannings.flatMap((p) => p.taches).find((t) => t.id === tacheId)
      if (tache && tache.commentaires !== value) {
        updateTache(tacheId, { commentaires: value })
      }
      // Supprime le timer pour cette tâche
      delete timersRef.current[tacheId]
    }, 500)
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

          <div className="overflow-x-auto">
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-10" />
                <col className="w-35" />
                <col className="w-35" />
                <col className="w-35" />

                <col className="w-20" />
                <col className="w-20" />
                <col className="w-45" />
              </colgroup>
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-2 border">🕐 Heure</th>
                  <th className="p-2 border">🗂️ Tâche prévue</th>
                  <th className="p-2 border">🎯 Objectif</th>
                  <th className="p-2 border">📌 Résultat attendu</th>

                  <th className="p-2 border">📊 État</th>    
                  <th className="p-2 border">⚠️ Priorité</th>
                  <th className="p-2 border">📝 Commentaires</th>
                </tr>
              </thead>
              <tbody>
                {plan.taches?.length > 0 ? (
                  plan.taches.map((tache) => (
                    <tr key={tache.id} className="align-top">
                      <td className="p-3 border text-xs">{tache.heure}</td>
                      <td className="p-3 border">
                        <div className="line-clamp-2" title={tache.titre}>{tache.titre}</div>
                      </td>
                      <td className="p-3 border">
                        <div className="line-clamp-2" title={tache.objectif ?? '--'}>{tache.objectif ?? '--'}</div>
                      </td>
                      <td className="p-3 border">
                        <div className="line-clamp-2" title={tache.resultatAttendu ?? '--'}>{tache.resultatAttendu ?? '--'}</div>
                      </td>
                    
                      <td className="p-3 border">
                        <button
                          onClick={() => updateTache(tache.id, { etat: !tache.etat })}
                          className="px-2 py-1 border rounded text-xs w-full"
                        >
                          {tache.etat ? '✅ OK' : '⏳ En cours'}
                        </button>
                      </td>
                      <td className="p-3 border">
                        <select
                          value={tache.priorite ? 'haute' : 'moyenne'}
                          onChange={(e) => updateTache(tache.id, { priorite: e.target.value === 'haute' })}
                          className="px-2 py-1 text-xs w-full border rounded"
                        >
                          <option value="moyenne">⚠️ Moyenne</option>
                          <option value="haute">🔥 Élevée</option>
                        </select>
                      </td>
                      <td className="p-3 border">
                        <textarea
                          value={commentairesLocaux[tache.id] ?? ''}
                          onChange={(e) => handleCommentChange(tache.id, e.target.value)}
                          className="border p-2 w-full text-xs resize-none"
                          placeholder="Commentaire..."
                          rows={2}
                        />
                      </td>
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
