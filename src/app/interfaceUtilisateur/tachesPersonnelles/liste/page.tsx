'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

type Tache = {
  id: number
  titre: string
  date: string
  superviseur: {
    nom: string
  } | null
}

export default function TachesPersonnellesPage() {
  const [taches, setTaches] = useState<Tache[]>([])
  const [search, setSearch] = useState('')
  const [sortField] = useState<'titre'>('titre') // fix: plus de select, donc champ fixe
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const fetchTaches = useCallback(async () => {
    setLoading(true)
    setMessage('')
    try {
      const res = await fetch(
        `/api/tachesPersonnelles?search=${encodeURIComponent(search)}&sortField=${sortField}&sortOrder=${sortOrder}&page=${page}`
      )
      const data = await res.json()
      setTaches(data.data)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error)
    } finally {
      setLoading(false)
    }
  }, [search, sortField, sortOrder, page])

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchTaches()
    }, 400)
    return () => clearTimeout(delay)
  }, [fetchTaches])

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm('Confirmer la suppression ?')
    if (!confirmDelete) return

    try {
      const res = await fetch(`/api/tachesPersonnelles/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setMessage('Tâche supprimée avec succès ✅')
        fetchTaches()
      } else {
        setMessage('❌ Erreur lors de la suppression')
      }
    } catch (error) {
      console.error('Erreur suppression :', error)
      setMessage('❌ Une erreur est survenue')
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tâches personnelles</h1>
        <Link
          href="/interfaceUtilisateur/dashboard"
          className="text-sm text-blue-600 underline"
        >
          Retour au dashboard
        </Link>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Rechercher par titre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <Link
          href="/interfaceUtilisateur/tachesPersonnelles/new"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Nouvelle tâche
        </Link>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <label className="text-sm">Ordre :</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="border p-1 rounded"
        >
          <option value="asc">Croissant (A-Z)</option>
          <option value="desc">Décroissant (Z-A)</option>
        </select>
      </div>

      {message && <p className="text-green-600 mb-4">{message}</p>}
      {loading ? (
        <p>Chargement des tâches...</p>
      ) : (
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Titre</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Superviseur</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taches.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  Aucune tâche trouvée.
                </td>
              </tr>
            ) : (
              taches.map((tache) => (
                <tr key={tache.id}>
                  <td className="border p-2">{tache.titre}</td>
                  <td className="border p-2">
                    {new Date(tache.date).toLocaleDateString()}
                  </td>
                  <td className="border p-2">
                    {tache.superviseur ? tache.superviseur.nom : 'Non défini'}
                  </td>
                  <td className="border p-2 space-x-2">
                    <Link
                      href={`/tachesPersonnelles/liste/${tache.id}`}
                      className="text-blue-600 underline"
                    >
                      Détails
                    </Link>
                    <button
                      onClick={() => handleDelete(tache.id)}
                      className="text-red-600 underline"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              page === i + 1 ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
