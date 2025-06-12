'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Statut } from "@prisma/client";
import Link from 'next/link' 

interface Departement {    
  id: number
  nom: string
}
 

export default function CreateProjetPage() {
  const [nom, setNom] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [statut, setStatut] = useState<Statut>(Statut.ATTENTE)
  const [departementId, setDepartementId] = useState('')
  const [departements, setDepartements] = useState<Departement[]>([])
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
      {/* Lien de retour vers la liste des projets */}
      <div className="mb-4">
        <Link href="/admin/projets/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des projets
        </Link>
      </div>
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

        <div>
          <label className="block mb-1 font-medium">Date limite (deadline)</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          /> 
        </div>

        <div>
          <label className="block mb-1 font-medium">Statut du projet</label>
          <select
            value={statut}
            onChange={e => setStatut(e.target.value as Statut)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value={Statut.ATTENTE}>🕓 En attente</option>
            <option value={Statut.EN_COURS}>🔄 En cours</option>
            <option value={Statut.TERMINE}>✅ Terminée</option>
          </select>
        </div>

        <div>  
          <label className="block text-sm font-medium">Département associé*</label>
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer disabled:opacity-50"
        >
          {loading ? 'Création...' : 'Créer le projet'}
        </button>
      </form>
    </div>
  )
}
