'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Statut } from '@prisma/client'

export default function EditProjetDirigePage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const [nom, setNom] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [statut, setStatut] = useState<Statut>(Statut.ATTENTE)

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!id) return
    async function fetchProjet() {
      try {
        const res = await fetch(`/api/mesProjetsDiriges/${id}`)
        const json = await res.json()
        if (!res.ok) {
          setError(json.message || 'Projet introuvable')
          return
        }
        const p = json.data
        setNom(p.nom)
        setDescription(p.description || '')
        setDeadline(p.deadline ? p.deadline.slice(0, 16) : '')
        setStatut(p.statut)
      } catch {
        setError('Erreur lors du chargement du projet')
      } finally {
        setLoading(false)
      }
    }
    fetchProjet()
  }, [id])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nom.trim()) {
      setError('Le nom est requis')
      return
    }
    setSaving(true)
    setError('')
    setMessage('')

    const res = await fetch(`/api/mesProjetsDiriges/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, description, deadline, statut }),
    })
    const data = await res.json()

    if (res.ok) {
      setMessage('Projet mis à jour avec succès')
      setTimeout(() => router.push('/interfaceUtilisateur/mesProjetsDiriges'), 1200)
    } else {
      setError(data.message || 'Erreur lors de la mise à jour')
    }
    setSaving(false)
  }

  if (loading) return <p className="p-6">Chargement...</p>

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <div className="mb-4">
        <Link
          href="/interfaceUtilisateur/mesProjetsDiriges"
          className="text-blue-600 hover:underline text-sm"
        >
          ← Retour à mes projets
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">Modifier le projet</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {message && <p className="text-green-600 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nom *</label>
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date limite</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Statut</label>
          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value as Statut)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value={Statut.ATTENTE}>En attente</option>
            <option value={Statut.EN_COURS}>En cours</option>
            <option value={Statut.TERMINE}>Terminé</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Sauvegarde...' : 'Enregistrer'}
        </button>
      </form>
    </div>
  )
}
