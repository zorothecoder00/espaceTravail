'use client'

import { useEffect, useState, useCallback } from 'react'

interface Projet {     
  id: number
  nom: string
  deadline: string // datetime -> string en TS pour simplifier
  statut: string
  description?: string
  departement: { nom: string }
}

export default function ListeProjetsPage() {
  const [projets, setProjets] = useState<Projet[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProjets = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/projets?search=${search}&page=${page}`)
      const data = await res.json()
      setProjets(data.projets)
      setTotalPages(data.totalPages || 1)
    } catch {
      setError('Erreur lors du chargement des projets.')
    }
    setLoading(false)
  }, [search, page])

  useEffect(() => {
    fetchProjets()
  }, [fetchProjets])

  const handleDelete = async (id: number) => {
    const confirmed = confirm('Voulez-vous vraiment supprimer ce projet ?')
    if (!confirmed) return

    const res = await fetch(`/api/projets/${id}`, { method: 'DELETE' })
    if (res.ok) {
      fetchProjets()
    } else {
      alert('Échec de la suppression.')
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des projets</h1>

      <input
        type="text"
        placeholder="Rechercher un projet..."
        value={search}
        onChange={e => {
          setSearch(e.target.value)
          setPage(1)
        }}
        className="mb-4 p-2 border w-full rounded"
      />

      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Chargement...</p>
      ) : projets.length === 0 ? (
        <p>Aucun projet trouvé.</p>
      ) : (
        <table className="w-full border-collapse border rounded bg-white shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Nom</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-left">Département</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projets.map(projet => (
              <tr key={projet.id}>
                <td className="border p-2">{projet.nom}</td>
                <td className="border p-2">{projet.description || '—'}</td>
                <td className="border p-2">{projet.departement.nom}</td>
                <td className="border p-2 space-x-2">
                  <button
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => alert("Modification à venir")}
                  >
                    Modifier
                  </button>
                  <button
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => handleDelete(projet.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-4 flex justify-between">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <span>Page {page} / {totalPages}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  )
}
