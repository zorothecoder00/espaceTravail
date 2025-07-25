'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

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
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState<'titre' | 'statut' | 'deadline' | 'createdAt'>('createdAt')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('') // 🔥 nécessaire

  const chargerTaches = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams({
        search,
        page: page.toString(),
        sortField,
        sortOrder,
      })
      const res = await fetch(`/api/taches?${params.toString()}`)
      const data = await res.json()
      setTaches(data.data)
      setTotalPages(data.totalPages)
    } catch (err) {
      console.error(err)
      setError('Erreur lors du chargement des tâches.')
    }finally{
      setLoading(false)
    }    
  },[search, page, sortField, sortOrder])

  useEffect(() => {
    chargerTaches()
  }, [chargerTaches])

  const supprimerTache = async (id: string) => {
    if (!confirm('Voulez-vous vraiment supprimer cette tâche?')){
      return
    } 
    setLoading(true)

    try {
      const res = await fetch(`/api/taches/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setMessage('Tâche supprimée')
        await chargerTaches()
      } else {
        setMessage('Erreur lors de la suppression')
      }
    } catch (err) {
      console.error('Erreur suppression:', err)
      setMessage('Erreur lors de la suppression')
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="p-6 max-w-6xl mx-auto">
    {/* Haut de page + bouton + recherche en flex-row */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex-1 space-y-2">
        <Link href="/admin/dashboard" className="text-sm text-gray-600 underline">
          ← Retour au Dashboard
        </Link>
        <h2 className="text-2xl font-bold">Liste des tâches</h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="🔍 Rechercher par titre, projet, statut..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
          className="border border-gray-300 px-4 py-2 rounded w-full md:w-72"
        />

        <Link
          href="/admin/taches/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center whitespace-nowrap"
        >
          + Nouvelle tâche
        </Link>
      </div>
    </div>

    {/* Message ou erreur */}
    {message && <p className="text-green-600 mb-2">{message}</p>}
    {error && <p className="text-red-500 mb-2">{error}</p>}

    {/* Tableau */}
    {loading ? (
      <p>Chargement des tâches...</p>
    ) : taches.length === 0 ? (
      <p>Aucune tâche trouvée.</p>
    ) : (
      <div className="overflow-auto">
        <table className="w-full table-auto border bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th
                className="p-2 text-left cursor-pointer"
                onClick={() =>
                  sortField === 'titre'
                    ? setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                    : setSortField('titre')
                }
              >
                Titre {sortField === 'titre' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="p-2 text-left">Projet</th>
              <th
                className="p-2 text-left cursor-pointer"
                onClick={() =>
                  sortField === 'statut'
                    ? setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                    : setSortField('statut')
                }
              >
                Statut {sortField === 'statut' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th
                className="p-2 text-left cursor-pointer"
                onClick={() =>
                  sortField === 'deadline'
                    ? setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                    : setSortField('deadline')
                }
              >
                Deadline {sortField === 'deadline' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taches.map((t) => (
              <tr key={t.id} className="border-t hover:bg-gray-50">
                <td className="p-2">{t.titre}</td>
                <td className="p-2">{t.projet?.nom || '—'}</td>
                <td className="p-2">{t.statut}</td>
                <td className="p-2">
                  {t.deadline ? new Date(t.deadline).toLocaleString() : '—'}
                </td>
                <td className="p-2 space-x-2">
                  <Link
                    href={`/admin/taches/liste/${t.id}`}
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Détails
                  </Link>
                  {/*
                  <Link
                    href={`/admin/taches/${t.id}/assignations`}
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Assignations
                  </Link>
                  */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-indigo-600 text-sm px-0 hover:underline">
                        Assignations
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/taches/${t.id}/assignations`}>
                          Tâche principale
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/taches/${t.id}/assignationsSousTaches`}>
                          Sous-tâches
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href={`/admin/taches/edit/${t.id}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => supprimerTache(t.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {/* Pagination */}
    {totalPages > 1 && (
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          ← Précédent
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Suivant →
        </button>
      </div>
    )}
  </div>
)

}
