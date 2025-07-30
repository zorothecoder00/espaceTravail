'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Statut } from '@prisma/client'
import Link from 'next/link'  

const SousTacheEditPage = () => {
  const router = useRouter()
  const { id } = useParams() as { id: string }

  const [loading, setLoading] = useState(false)
  const [statutPersonnel, setStatutPersonnel] = useState<Statut>('ATTENTE')
  const [dateDebut, setDateDebut] = useState<string | ''>('') 
  const [dateFin, setDateFin] = useState<string | ''>('') 
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setError(null)
    setLoading(true)

    try {
      const res = await fetch(`/api/mesSousTaches/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          statutPersonnel,
          dateDebut: dateDebut || null,
          dateFin: dateFin || null,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Erreur lors de la mise à jour')
      }

      setMessage('Mise à jour réussie !')
      // Après 2 secondes, redirection vers la liste
      setTimeout(() => {
        router.push('/interfaceUtilisateur/mesTaches/liste')
      }, 2000)
    } catch (err) {
      console.error('Erreur interne', err)
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Une erreur inconnue est survenue.')
      }
    }finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="p-4">Chargement...</div>
  if (error) return <div className="p-4 text-red-600">{error}</div>

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Modifier la sous-tâche</h1>

      <Link
        href="/interfaceUtilisateur/mesTaches/liste"
        className="text-blue-600 underline mb-4 inline-block"
      >
        ← Retour à la liste des tâches
      </Link>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Statut personnel</label>
          <select
            value={statutPersonnel}
            onChange={(e) => setStatutPersonnel(e.target.value as Statut)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          >
            <option value="">-- Choisir --</option>
            {Object.values(Statut).map((statut) => (
              <option key={statut} value={statut}>
                {statut}
              </option>
            ))}  
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Date de début</label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date de fin</label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enregistrer
        </button>

        {message && <p className="text-green-600">{message}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  )
}

export default SousTacheEditPage
