'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

interface Projet {    
  id: number
  nom: string
  deadline: string
  statut: string
  description?: string
  departement: { nom: string }
  chefProjet: { nom: string }
}

export default function ListeProjetsPage() {
  const [projets, setProjets] = useState<Projet[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sortField, setSortField] = useState<'nom' | 'statut' | 'deadline' | 'chefProjet' | 'createdAt'>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const fetchProjets = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams({
        search,
        page: page.toString(),
        sortField,
        sortOrder
      })

      const res = await fetch(`/api/projets?${params.toString()}`)
      const data = await res.json()

      setProjets(data.data)
      setTotalPages(data.totalPages)
    } catch (err) {
      console.error("Erreur lors du charhement :", err)
      setError('Erreur lors du chargement des projets.')
    } finally {
      setLoading(false)
    }
  }, [search, page, sortField, sortOrder])

  useEffect(() => {
    fetchProjets()
  }, [fetchProjets])

  const handleDelete = async (id: number) => {
    const confirmed = confirm('Voulez-vous vraiment supprimer ce projet ?')
    if (!confirmed) return
    setLoading(true)
    try {
      const res = await fetch(`/api/projets/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setMessage('Projet supprimé.')
        await fetchProjets()
      } else {
        setMessage('Erreur lors de la suppression.')
      }
    } catch (err) {
      console.error(err)
      setMessage('Erreur lors de la suppression.')
    } finally {
      setLoading(false)
    }
  }

  // Fonction de tri dynamique
  const handleSort = (field: typeof sortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
    setPage(1)    
  }
  
  return ( 
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/admin/dashboard"
          className="text-sm text-gray-600 underline"
        >
          ← Retour au Dashboard
        </Link>

        <h1 className="text-2xl font-bold">Liste des projets</h1>
        <Link
          href="/admin/projets/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          + Nouveau projet
        </Link>
      </div>

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

      {/* Messages */}
      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-500 mb-2">{error}</p>}

      {loading ? (
        <p className="">Chargement...</p>
      ) : projets.length === 0 ? (
        <p>Aucun projet trouvé.</p>
      ) : (
        <table className="w-full border-collapse border rounded bg-white shadow">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="border p-2 text-left cursor-pointer"
                onClick={() => handleSort('nom')}
              >
                Nom {sortField === 'nom' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th
                className="border p-2 text-left cursor-pointer"
                onClick={() => handleSort('statut')}
              >
                Statut {sortField === 'statut' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="border p-2 text-left">Chef du Projet</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projets.map(projet => (
              <tr key={projet.id}>
                <td className="border p-2">{projet.nom}</td>
                <td className="border p-2">{projet.statut}</td>
                <td className="border p-2">{projet.chefProjet?.nom ?? '-'}</td>  
                <td className="border p-2 space-x-2">
                  <Link
                    href={`/admin/projets/liste/${projet.id}`}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Détails     
                  </Link>
                  <Link  
                    href={`/admin/projets/${projet.id}/assignations`}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Assignations       
                  </Link>
                  <Link
                    href={`/admin/projets/edit/${projet.id}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Modifier
                  </Link>
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

      {/* Pagination */}
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
