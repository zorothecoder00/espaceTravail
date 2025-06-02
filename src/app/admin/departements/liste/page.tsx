'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Departement {
  id: number
  nom: string
}

export default function ListeDepartements() {
  const [departements, setDepartements] = useState<Departement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  const router = useRouter()

  const fetchDepartements = async () => {
    try {
      const res = await fetch('/api/departements')
      if (!res.ok) throw new Error('Erreur lors du chargement des départements')
      const data = await res.json()
      setDepartements(data)
    } catch (err) {
      setError('Impossible de récupérer les départements.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchDepartements()
  }, [])

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
      alert('Erreur lors de la suppression.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">

        {/* 🔙 Lien vers le dashboard */}
        <Link href="admin/dashboard" className="text-blue-600 hover:underline">
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

      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : departements.length === 0 ? (
        <p>Aucun département trouvé.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
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
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
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
      )}
    </div>
  )
}
