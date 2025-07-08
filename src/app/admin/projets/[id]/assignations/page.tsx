'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-toastify'

type MembreProjet = {
  id: number
  nom: string
  role: string | null
  estDejaMembre: boolean
}

export default function AssignationProjetPage() {
  const { id } = useParams() as { id: string }
  const [utilisateurs, setUtilisateurs] = useState<MembreProjet[]>([])
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState("")
  const [sortField, setSortField] = useState<"nom" | "id">("nom")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  // Fonction pour récupérer les utilisateurs avec filtres, tri et pagination
  useEffect(() => {
    const fetchUtilisateurs = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({
          search,
          sortField,
          sortOrder,
          page: page.toString(),
        })

        const res = await fetch(`/api/assignations/projet/${id}?${params.toString()}`)
        if (!res.ok) throw new Error("Erreur serveur")
        const data = await res.json()

        setUtilisateurs(data.data)
        setTotalPages(data.totalPages)

        // Pré-cocher ceux déjà membres
        setCheckedIds(new Set(data.data.filter((u: MembreProjet) => u.estDejaMembre).map((u: MembreProjet) => u.id)))
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs', error)
        toast.error("Erreur lors du chargement des utilisateurs")
      } finally {
        setLoading(false)
      }
    }

    //Rechargement à chaque changement de page, recherche, tri
    fetchUtilisateurs()
  }, [page, search, sortField, sortOrder])

  // Toggle checkbox avec Set pour éviter doublons
  const toggleCheckbox = (id: number) => {
    setCheckedIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // Enregistrement des assignations
  const handleAssignation = async () => {
    if (loading) return
    setLoading(true)
    try {
      const res = await fetch(`/api/assignations/projet/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ utilisateursIds: Array.from(checkedIds) }),
      })
      const data = await res.json()

      setTimeout(() => {
        setLoading(false)
        if (res.ok) {
          setMessage({ text: data.message || "Assignations mises à jour avec succès !", type: 'success' })
        } else {
          setMessage({ text: "Erreur lors de l'enregistrement", type: 'error' })
        }
        setTimeout(() => setMessage(null), 3000)
      }, 1000)
    } catch(error) {
      console.error("Erreur lors de l’enregistrement", error)
      const errMsg = error instanceof Error ? error.message : "Erreur lors de l’enregistrement"
      setMessage({ text: errMsg, type: "error" })
    } finally {
      setLoading(false)
      setTimeout(() => setMessage(null), 3000)
    }
  }

  // Reset page à 1 lors d'un nouveau search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Gérer les membres du projet #{id}</h1>
      <Link href="/admin/projets/liste" className="text-blue-600 hover:underline text-sm">
          ← Retour à la liste des projets
        </Link>

      {/* Recherche et tri */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom ou rôle..."
          className="w-full md:w-1/2 p-2 border rounded"
          value={search}
          onChange={handleSearchChange}
        />

        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as "nom" | "id")}
          className="p-2 border rounded"
        >
          <option value="nom">Trier par nom</option>
          <option value="id">Trier par ID</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="p-2 border rounded"
        >
          <option value="asc">Ordre croissant</option>
          <option value="desc">Ordre décroissant</option>
        </select>
      </div>

      {/* Message de succès ou erreur */}
      {message && (
        <div className={`mb-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}

      {/* Spinner chargement */}
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-400 border-t-transparent"></div>
          <span className="ml-3 text-gray-600">Chargement en cours...</span>
        </div>
      ) : utilisateurs.length === 0 ? (
        <div className="text-center text-gray-500 py-6">Aucun utilisateur trouvé</div>
      ) : (
        <>
          {/* Table des utilisateurs */}
          <table className="w-full mb-4 border">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="p-2 text-left cursor-pointer select-none"
                  onClick={() => {
                    if (sortField === "nom") setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    else setSortField("nom")
                  }}
                >
                  Nom {sortField === "nom" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                </th>
                <th className="p-2 text-left">Rôle</th>
                <th className="p-2 text-left">Déjà membre</th>
                <th className="p-2 text-left">Sélection</th>
              </tr>
            </thead>
            <tbody>
              {utilisateurs.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="p-2">{u.nom}</td>
                  <td className="p-2">{u.role ?? "Aucun rôle"}</td>
                  <td className="p-2">{u.estDejaMembre ? "Oui" : "Non"}</td>
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={checkedIds.has(u.id)}
                      onChange={() => toggleCheckbox(u.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              className="px-4 py-1 border rounded disabled:opacity-50"
            >
              Précédent
            </button>
            <span>Page {page} / {totalPages}</span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || loading}
              className="px-4 py-1 border rounded disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </>
      )}

      <button
        onClick={handleAssignation}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Mettre à jour les assignations
      </button>
    </div>
  )
}
