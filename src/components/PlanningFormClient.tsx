'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export default function PlanningFormClient() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const defaultDate = searchParams?.get('date') || ''
  const [titre, setTitre] = useState('')
  const [dateDebut, setDateDebut] = useState(defaultDate)
  const [taches, setTaches] = useState([{ id: Date.now(), contenu: '' }])

  const handleAddTache = () => {
    setTaches([...taches, { id: Date.now(), contenu: '' }])
  }

  const handleChangeTache = (id: number, contenu: string) => {
    setTaches(taches.map(t => (t.id === id ? { ...t, contenu } : t)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const slug = titre.toLowerCase().replace(/\s+/g, '-')

    const payload = {
      titre,
      date: dateDebut,
      slug,
      taches: taches.map(t => t.contenu).filter(Boolean),
    }

    const res = await fetch('/api/planning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {     
      const { id } = await res.json()
      router.push(`/interfaceUtilisateur/planning/vue/${id}`)
    } else {
      alert('Erreur lors de la création du planning')
    }
  }

  return (
    <div className="relative z-10 p-6 max-w-xl mx-auto">
      <div className="mb-4">
        <Link
          href="/interfaceUtilisateur/planning/vue"
          className="text-blue-600 hover:underline"
        >
          &larr; Retour à la liste des plannings
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Créer un nouveau planning
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl shadow-lg p-6">
        <div>
          <label className="block font-medium text-gray-700">Titre</label>
          <input
            type="text"
            value={titre}
            onChange={e => setTitre(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={dateDebut}
            onChange={e => setDateDebut(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Tâches</label>
          {taches.map((t, index) => (
            <input
              key={t.id}
              type="text"
              placeholder={`Tâche ${index + 1}`}
              value={t.contenu}
              onChange={e => handleChangeTache(t.id, e.target.value)}
              className="w-full border rounded p-2 mt-1"
            />
          ))}
          <button
            type="button"
            onClick={handleAddTache}
            className="mt-2 text-blue-600 hover:underline"
          >
            + Ajouter une tâche
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
        >
          Enregistrer le planning
        </button>
      </form>
    </div>
  )
}
