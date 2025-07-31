'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
      
type Planning = {
  id: number
  titre: string    
  date: string
  slug: string
  taches: string[]
  objectif?: string
  resultatAttendu?: string
  etat?: boolean
  commentaires?: string
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
        <Link
          href="/interfaceUtilisateur/dashboard"
          className="text-blue-600 hover:underline"
        >
          ← Retour au Dashboard 
        </Link>

        <Link
          href="/interfaceUtilisateur/planning/new"
          className="text-blue-600 hover:underline"
        >
          + Créer un nouveau Planning
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Planning Journalier</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Titre</th>
            <th className="p-2 border">Objectif</th>
            <th className="p-2 border">Résultat Attendu</th>
            <th className="p-2 border">Tâches</th>
            <th className="p-2 border">Responsable</th>
            <th className="p-2 border">Commentaires</th>
            <th className="p-2 border">État</th>
          </tr>
        </thead>   
        <tbody>
          {plannings.map((plan) => (
            <tr key={plan.id}>
              <td className="p-2 border whitespace-nowrap">
                {formatDate(plan.date)}
              </td>
              <td className="p-2 border text-green-500 hover:underline">
                <Link href = {`/interfaceUtilisateur/planning/vue/${plan.id}`}>
                  {plan.titre}
                </Link>
              </td>
              <td className="p-2 border">{plan?.objectif || '--'}</td>
              <td className="p-2 border">{plan?.resultatAttendu || '--'}</td>
              <td className="p-2 border">
                <ul className="list-disc list-inside space-y-1">
                  {plan?.taches?.length > 0 ? (
                    plan.taches.map((tache, idx) => <li key={idx}>{tache}</li>)
                  ) : (
                    <li>--</li>
                  )}
                </ul>
              </td>
              <td className="p-2 border">
                {plan.responsable
                  ? `${plan.responsable.prenom} ${plan.responsable.nom}`
                  : '--'
                }
              </td>
              <td className="p-2 border">{plan?.commentaires || '--'}</td>
              <td className="p-2 border">
                {plan?.etat ? '✅ Terminé' : '⏳ En cours'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
