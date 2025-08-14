"use client"  

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckSquare, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

type Tache = {
  id: string
  titre: string
  statut: string
  projet?: { nom: string }
}

export default function Taches() {
  const [taches, setTaches] = useState<Tache[]>([])
  const [total, setTotal] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  // paramètres dynamiques
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [sortField, setSortField] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  useEffect(() => {
    const fetchTotal = async () => {
      setLoading(true)
      try {
        const queryParams = new URLSearchParams({
          search,
          page: String(page),
          limit: String(limit),
          sortField,
          sortOrder
        }).toString()

        const res = await fetch(`/api/totalTaches?${queryParams}`)
        if (!res.ok) throw new Error("Erreur API")
        const data = await res.json()
        setTaches(data.data)
        setTotal(data.total)
        setTotalPages(data.totalPages)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTotal()
  }, [search, page, limit, sortField, sortOrder])

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 px-4">
      <Link
        href="/admin/dashboard"
        className="mb-4 text-blue-600 hover:underline self-start"
      >
        ← Retour sur le dashboard
      </Link>

    <Card className="max-w-4xl mx-auto rounded-2xl shadow-lg border border-gray-100 bg-white mt-10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-700 ">
          <CheckSquare className="text-green-500 w-6 h-6" />
          Liste des Tâches ({total})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filtres */}
        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            className="border rounded-lg px-3 py-1 text-sm"
          />

          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="border rounded-lg px-3 py-1 text-sm"
          >
            <option value="createdAt">Date de création</option>
            <option value="titre">Titre</option>
            <option value="statut">Statut</option>
            <option value="projet">Projet</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
            className="border rounded-lg px-3 py-1 text-sm"
          >
            <option value="asc">Ascendant</option>
            <option value="desc">Descendant</option>
          </select>

          <select
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value))
              setPage(1)
            }}
            className="border rounded-lg px-3 py-1 text-sm"
          >
            <option value={5}>5 / page</option>
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
          </select>
        </div>

        {/* Tableau */}
        {loading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin text-gray-400 w-8 h-8" />
          </div>
        ) : (
          <>
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Titre</th>
                  <th className="p-2 text-left">Statut</th>
                  <th className="p-2 text-left">Projet</th>
                </tr>
              </thead>
              <tbody>
                {taches.map((tache) => (
                  <tr key={tache.id} className="border-t">
                    <td className="p-2">{tache.titre}</td>
                    <td className="p-2">{tache.statut}</td>
                    <td className="p-2">{tache.projet?.nom}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-600">
                Total : {total} tâches
              </span>
              <div className="flex items-center gap-4">
                <button
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="p-1 rounded-full border disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm">
                  Page {page} / {totalPages}
                </span>
                <button
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="p-1 rounded-full border disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
    </div>
  )
}
