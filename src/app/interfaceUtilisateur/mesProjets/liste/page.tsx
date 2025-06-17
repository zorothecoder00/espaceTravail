'use client'

import { useEffect, useState } from 'react'   
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Statut } from '@prisma/client'

type Projet = {  
  id: string
  nom: string
  statut: Statut
  departement: {
    nom: string
  }
}

export default function ListeProjetsPage() {
  const { status } = useSession()
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [projets, setProjets] = useState<Projet[]>([])
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
    const fetchProjets = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/mesProjets?search=${search}&page=${page}`)
        if (!res.ok) throw new Error('Erreur lors du chargement.')
        const data = await res.json()
        setProjets(data.projets)
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
      fetchProjets()
    }
  }, [search, page, status])

  const afficherStatutLisible = (statut: Statut): string => {
    switch (statut) {
      case Statut.EN_COURS:
        return 'En cours'
      case Statut.TERMINE:
        return 'Terminé'
      case Statut.ATTENTE:
        return 'En attente'
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
        <h1 className="text-2xl font-bold">Liste des projets</h1>
      </div>

      <input
        type="text"
        placeholder="Rechercher un projet..."
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
      ) : projets.length === 0 ? (
        <p>Aucun projet trouvé.</p>
      ) : (
        <table className="w-full border-collapse border rounded bg-white shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Nom</th>
              <th className="border p-2 text-left">Statut</th>
              <th className="border p-2 text-left">Département</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projets.map((projet) => (
              <tr key={projet.id}>
                <td className="border p-2">{projet.nom}</td>
                <td className="border p-2">{afficherStatutLisible(projet.statut)}</td>
                <td className="border p-2">{projet.departement.nom}</td>
                <td className="border p-2 space-x-2">
                  <Link
                    href={`/interfaceUtilisateur/projets/${projet.id}/details`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Détails
                  </Link>
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
