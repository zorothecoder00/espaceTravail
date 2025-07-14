'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Statut } from '@prisma/client'

type Projet = {
  id: number
  nom: string
  deadline: string | null
  statut: Statut
}

export default function MesProjetsDirigesPage() {
  const router = useRouter()

  const [projets, setProjets] = useState<Projet[]>([])
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState<'nom' | 'deadline' | 'statut'>('nom')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingIds, setDeletingIds] = useState<number[]>([]) // ✅ nouveau

  useEffect(() => {
    const fetchProjets = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `/api/mesProjetsDiriges?search=${search}&sort=${sortField}&order=${sortOrder}&page=${page}`
        )

        if (res.status === 401) {
          router.push('/login')
          return
        }

        const data = await res.json()
        setProjets(data.projets)
        setTotalPages(data.totalPages)
        setError('')
      } catch (err) {
        console.error("Erreur interne", err)
        setError('Erreur lors du chargement.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjets()
  }, [search, sortField, sortOrder, page, router])

  const handleDelete = async (projetId: number) => {
    const confirm = window.confirm("Voulez-vous vraiment supprimer ce projet ?")
    if (!confirm) return

    setDeletingIds((prev) => [...prev, projetId]) // ✅ commence loading

    try {
      const res = await fetch(`/api/mesProjetsDiriges/${projetId}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Échec de la suppression')
      setProjets((prev) => prev.filter((p) => p.id !== projetId))
    } catch (error) {
      alert("Erreur lors de la suppression.")
      console.error(error)
    } finally {
      setDeletingIds((prev) => prev.filter((id) => id !== projetId)) // ✅ stop loading
    }
  }

  const handleSort = (field: typeof sortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const afficherStatutLisible = (statut: Statut): string => {
    switch (statut) {
      case 'EN_COURS':
        return 'En cours'
      case 'TERMINE':
        return 'Terminé'
      case 'ATTENTE':
        return 'En attente'
      default:
        return statut
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Link href="/interfaceUtilisateur/dashboard" className="text-gray-600 underline">
          ← Retour au Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Mes projets dirigés</h1>
      </div>

      <input
        type="text"
        placeholder="Rechercher un projet..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)    
          setPage(1)
        }}
        className="w-full border p-2 rounded"
      />

      {error && <p className="text-red-600">{error}</p>}
      {loading ? (
        <p>Chargement...</p>
      ) : projets.length === 0 ? (
        <p>Aucun projet trouvé.</p>
      ) : (
        <table className="w-full border-collapse border rounded bg-white shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('nom')}>Nom</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('deadline')}>Deadline</th>
              <th className="border p-2 cursor-pointer" onClick={() => handleSort('statut')}>Statut</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projets.map((projet) => (
              <tr key={projet.id}>
                <td className="border p-2">{projet.nom}</td>
                <td className="border p-2">
                  {projet.deadline
                    ? new Date(projet.deadline).toLocaleDateString('fr-FR')
                    : 'Non définie'}
                </td>
                <td className="border p-2">{afficherStatutLisible(projet.statut)}</td>
                <td className="border p-2 space-x-2">
                  <Link
                    href={`/interfaceUtilisateur/mesProjetsDiriges/${projet.id}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Détails
                  </Link>
                  <Link
                    href={`/interfaceUtilisateur/mesProjetsDiriges/${projet.id}/edit`}
                    className="text-green-600 hover:underline text-sm"
                  >
                    Modifier
                  </Link>
                  <Link
                    href={`/interfaceUtilisateur/mesProjetsDiriges/${projet.id}/taches`}
                    className="text-indigo-600 hover:underline text-sm"
                  >
                    Tâches
                  </Link>
                  <Link
                    href={`/interfaceUtilisateur/mesProjetsDiriges/${projet.id}/membres`}
                    className="text-purple-600 hover:underline text-sm"
                  >
                    Membres
                  </Link>
                  <button
                    onClick={() => handleDelete(projet.id)}
                    disabled={deletingIds.includes(projet.id)}
                    className="text-red-600 hover:underline text-sm disabled:opacity-50"
                  >
                    {deletingIds.includes(projet.id) ? 'Suppression...' : 'Supprimer'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  )
}
