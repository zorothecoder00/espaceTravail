'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Statut } from '@prisma/client'
import Link from 'next/link'

type Projet = {
  id: number
  nom: string
}

type FormState = {
  titre: string
  description: string
  projetId: string
  deadline: string
  statut: Statut
}

export default function ModifierTachePage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const [form, setForm] = useState<FormState>({
    titre: '',
    description: '',
    projetId: '',
    deadline: '',
    statut: Statut.ATTENTE,
  })

  const [projets, setProjets] = useState<Projet[]>([])
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  // Charger tous les projets pour la liste
  useEffect(() => {
    fetch('/api/projets')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setProjets(data.data)
        } else {
          console.error("Format inattendu :", data)
        }
      })
      .catch((err) => {
        console.error("Erreur de chargement des projets :", err)
      })
  }, [])

  // Charger la tâche actuelle
  useEffect(() => {
    if (!id) return
    const fetchTache = async () => {
      try {
        const res = await fetch(`/api/taches/${id}`)
        const json = await res.json()
        if (!res.ok) {
          setError(json.message || 'Erreur lors du chargement de la tâche')
        } else {
          const t = json.data
          setForm({
            titre: t.titre || '',
            description: t.description || '',
            projetId: t.projetId.toString(),
            deadline: t.deadline ? t.deadline.slice(0, 16) : '',
            statut: t.statut,
          })
        }
      } catch (err) {
        console.error("Erreur lors du chargement de la tâche :", err)
        setError('Erreur réseau lors du chargement de la tâche')
      } finally {
        setLoading(false)
      }
    }

    fetchTache()
  }, [id])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSuccess('')
    setError('')

    try {
      const res = await fetch(`/api/taches/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          projet: form.projetId,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess('✅ Tâche modifiée avec succès.')
        setTimeout(() => {
          router.push('/admin/taches/liste')
        }, 1500)
      } else {
        setError(data.message || "❌ Une erreur est survenue lors de la mise à jour.")
      }
    } catch (err) {
      console.error(err)
      setError("❌ Une erreur réseau est survenue.")
    }
  }

  if (loading) return <p className="p-6">Chargement de la tâche...</p>

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="mb-4">
        <Link href="/admin/taches/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des tâches
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4">Modifier une tâche</h2>

      {success && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 border border-green-300">
          {success}
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4 border border-red-300">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Titre */}
        <div>
          <label className="block mb-1 font-medium">Titre</label>
          <input
            type="text"
            value={form.titre}
            onChange={(e) => setForm({ ...form, titre: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Projet */}
        <div>
          <label className="block mb-1 font-medium">Projet associé</label>
          <select
            value={form.projetId}
            onChange={(e) => setForm({ ...form, projetId: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">-- Choisir un projet --</option>
            {projets.map((p) => (
              <option key={p.id} value={p.id.toString()}>
                {p.nom}
              </option>
            ))}
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 font-medium">Date limite</label>
          <input
            type="datetime-local"
            value={form.deadline}
            onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Statut */}
        <div>
          <label className="block mb-1 font-medium">Statut de la tâche</label>
          <select
            value={form.statut}
            onChange={(e) => setForm({ ...form, statut: e.target.value as Statut })}
            className="w-full border px-3 py-2 rounded"
          >
            <option value={Statut.ATTENTE}>🕓 En attente</option>
            <option value={Statut.EN_COURS}>🔄 En cours</option>
            <option value={Statut.TERMINE}>✅ Terminée</option>
          </select>
        </div>

        <div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Enregistrer les modifications
          </button>
        </div>
      </form>
    </div>
  )
}
