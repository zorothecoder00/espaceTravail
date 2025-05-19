'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Statut } from "@prisma/client"; 

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

  useEffect(() => {
    fetch('/api/projets')
      .then(res => res.json())
      .then(setProjets)
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/taches', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) router.push('/admin/taches/liste')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Nouvelle tâche</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={form.titre}
          onChange={(e) => setForm({ ...form, titre: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        />

        <select
          value={form.projetId}
          onChange={(e) => setForm({ ...form, projetId: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        >
          <option value="">-- Choisir un projet --</option>
          {projets.map((p) => (
            <option key={p.id} value={p.id.toString()}>{p.nom}</option> // bien mettre string
          ))}
        </select>

        <input
          type="datetime-local"
          value={form.deadline}
          onChange={(e) => setForm({ ...form, deadline: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        /> 

        <select
          value={form.statut}
          onChange={(e) => setForm({ ...form, statut: e.target.value as Statut })} // cast explicite ici
          className="w-full border px-3 py-2 rounded"
        >
          <option value={Statut.ATTENTE}>En attente</option>
          <option value={Statut.EN_COURS}>En cours</option>
          <option value={Statut.TERMINE}>Terminée</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enregistrer
        </button>
      </form>
    </div>
  )
}
