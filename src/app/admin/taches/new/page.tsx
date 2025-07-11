'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Statut } from "@prisma/client"; 
import Link from 'next/link'         
  
type Projet = {
  id: number
  nom: string
}

// Type explicite du formulaire
type FormState = {
  titre: string
  description: string
  projetId: string
  deadline: string
  statut: Statut
}

export default function NouvelleTache() {
  const router = useRouter()

  // useState avec type explicite et valeur initiale correcte
  const [form, setForm] = useState<FormState>({
    titre: '',
    description: '',
    projetId: '',
    deadline: '',
    statut: Statut.ATTENTE,   // Valeur initiale correcte ici
  })
  const [projets, setProjets] = useState<Projet[]>([])
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)


  useEffect(() => {
    fetch('/api/projets')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setProjets(data.data)
        } else {
          console.error("Format inattendu :", data)
        }
      })
      .catch(err => {
        console.error("Erreur de chargement des projets :", err)
      })
  }, [])


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSuccess('')
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/taches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSuccess('✅ Tâche enregistrée avec succès.')
        setTimeout(() => {
          router.push('/admin/taches/liste')
        }, 1500) // attend 1,5 seconde avant la redirection
      } else {
        const data = await res.json()
        setError(data.message || "❌ Une erreur est survenue lors de l'enregistrement.")   
      }
    } catch (err) {
      console.error(err)
      setError("❌ Une erreur réseau est survenue.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
  <div className="p-6 max-w-xl mx-auto">  
    {/* Lien de retour vers la liste des tâches */}
    <div className="mb-4">
      <Link href="/admin/taches/liste" className="text-blue-600 hover:underline">
        ← Retour à la liste des tâches
      </Link>
    </div>
    <h2 className="text-2xl font-bold mb-4">Nouvelle tâche</h2>

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
          placeholder="Entrez le titre de la tâche"
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
          placeholder="Décrivez la tâche"
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
            <option key={p.id} value={p.id.toString()}>{p.nom}</option>
          ))}
        </select>
      </div>

      {/* Deadline */}
      <div>
        <label className="block mb-1 font-medium">Date limite (deadline)</label>
        <input
          type="datetime-local"
          value={form.deadline}
          onChange={(e) => setForm({ ...form, deadline: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          placeholder="Choisissez une date et une heure"
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

      {/* Bouton */}
      <div>
        <button 
        type="submit"
        disabled={isSubmitting}
            className={`bg-blue-600 text-white px-4 py-2 rounded ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:cursor-pointer'
            }`}
          >
            {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    </form>
  </div>
)
}
