'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Statut } from '@prisma/client'

type Tache = {
  id: number
  titre: string
  description?: string | null
  statut: Statut
  deadline?: string | null
}

const STATUT_LABELS: Record<Statut, string> = {
  ATTENTE: 'En attente',
  EN_COURS: 'En cours',
  TERMINE: 'Terminé',
}

export default function TachesProjetDirigePage() {
  const { id } = useParams() as { id: string }

  const [taches, setTaches] = useState<Tache[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Formulaire création
  const [showForm, setShowForm] = useState(false)
  const [titre, setTitre] = useState('')
  const [descriptionForm, setDescriptionForm] = useState('')
  const [deadlineForm, setDeadlineForm] = useState('')
  const [statutForm, setStatutForm] = useState<Statut>(Statut.ATTENTE)
  const [saving, setSaving] = useState(false)
  const [formError, setFormError] = useState('')

  const [deletingIds, setDeletingIds] = useState<number[]>([])

  useEffect(() => {
    fetchTaches()
  }, [id])

  async function fetchTaches() {
    setLoading(true)
    try {
      const res = await fetch(`/api/mesProjetsDiriges/${id}`)
      const json = await res.json()
      if (!res.ok) throw new Error(json.message || 'Erreur chargement')
      setTaches(json.data.taches)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    if (!titre.trim()) {
      setFormError('Le titre est requis')
      return
    }
    setSaving(true)
    setFormError('')
    try {
      const res = await fetch('/api/taches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titre,
          description: descriptionForm,
          deadline: deadlineForm || undefined,
          projetId: id,
          statut: statutForm,
          sousTaches: [],
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Erreur création')

      // Rafraichir la liste
      await fetchTaches()
      setTitre('')
      setDescriptionForm('')
      setDeadlineForm('')
      setStatutForm(Statut.ATTENTE)
      setShowForm(false)
    } catch (err) {
      setFormError((err as Error).message)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(tacheId: number) {
    if (!window.confirm('Supprimer cette tâche ?')) return
    setDeletingIds((prev) => [...prev, tacheId])
    try {
      const res = await fetch(`/api/taches/${tacheId}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Échec suppression')
      setTaches((prev) => prev.filter((t) => t.id !== tacheId))
    } catch {
      alert('Erreur lors de la suppression.')
    } finally {
      setDeletingIds((prev) => prev.filter((i) => i !== tacheId))
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href={`/interfaceUtilisateur/mesProjetsDiriges/${id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          ← Retour au projet
        </Link>
        <h1 className="text-2xl font-bold">Tâches du projet</h1>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-sm"
        >
          {showForm ? 'Annuler' : '+ Nouvelle tâche'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleCreate}
          className="bg-white shadow rounded-lg p-4 space-y-3 border border-indigo-100"
        >
          <h2 className="font-semibold text-lg">Créer une tâche</h2>
          {formError && <p className="text-red-500 text-sm">{formError}</p>}

          <div>
            <label className="block text-sm font-medium mb-1">Titre *</label>
            <input
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={descriptionForm}
              onChange={(e) => setDescriptionForm(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Date limite</label>
              <input
                type="datetime-local"
                value={deadlineForm}
                onChange={(e) => setDeadlineForm(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Statut</label>
              <select
                value={statutForm}
                onChange={(e) => setStatutForm(e.target.value as Statut)}
                className="w-full border px-3 py-2 rounded"
              >
                <option value={Statut.ATTENTE}>En attente</option>
                <option value={Statut.EN_COURS}>En cours</option>
                <option value={Statut.TERMINE}>Terminé</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {saving ? 'Création...' : 'Créer la tâche'}
          </button>
        </form>
      )}

      {error && <p className="text-red-600">{error}</p>}

      {loading ? (
        <p>Chargement...</p>
      ) : taches.length === 0 ? (
        <p className="text-gray-500">Aucune tâche pour ce projet.</p>
      ) : (
        <table className="w-full border-collapse border rounded bg-white shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Titre</th>
              <th className="border p-2 text-left">Statut</th>
              <th className="border p-2 text-left">Deadline</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {taches.map((tache) => (
              <tr key={tache.id} className="hover:bg-gray-50">
                <td className="border p-2">{tache.titre}</td>
                <td className="border p-2">{STATUT_LABELS[tache.statut]}</td>
                <td className="border p-2">
                  {tache.deadline
                    ? new Date(tache.deadline).toLocaleDateString('fr-FR')
                    : 'Non définie'}
                </td>
                <td className="border p-2 space-x-3">
                  <button
                    onClick={() => handleDelete(tache.id)}
                    disabled={deletingIds.includes(tache.id)}
                    className="text-red-600 hover:underline text-sm disabled:opacity-50"
                  >
                    {deletingIds.includes(tache.id) ? 'Suppression...' : 'Supprimer'}
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
