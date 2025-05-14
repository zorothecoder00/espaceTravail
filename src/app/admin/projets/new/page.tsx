'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateProjetPage() {
  const [nom, setNom] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [statut, setStatut] = useState('')
  const [departementId, setDepartementId] = useState('')
  const [departements, setDepartements] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Récupérer tous les départements pour le menu déroulant
    fetch('/api/departements')
      .then(res => res.json())
      .then(data => setDepartements(data))
      .catch(() => setError('Erreur lors du chargement des départements'))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!nom || !departementId) {
      setError('Veuillez remplir tous les champs obligatoires')
      setLoading(false)
      return
    }

    const res = await fetch('/api/projets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, description, deadline, statut, departementId: Number(departementId) }),
    })

    if (res.ok) {
      router.push('/admin/projets/liste')
    } else {
      const data = await res.json()
      setError(data.message || 'Une erreur est survenue')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Créer un nouveau projet</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nom du projet *</label>
          <input
            type="text"
            value={nom}
            onChange={e => setNom(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            rows={4}
          />
        </div>

        <input
          type="datetime-local"
          value={form.deadline}
          onChange={(e) => setForm({ ...form, deadline: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        /> 

        <select
          value={form.statut}
          onChange={(e) => setForm({ ...form, statut: e.target.value })}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="ATTENTE">En attente</option>
          <option value="EN_COURS">En cours</option>
          <option value="TERMINE">Terminée</option>
        </select>

        <div>  
          <label className="block text-sm font-medium">Département *</label>
          <select
            value={departementId}
            onChange={e => setDepartementId(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          >
            <option value="">-- Choisir un département --</option>
            {departements.map(dep => (
              <option key={dep.id} value={dep.id}>
                {dep.nom}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Création...' : 'Créer le projet'}
        </button>
      </form>
    </div>
  )
}
