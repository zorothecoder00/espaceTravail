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
  const [totalPage, setTotalPage] = useState(1)
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
      setTotalPage(data.totalPage)
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
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <Link href="/admin/dashboard" className="text-blue-600 hover:underline">
          ⬅ Retour au Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Liste des Départements</h1>
        <Link
          href="/admin/departements/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Nouveau département
        </Link>
      </div>

      <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          {/* Tu pourras ajouter d'autres champs plus tard */}
        </select>

        <button
          onClick={toggleSortOrder}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Ordre : {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
        </button>
      </div>

      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : departements.length === 0 ? (
        <p>Aucun département trouvé.</p>
      ) : (
        <>
          {refreshing && (
            <p className="text-gray-500 text-sm italic mt-2">
              🔄 Rafraîchissement en cours...
            </p>
          )}

          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Nom</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departements.map((dept, index) => (
                <tr key={dept.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {(page - 1) * 10 + index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{dept.nom}</td>
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                    <Link
                      href={`/admin/departements/edit/${dept.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Modifier
                    </Link>
                    <button
                      onClick={() => handleDelete(dept.id)}
                      className="text-red-600 hover:underline"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Précédent
            </button>
            <span className="text-sm">
              Page {page} / {totalPage}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
              disabled={page === totalPage}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </>
      )}
    </div>
  )
}