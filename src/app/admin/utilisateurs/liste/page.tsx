'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'  

type Utilisateur = {  
  id: number
  nom: string
  prenom: string
  email: string
  role: string
  departement?: { nom: string }
  image?: string
}

export default function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [sortField, setSortField] = useState<"nom" | "email" | "id">("nom")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Fonction chargement des utilisateurs avec useCallback
  const chargerUtilisateurs = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        search,
        page: page.toString(),
        limit: '10',
        sortField,     
        sortOrder,
      })

      const res = await fetch(`/api/utilisateurs?${params.toString()}`)
      const data = await res.json()

      setUtilisateurs(data.data)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error("Erreur lors du chargement des utilisateurs :", error)
      setMessage("Erreur lors du chargement des utilisateurs")
    } finally {
      setLoading(false)
    }
  }, [search, page, sortField, sortOrder])

  // Appel initial + à chaque changement de filtre/tri
  useEffect(() => {
    chargerUtilisateurs()
  }, [chargerUtilisateurs])

  const supprimerUtilisateur = async (id: number) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/utilisateurs/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setMessage('Utilisateur supprimé')
        await chargerUtilisateurs()
      } else {
        setMessage('Erreur lors de la suppression')
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error)
      setMessage("Erreur lors de la suppression")
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="p-6">
    {/* Top bar */}
    <div className="flex justify-between items-center mb-6">
      <Link href="/admin/dashboard" className="text-blue-600 hover:underline">
        ← Retour au Dashboard
      </Link>
      <h1 className="text-2xl font-bold">Liste des utilisateurs</h1>
      <Link
        href="/admin/utilisateurs/new"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ➕ Nouvel utilisateur
      </Link>
    </div>

    {/* Filtres */}
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="🔍 Rechercher par nom ou email"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(1)
        }}
        className="border p-2 rounded w-full md:w-1/3"
      />
    </div>

    {/* Message erreur */}
    {message && <p className="text-sm text-red-500 mb-4">{message}</p>}

    {/* Chargement */}
    {loading ? (
      <div className="text-center py-10 text-gray-600">Chargement des utilisateurs...</div>
    ) : (
      <>
        {/* Table */}
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th
                className="p-2 border cursor-pointer"
                onClick={() =>
                  sortField === "nom"
                    ? setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    : setSortField("nom")
                }
              >
                Nom {sortField === "nom" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-2 border">Prénom</th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() =>
                  sortField === "email"
                    ? setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                    : setSortField("email")
                }
              >
                Email {sortField === "email" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-2 border">Rôle</th>
              <th className="p-2 border">Département</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((u) => (
              <tr key={u.id} className="text-center border-t">
                <td className="p-2 border flex items-center gap-2">
                  <Image
                    src={u.image || "/profile.png"}
                    alt="avatar"
                    width={24}          // ← obligatoire
                    height={24}         // ← obligatoire
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  {u.nom}
                </td>
                <td className="p-2 border">{u.prenom}</td>
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.role}</td>
                <td className="p-2 border">{u.departement?.nom || '-'}</td>
                <td className="p-2 border space-x-2">
                  <Link
                    href={`/admin/utilisateurs/liste/${u.id}`}
                    className="text-purple-600 hover:underline"
                  >
                    Détails
                  </Link>
                  <Link
                    href={`/admin/utilisateurs/edit/${u.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Modifier
                  </Link>
                  <Link
                    href={`/admin/utilisateurs/assignations/${u.id}`}
                    className="text-green-600 hover:underline"
                  >
                    Assignations
                  </Link>
                  <button
                    onClick={() => supprimerUtilisateur(u.id)}
                    className="text-red-600 hover:underline"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
            {utilisateurs.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4">
                  Aucun utilisateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            ← Précédent
          </button>
          <span>Page {page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Suivant →
          </button>
        </div>
      </>
    )}
  </div>
)

}