'use client'

import React, { useEffect, useState } from 'react'    
import Link from 'next/link'
import { Statut } from '@prisma/client'    

type SousTacheProjet = {
  id: number
  titre: string
  statut: Statut  
}    

type Tache = {
  id: number
  titre: string
  statut: Statut
  projet: {
    nom: string
  }
  sousTachesProjet: SousTacheProjet[]
}

export default function ListeTachesPage() {   

  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState<'titre' | 'statut' | 'deadline'>('titre')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [taches, setTaches] = useState<Tache[]>([])
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [expandedTaches, setExpandedTaches] = useState<number[]>([])

  useEffect(() => {
    const fetchTaches = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/mesTaches?search=${search}&page=${page}&sortField=${sortField}&sortOrder=${sortOrder}`)
        if (!res.ok) throw new Error('Erreur lors du chargement.')
          const data = await res.json()
          console.log("Réponse API mesTaches :", data)
          setTaches(data.data)
          setTotalPages(data.totalPages)
          setError('')
      }catch (err) {
        const message = err instanceof Error ? err.message : 'Erreur inconnue.'
        setError(message)  
      } finally {
        setLoading(false)
      }
    }
    fetchTaches()
  }, [search, page, sortField, sortOrder])

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

  const handleSort = (field: 'titre' | 'statut' | 'deadline') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const toggleTache = (id: number) => {
    setExpandedTaches((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
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
              <th
                className="border p-2 text-left cursor-pointer"
                onClick={() => handleSort('titre')}
              >
                Titre {sortField === 'titre' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th
                className="border p-2 text-left cursor-pointer"
                onClick={() => handleSort('statut')}
              >
                Statut {sortField === 'statut' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="border p-2 text-left">Projet</th>
              <th className="border p-2 text-left">Actions</th>{/*✅ colonne ajoutée */}
            </tr>
          </thead>  
          <tbody>
            {taches.map((tache) => (
                <React.Fragment key={tache.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="border p-2">
                      <div className="flex items-center justify-start gap-6">
                        <span>{tache.titre}</span>
                        <button
                          onClick={() => toggleTache(tache.id)}
                          className="text-sm text-blue-600 underline ml-2 hover:cursor-pointer"
                        >
                          {expandedTaches.includes(tache.id) ? 'Masquer' : 'Voir sous-tâches'}
                        </button>
                      </div>
                    </td>
                    <td className="border p-2">{afficherStatutLisible(tache.statut)}</td>
                    <td className="border p-2">{tache.projet.nom}</td>
                    <td className="border p-2">
                      <Link
                        href={`/interfaceUtilisateur/mesTaches/liste/${tache.id}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Détails
                      </Link>
                      <span className="mx-2" />
                      <Link
                        href={`/interfaceUtilisateur/mesTaches/edit/${tache.id}`}
                        className="text-sm text-green-600 hover:underline"
                      >
                        Mettre à jour
                      </Link>
                    </td>
                  </tr>

                  {expandedTaches.includes(tache.id) && (
                    <tr className="bg-gray-50">
                      <td colSpan={4} className="p-4">
                        {tache.sousTachesProjet?.length > 0 ? (
                          <ul className="list-disc ml-6 space-y-1">
                            {tache.sousTachesProjet.map((sous) => (
                              <li key={sous.id}>
                                {sous.titre} – {afficherStatutLisible(sous.statut)}
                                <Link
                                  href={`/interfaceUtilisateur/mesTaches/sousTache/edit/${sous.id}`}
                                  className="ml-2 text-sm text-green-600 hover:underline cursor-pointer"
                                >
                                  Modifier
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-500 italic">
                            Aucune sous-tâche liée à vous.
                          </span>
                        )}

                        {/* Lien pour ajouter une sous-tâche */}
                        <div className="mt-4">
                          <Link
                            href={`/interfaceUtilisateur/mesTaches/sousTache/new?tacheId=${tache.id}`}
                            className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                          >
                            + Ajouter sous-tâche
                          </Link>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
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
