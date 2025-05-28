'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Tache = {
  id: string
  titre: string
  description: string
  projet?: {
    nom: string
  } | null
  statut: string
  deadline?: string | null
}

export default function ListeTaches() {
  const [taches, setTaches] = useState<Tache[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const fetchTaches = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/taches')
      const data = await res.json()
      setTaches(data)
    } catch (err) {
      setError('Erreur lors du chargement des tâches.')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTaches()
  }, [])

  const handleDelete = async (id: string) => {
    const confirmed = confirm('Voulez-vous vraiment supprimer cette tâche ?')
    if (!confirmed) return

    const res = await fetch(`/api/taches/${id}`, { method: 'DELETE' })
    if (res.ok) {
      fetchTaches()
    } else {
      alert('Échec de la suppression.')
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Liste des tâches</h2>
        <Link
          href="/admin/taches/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nouvelle tâche
        </Link>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Chargement...</p>
      ) : taches.length === 0 ? (
        <p>Aucune tâche trouvée.</p>
      ) : (
        <table className="w-full border bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Titre</th>
              <th className="p-2 text-left">Projet</th>
              <th className="p-2 text-left">Statut</th>
              <th className="p-2 text-left">Deadline</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taches.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-2">{t.titre}</td>
                <td className="p-2">{t.projet?.nom || '—'}</td>
                <td className="p-2">{t.statut}</td>
                <td className="p-2">
                  {t.deadline ? new Date(t.deadline).toLocaleString() : '—'}
                </td>
                <td className="p-2 space-x-2">
                  <Link
                    href={`/admin/taches/${t.id}/edit`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
