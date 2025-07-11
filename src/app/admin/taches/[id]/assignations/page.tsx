'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-toastify'

type Membre = {
  id: number
  nom: string
  estAssigne: boolean
}

export default function AssignationTachePage() {
  const { id } = useParams() as { id: string }
  const [membres, setMembres] = useState<Membre[]>([])
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState('nom')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    const fetchMembres = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({
          search,
          page: page.toString(),
          limit: '10',
          sortField,
          sortOrder,
        })

        const res = await fetch(`/api/taches/${id}/assignations?${params}`)
        const { data, totalPages } = await res.json()

        setMembres(data)

        const preselection = data
          .filter((m: Membre) => m.estAssigne)
          .map((m: Membre) => m.id)

        setSelectedIds(new Set(preselection))
        setTotalPages(totalPages)
      } catch (error) {
        console.error('Erreur lors du chargement des membres', error)
        toast.error('Erreur lors du chargement des membres.')
      } finally {
        setLoading(false)
      }
    }

    fetchMembres()
  }, [search, page, sortField, sortOrder, id])

  const toggleSelection = (userId: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev)
      if(next.has(userId)) next.delete(userId)
      else next.add(userId)
      return next
    })
  }

  const enregistrer = async () => {
    setLoading(true)

    try{
      const res = await fetch(`/api/taches/${id}/assignations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          utilisateursIds: Array.from(selectedIds),
        }),
      })

      setTimeout(() => {
        setLoading(false)
        if (res.ok) {
          setMessage({ text: 'Assignations mises à jour avec succès !', type: 'success' })
        } else {
          setMessage({ text: "Erreur lors de l'enregistrement", type: 'error' })
        }
        setTimeout(() => setMessage(null), 3000)
      }, 1000)
    }catch(error) { 
      console.error("Erreur lors de l’enregistrement", error)
      const errMsg = error instanceof Error ? error.message : "Erreur lors de l’enregistrement"
      setMessage({ text: errMsg, type: "error" })
    }finally {
      setLoading(false)
      setTimeout(() => setMessage(null), 3000)
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Assigner des membres à la tâche #{id}</h2>
        <Link href="/admin/taches/liste" className="text-blue-600 hover:underline text-sm">
          ← Retour à la liste des tâches
        </Link>
      </div>

      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1)
        }}
        className="p-2 border rounded w-full mb-4"
      />

      {loading ? (
        <div className="flex items-center justify-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-400 border-t-transparent"></div>
          <span className="ml-3 text-gray-600">Chargement en cours...</span>
        </div>
      ) : membres.length === 0 ? (
        <div className="text-center text-gray-500 py-6">Aucun membre trouvé</div>
      ) : (
        <>
          <table className="w-full mb-4 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Sélection</th>
                <th
                  className="p-2 text-left cursor-pointer"
                  onClick={() => {
                    setSortField('nom')
                    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                  }}
                >
                  Nom {sortField === 'nom' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </th>
              </tr>
            </thead>
            <tbody>
              {membres.map((membre) => (
                <tr key={membre.id} className="border-t">
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(membre.id)}
                      onChange={() => toggleSelection(membre.id)}
                    />
                  </td>
                  <td className="p-2">{membre.nom}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Précédent
            </button>
            <span>
              Page {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </>
      )}

      <button
        onClick={enregistrer}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? "Chargement..." : "Enregistrer les assignations"}
      </button>

      {message && (
        <div
          className={`mt-4 p-2 rounded ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}
