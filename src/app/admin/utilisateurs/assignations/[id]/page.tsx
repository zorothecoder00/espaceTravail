'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
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

interface Projet {
  id: number
  nom: string
  taches: Tache[]
}

interface Utilisateur {
  id: number
  nom: string
  projets: Projet[]
  taches: Tache[] // tâches hors projet
}

export default function AssignationsUtilisateurPage() {
  const params = useParams()
  const id = params?.id

  const [utilisateur, setUtilisateur] = useState<Utilisateur | null>(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const fetchAssignations = async () => {
      if (!id) return

      try {
        const res = await fetch(`/api/assignations/${id}`)
        if (!res.ok) {
          const err = await res.json()
          setMessage(err.message || 'Erreur lors du chargement')
          setLoading(false)
          return
        }
        const json = await res.json()
        setUtilisateur(json.data)
      } catch (error) {
        console.error('Erreur fetch :', error)
        setMessage('Erreur réseau ou serveur')
      } finally {
        setLoading(false)
      }
    }

    fetchAssignations()
  }, [id])

  if (loading) return <div className="p-6">Chargement...</div>

  if (message) return <div className="p-6 text-red-600">{message}</div>

  if (!utilisateur) return null

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Assignations de {utilisateur.nom}</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📁 Projets assignés</h2>
        {utilisateur.projets.length === 0 ? (
          <p className="text-gray-500">Aucun projet assigné.</p>
        ) : (
          utilisateur.projets.map((projet) => (
            <div key={projet.id} className="mb-4 border rounded p-4">
              <h3 className="font-medium">📂 {projet.nom}</h3>
              {projet.taches.length === 0 ? (
                <p className="ml-4 text-sm text-gray-500">Aucune tâche dans ce projet</p>
              ) : (
                <ul className="ml-4 list-disc text-sm mt-1">
                  {projet.taches.map((tache) => (
                    <li key={tache.id}>
                      📝 {tache.titre}{' '}
                      <span className="italic text-gray-500">({tache.statut})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧾 Tâches assignées hors projet</h2>
        {utilisateur.taches.length === 0 ? (
          <p className="text-gray-500">Aucune tâche assignée directement.</p>
        ) : (
          <ul className="ml-4 list-disc text-sm">
            {utilisateur.taches.map((tache) => (
              <li key={tache.id}>
                📝 {tache.titre}{' '}
                <span className="italic text-gray-500">({tache.statut})</span>
                {tache.projet ? (
                  <span className="text-sm text-gray-400"> - Projet: {tache.projet.nom}</span>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        <Link href="/admin/utilisateurs/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des utilisateurs
        </Link>
      </div>
    </div>
  )
}
