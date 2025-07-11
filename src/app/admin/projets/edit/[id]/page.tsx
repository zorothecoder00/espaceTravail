'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Statut } from '@prisma/client'

/* ───────── Types utilisés ───────── */
interface Departement {
  id: number
  nom: string
}

interface User {
  id: number
  nom: string
  prenom: string
}

export default function EditProjetPage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  /* Champs du formulaire */
  const [nom, setNom] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [statut, setStatut] = useState<Statut>(Statut.ATTENTE)
  const [departementId, setDepartementId] = useState('')
  const [chefProjetId, setChefProjetId] = useState('')

  /* Ressources externes pour les listes déroulantes */
  const [departements, setDepartements] = useState<Departement[]>([])
  const [utilisateurs, setUtilisateurs] = useState<User[]>([])

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  /* ───── 1. Charger départements & users (listes) ───── */
  useEffect(() => {
    fetch('/api/departements')
      .then((res) => res.json())
      .then((d) => setDepartements(d.data))
      .catch(() => setError('Erreur chargement départements'))

    fetch('/api/utilisateurs')
      .then((res) => res.json())
      .then((d) => setUtilisateurs(d.data))
      .catch(() => setError('Erreur chargement utilisateurs'))
  }, [])

  /* ───── 2. Préremplir les valeurs du projet ───── */
  useEffect(() => {
    if (!id) return
    async function fetchProjet() {
      try {
        const res = await fetch(`/api/projets/${id}`)
        const json = await res.json()
        if (!res.ok) {
          setError(json.message || 'Projet introuvable')
        } else {
          const p = json.data
          setNom(p.nom)
          setDescription(p.description || '')
          setDeadline(p.deadline ? p.deadline.slice(0, 16) : '') // ISO → local
          setStatut(p.statut)
          setDepartementId(String(p.departement?.id || ''))
          setChefProjetId(String(p.chefProjet?.id || ''))
        }
      } catch {
        setError('Erreur chargement projet')
      } finally {
        setLoading(false)
      }
    }
    fetchProjet()
  }, [id])

  /* ───── 3. Soumission (PUT) ───── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nom || !departementId || !chefProjetId) {
      setError('Champs obligatoires manquants')
      return
    }
    setSaving(true)
    setError('')
    setMessage('')
    const res = await fetch(`/api/projets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom,
        description,
        deadline,
        statut,
        departement: departementId,
        chefProjet: chefProjetId,
      }),
    })
    const data = await res.json()
    if (res.ok) {
      setMessage('Projet mis à jour ✅')
      setTimeout(() => router.push('/admin/projets/liste'), 1000)
    } else {
      setError(data.message || 'Erreur mise à jour')
    }
    setSaving(false)
  }

  if (loading) return <p className="p-6">Chargement…</p>

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <div className="mb-4">
        <Link href="/admin/projets/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des projets
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-4">Modifier le projet</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {message && <p className="text-green-600 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom */}
        <div>
          <label className="block text-sm font-medium">Nom *</label>
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            rows={4}
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 font-medium">Date limite</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Statut */}
        <div>
          <label className="block mb-1 font-medium">Statut</label>
          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value as Statut)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value={Statut.ATTENTE}>🕓 En attente</option>
            <option value={Statut.EN_COURS}>🔄 En cours</option>
            <option value={Statut.TERMINE}>✅ Terminée</option>
          </select>
        </div>

        {/* Département */}
        <div>
          <label className="block text-sm font-medium">Département *</label>
          <select
            value={departementId}
            onChange={(e) => setDepartementId(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          >
            <option value="">-- Choisir --</option>
            {departements.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Chef de projet */}
        <div>
          <label className="block text-sm font-medium">Chef de projet *</label>
          <select
            value={chefProjetId}
            onChange={(e) => setChefProjetId(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          >
            <option value="">-- Choisir --</option>
            {utilisateurs.map((u) => (
              <option key={u.id} value={u.id}>
                {u.prenom} {u.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Sauvegarde…' : 'Enregistrer'}
        </button>
      </form>
    </div>
  )
}
