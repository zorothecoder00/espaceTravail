'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Statut, Priorite, RoleProjet } from '@prisma/client'
import Link from 'next/link'   

type Projet = {   
  id: number
  nom: string
}

type MembreProjet = {
  id: number
  nom: string
  prenom: string
  role: RoleProjet
}

// Type explicite du formulaire
type Tache = {
  titre: string
  description: string
  projetId: string
  deadline: string
  statut: Statut
}

type SousTache = {
  id?: number // Ajoute cette ligne
  titre: string
  description?: string
  deadline?: string
  statut: Statut
  responsableId?: string
  priorite?: Priorite
}


export default function ModifierTachePage() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const [form, setForm] = useState<Tache>({
    titre: '',
    description: '',
    projetId: '',
    deadline: '',
    statut: Statut.ATTENTE,
  })

  const [projets, setProjets] = useState<Projet[]>([])
  const [membres, setMembres] = useState<MembreProjet[]>([])
  const [sousTaches, setSousTaches] = useState<SousTache[]>([])
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  // **NOUVEAU**: Charger les membres dès que projetId change
  useEffect(() => {
    if (!form.projetId) {
      setMembres([]) // vide si pas de projet sélectionné
      return
    }

    fetch(`/api/projets/${form.projetId}/membres`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setMembres(data.data)
        } else {
          setMembres([])
          console.error("Format inattendu membres :", data)
        }
      })
      .catch(err => {
        setMembres([])
        console.error("Erreur chargement membres :", err)
      })
  }, [form.projetId])

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

           // Hydrater les sous-tâches s'il y en a
          if (Array.isArray(t.sousTachesProjet)) {
            const formatted = t.sousTachesProjet.map((st: SousTache) => ({
              id: st.id,
              titre: st.titre,
              description: st.description || '',
              deadline: st.deadline ? st.deadline.slice(0, 16) : '',
              statut: st.statut,
              responsableId: st.responsableId ? String(st.responsableId) : undefined,
              priorite: st.priorite || Priorite.MOYENNE,
            }))
            setSousTaches(formatted)
          }
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
    setIsSubmitting(true)

    try {
      const res = await fetch(`/api/taches/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          projet: form.projetId,
          sousTaches: sousTaches.length > 0 ? sousTaches : undefined,
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
    } finally {
      setIsSubmitting(false)
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

        {/* Sous-tâches */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sous-tâches</h3>

          {sousTaches.map((sousTache, index) => (
            <div key={index} className="border p-4 rounded bg-gray-50 space-y-2">
              <input
                type="text"
                placeholder="Titre"
                value={sousTache.titre}
                onChange={(e) => {
                  const updated = [...sousTaches]
                  updated[index].titre = e.target.value
                  setSousTaches(updated)
                }}
                className="w-full border px-2 py-1 rounded"
                required
              />

              <input
                type="text"
                placeholder="Description"
                value={sousTache.description || ''}
                onChange={(e) => {
                  const updated = [...sousTaches]
                  updated[index].description = e.target.value
                  setSousTaches(updated)
                }}
                className="w-full border px-2 py-1 rounded"
              />

              <input
                type="datetime-local"
                value={sousTache.deadline || ''}
                onChange={(e) => {
                  const updated = [...sousTaches]
                  updated[index].deadline = e.target.value
                  setSousTaches(updated)
                }}
                className="w-full border px-2 py-1 rounded"
              />

              <select
                value={sousTache.statut}
                onChange={(e) => {
                  const updated = [...sousTaches]
                  updated[index].statut = e.target.value as Statut
                  setSousTaches(updated)
                }}
                className="w-full border px-2 py-1 rounded"
              >
                <option value={Statut.ATTENTE}>🕓 En attente</option>
                <option value={Statut.EN_COURS}>🔄 En cours</option>
                <option value={Statut.TERMINE}>✅ Terminée</option>
              </select>

              <label className="block mb-1 font-medium">Responsable</label>
              <select
                value={sousTache.responsableId || ''}
                onChange={(e) => {
                  const updated = [...sousTaches]
                  updated[index].responsableId = e.target.value
                  setSousTaches(updated)
                }}
                className="w-full border px-2 py-1 rounded"
              >
                <option value="">-- Choisir un responsable --</option>
                {membres.map(membre => (
                  <option key={membre.id} value={membre.id.toString()}>
                    {membre.nom} {membre.prenom} ({membre.role})
                  </option>
                ))}
              </select>

              <select
                value={sousTache.priorite || Priorite.MOYENNE}
                onChange={(e) => {
                  const updated = [...sousTaches]
                  updated[index].priorite = e.target.value as Priorite
                  setSousTaches(updated)
                }}
                className="w-full border px-2 py-1 rounded"
              >
                <option value={Priorite.BASSE}>🟢 Basse</option>
                <option value={Priorite.MOYENNE}>🟡 Moyenne</option>
                <option value={Priorite.ELEVEE}>🔴 Haute</option>
              </select>

              <button
                type="button"
                onClick={() => {
                  const updated = sousTaches.filter((_, i) => i !== index)
                  setSousTaches(updated)
                }}
                className="text-red-600 text-sm underline"
              >
                Supprimer cette sous-tâche
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              setSousTaches([
                ...sousTaches,
                {
                  titre: '',
                  description: '',
                  deadline: '',
                  statut: Statut.ATTENTE,
                  responsableId: '',
                  priorite: Priorite.MOYENNE,
                },
              ])
            }
            className="mt-2 text-blue-600 underline hover:cursor-pointer"
          >
            + Ajouter une sous-tâche
          </button>
        </div>

        <div>
          <button type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white px-4 py-2 rounded ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:cursor-pointer'
            }`}
          >
            {isSubmitting ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </div>
      </form>
    </div>
  )
}
