'use client'
  
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'

interface Departement {  
  id: number
  nom: string
}
  
export default function ListeDepartements() {
  const [departements, setDepartements] = useState<Departement[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sortField, setSortField] = useState<"nom">("nom") 
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshing, setRefreshing] = useState(false) 

  const fetchDepartements = useCallback(async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        search,
        page: page.toString(),
        sortField,
        sortOrder,
      })
      const res = await fetch(`/api/departements?${params.toString()}`)
      if (!res.ok) throw new Error('Erreur lors du chargement des départements')
      const data = await res.json()
      setDepartements(data.data)
      setTotalPages(data.totalPages)
    } catch (err) {
      console.error(err)
      setError('Impossible de récupérer les départements.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [search, page, sortField, sortOrder]) // ← ✅ Ajout des dépendances)

  useEffect(() => {
    fetchDepartements()
  }, [fetchDepartements])

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm('Supprimer ce département ?')
    if (!confirmDelete) return

    try {
      const res = await fetch(`/api/departements/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Erreur lors de la suppression')
      setRefreshing(true)
      await fetchDepartements()
    } catch (err) {
      console.error(err)
      alert('Erreur lors de la suppression.')
    }
  }

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
  }

  return (
  <div className="max-w-4xl mx-auto mt-10 px-4">
    {/* --- En-tête avec titre et actions --- */}
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <Link href="/admin/dashboard" className="text-blue-600 hover:underline whitespace-nowrap">
        ⬅ Retour au Dashboard
      </Link>

      <h1 className="text-2xl font-bold text-center sm:text-left flex-grow">
        Liste des Départements
      </h1>

      <Link
        href="/admin/departements/new"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap text-center"
      >
        + Nouveau département
      </Link>
    </div>

    {/* --- Barre de recherche, tri et toggle ordre --- */}
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Recherche par nom"  
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1)
        }}
        className="px-3 py-2 border rounded w-full"
      />

      <select
        value={sortField}
        onChange={(e) => {
          setSortField(e.target.value as 'nom')
          setPage(1)
        }}
        className="px-3 py-2 border rounded"
      >
        <option value="nom">Trier par nom</option>
        {/* Ajouter d'autres options ici si besoin */}
      </select>

      <button
        onClick={toggleSortOrder}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 whitespace-nowrap"
        aria-label="Changer l'ordre de tri"
      >
        Ordre : {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
      </button>
    </div>

    {/* --- Messages d'état --- */}
    {loading && <p>Chargement...</p>}
    {error && !loading && <p className="text-red-500">{error}</p>}
    {!loading && !error && departements.length === 0 && <p>Aucun département trouvé.</p>}

    {/* --- Rafraîchissement --- */}
    {refreshing && (
      <p className="text-gray-500 text-sm italic mb-2">🔄 Rafraîchissement en cours...</p>
    )}

    {/* --- Tableau des départements --- */}
    {!loading && !error && departements.length > 0 && (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Nom</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departements.map((dept, index) => (
              <tr key={dept.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {(page - 1) * 10 + index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">{dept.nom}</td>
                <td className="border border-gray-300 px-4 py-2 space-x-4">
                  <Link
                    href={`/admin/departements/edit/${dept.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(dept.id)}
                    className="text-red-600 hover:underline"
                    aria-label={`Supprimer le département ${dept.nom}`}
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

    {/* --- Pagination --- */}
    {totalPages > 1 && (
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          aria-label="Page précédente"
        >
          Précédent
        </button>
        <span className="text-sm">
          Page {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          aria-label="Page suivante"
        >
          Suivant
        </button>
      </div>
    )}
  </div>
)
}