'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Statut } from '@prisma/client'

export default function EditTachePersonnellePage() {
  const router = useRouter()
  const { id } = useParams() as { id: string }

  const [error, setError] = useState('')

  // Valeurs contrôlées, initialisées vides / par défaut
  const [statutPersonnel, setStatutPersonnel] = useState<Statut>('ATTENTE')
  const [dateDebut, setDateDebut] = useState<string>('')  // format yyyy-MM-dd
  const [dateFin, setDateFin] = useState<string>('')      // format yyyy-MM-dd

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch(`/api/mesTaches/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          statutPersonnel,
          dateDebut: dateDebut || null,
          dateFin: dateFin || null,
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.message || 'Erreur lors de la mise à jour')
      }

      router.push('/interfaceUtilisateur/mesTaches/liste')
    } catch (e) {
      console.error('Erreur interne', e)
      setError(e.message)
    }
  

  if (loading) return <p>Chargement...</p>
  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Modifier la tâche</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Statut</label>
          <select
            className="w-full border rounded p-2"
            value={statutPersonnel}
            onChange={(e) => setStatutPersonnel(e.target.value as Statut)}
          >
            {Object.values(Statut).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Deadline</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enregistrer
        </button>
      </form>
    </div>
  )
}
