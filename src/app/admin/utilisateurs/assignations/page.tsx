'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Tache {  
  id: number
  titre: string
  statut: string
  deadline: string
  projet: {
    id: number
    nom: string
  } | null
}

interface ProjetAvecTaches {
  id: number
  nom: string
  taches: Tache[]
}

interface Utilisateur {
  id: number
  nom: string
  projets: ProjetAvecTaches[]
}

export default function AssignationsUtilisateursPage() {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAssignations = async () => {
      const res = await fetch('/api/assignations')   
      const data = await res.json()
      setUtilisateurs(data)
      setLoading(false)   
    }
    fetchAssignations()
  }, [])

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Assignations des utilisateurs</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        utilisateurs.map((user) => (
          <div key={user.id} className="mb-6 border rounded p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">{user.nom}</h2>
            {user.projets.length === 0 ? (
              <p className="text-gray-500">Aucun projet assigné.</p>
            ) : (
              user.projets.map((projet) => (
                <div key={projet.id} className="mb-3 ml-4">
                  <h3 className="font-medium">📁 {projet.nom}</h3>
                  {projet.taches.length === 0 ? (
                    <p className="ml-4 text-sm text-gray-500">Aucune tâche assignée</p>
                  ) : (
                    <ul className="ml-4 list-disc text-sm">
                      {projet.taches.map((tache) => (
                        <li key={tache.id}>
                          📝 {tache.titre} <span className="italic text-gray-500">({tache.statut})</span>
                        </li>     
                      ))}
                    </ul>
                  )}
                </div>
              ))
            )}
          </div>
        ))
      )}

      <div className="mt-6">
        <Link href="/admin/utilisateurs" className="text-blue-600 hover:underline">← Retour à la liste des utilisateurs</Link>
      </div>
    </div>
  )
}
