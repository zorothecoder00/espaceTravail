'use client'

import { useEffect, useState } from 'react'    
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Statut } from '@prisma/client'

type Tache = {
  id: string
  titre: string
  statut: Statut
  projet: {
    nom: string
  }
}

export default function ListeTachesPage() {
  const { status } = useSession()
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [taches, setTaches] = useState<Tache[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    const fetchTaches = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/mesTaches?search=${search}&page=${page}`)
        if (!res.ok) throw new Error('Erreur lors du chargement.')
        const data = await res.json()
        setTaches(data.taches)
        setTotalPages(data.totalPages)
        setError('')
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Erreur inconnue.'
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    if (status === 'authenticated') {
      fetchTaches()
    }
  }, [search, page, status])

  const afficherStatutLisible = (statut: Statut): string => {
    switch (statut) {
      case Statut.ATTENTE:
        return 'À faire'
      case Statut.EN_COURS:
        return 'En cours'
      case Statut.TERMINE:
        return 'Terminée'
      default:
        return statut
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <Link href="/interfaceUtilisateur/dashboard" className="text-sm text-gray-600 underline">
          ← Retour au Dashboard
        </Link>
        <h1 className="text-2xl font-bold">Mes tâches</h1>
      </div>

      <input
        type="text"
        placeholder="Rechercher une tâche..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1)
        }}
        className="mb-4 p-2 border w-full rounded"
      />

      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Chargement...</p>
      ) : taches.length === 0 ? (
        <p>Aucune tâche trouvée.</p>
      ) : (
        <table className="w-full border-collapse border rounded bg-white shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Titre</th>
              <th className="border p-2 text-left">Statut</th>
              <th className="border p-2 text-left">Projet</th>
            </tr>
          </thead>
          <tbody>
            {taches.map((tache) => (
              <tr key={tache.id}>
                <td className="border p-2">{tache.titre}</td>
                <td className="border p-2">{afficherStatutLisible(tache.statut)}</td>
                <td className="border p-2">{tache.projet.nom}</td>
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
        <span>
          Page {page} / {totalPages}
        </span>
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
