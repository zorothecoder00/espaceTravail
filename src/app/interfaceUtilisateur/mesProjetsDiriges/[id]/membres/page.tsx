'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

type MembreItem = {
  id: number
  nom: string
  role: string | null
  estDejaMembre: boolean
}

export default function MembresProjetDirigePage() {
  const { id } = useParams() as { id: string }

  const [utilisateurs, setUtilisateurs] = useState<MembreItem[]>([])
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set())
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState<'nom' | 'id'>('nom')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    const params = new URLSearchParams({
      search,
      sortField,
      sortOrder,
      page: page.toString(),
    })

    setLoading(true)
    fetch(`/api/projets/${id}/assignations?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setUtilisateurs(data.data)
        setTotalPages(data.totalPages)
        setCheckedIds(
          new Set(
            data.data
              .filter((u: MembreItem) => u.estDejaMembre)
              .map((u: MembreItem) => u.id)
          )
        )
      })
      .catch(() => setMessage({ text: 'Erreur lors du chargement', type: 'error' }))
      .finally(() => setLoading(false))
  }, [id, search, sortField, sortOrder, page])

  const toggleCheckbox = (userId: number) => {
    setCheckedIds((prev) => {
      const next = new Set(prev)
      if (next.has(userId)) next.delete(userId)
      else next.add(userId)
      return next
    })
  }

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch(`/api/projets/${id}/assignations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ utilisateursIds: Array.from(checkedIds) }),
      })
      const data = await res.json()
      setMessage({
        text: res.ok ? data.message || 'Membres mis à jour avec succès' : 'Erreur lors de la sauvegarde',
        type: res.ok ? 'success' : 'error',
      })
    } catch {
      setMessage({ text: 'Erreur réseau', type: 'error' })
    } finally {
      setSaving(false)
      setTimeout(() => setMessage(null), 3000)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-5">
      <div className="flex items-center justify-between">
        <Link
          href={`/interfaceUtilisateur/mesProjetsDiriges/${id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          ← Retour au projet
        </Link>
        <h1 className="text-xl font-bold">Gérer les membres</h1>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          className="flex-1 border px-3 py-2 rounded"
        />
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as 'nom' | 'id')}
          className="border px-3 py-2 rounded"
        >
          <option value="nom">Trier par nom</option>
          <option value="id">Trier par ID</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="border px-3 py-2 rounded"
        >
          <option value="asc">Croissant</option>
          <option value="desc">Décroissant</option>
        </select>
      </div>

      {message && (
        <div
          className={`p-3 rounded text-sm ${
            message.type === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {loading ? (
        <div className="flex items-center gap-3 py-6">
          <div className="animate-spin rounded-full h-6 w-6 border-4 border-indigo-400 border-t-transparent" />
          <span className="text-gray-500 text-sm">Chargement...</span>
        </div>
      ) : utilisateurs.length === 0 ? (
        <p className="text-gray-500 text-center py-6">Aucun utilisateur trouvé</p>
      ) : (
        <>
          <table className="w-full border-collapse border rounded bg-white shadow">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="border p-2 text-left cursor-pointer"
                  onClick={() => {
                    if (sortField === 'nom') setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                    else setSortField('nom')
                  }}
                >
                  Nom {sortField === 'nom' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                </th>
                <th className="border p-2 text-left">Rôle</th>
                <th className="border p-2 text-left">Membre</th>
                <th className="border p-2 text-center">Sélection</th>
              </tr>
            </thead>
            <tbody>
              {utilisateurs.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="border p-2">{u.nom}</td>
                  <td className="border p-2 text-sm text-gray-600">{u.role ?? 'Aucun'}</td>
                  <td className="border p-2 text-sm">
                    {u.estDejaMembre ? (
                      <span className="text-green-600 font-medium">Oui</span>
                    ) : (
                      <span className="text-gray-400">Non</span>
                    )}
                  </td>
                  <td className="border p-2 text-center">
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
          <div className="flex justify-between items-center">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              className="px-4 py-1 border rounded disabled:opacity-50"
            >
              Précédent
            </button>
            <span className="text-sm">Page {page} / {totalPages}</span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages || loading}
              className="px-4 py-1 border rounded disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </>
      )}

      <button
        onClick={handleSave}
        disabled={saving || loading}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {saving ? 'Sauvegarde...' : 'Enregistrer les membres'}
      </button>
    </div>
  )
}
