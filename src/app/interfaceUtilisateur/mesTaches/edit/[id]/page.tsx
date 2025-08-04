'use client'

import { useState } from 'react' 
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'  
import { Statut } from '@prisma/client'

export default function EditTachePersonnellePage() {
  const router = useRouter()
  const { id } = useParams() as { id: string }

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const [statutPersonnel, setStatutPersonnel] = useState<Statut>('ATTENTE')
  const [dateDebut, setDateDebut] = useState<string>('')  
  const [dateFin, setDateFin] = useState<string>('')      

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setSuccessMsg('')

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

      setSuccessMsg('Modification enregistrée avec succès !')

      // Après 2 secondes, redirection vers la liste
      setTimeout(() => {
        router.push('/interfaceUtilisateur/mesTaches/liste')
      }, 2000)
    } catch (e) {
      console.error('Erreur interne', e)
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('Une erreur inconnue est survenue.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Modifier la tâche</h2>

      <Link
        href="/interfaceUtilisateur/mesTaches/liste"
        className="text-blue-600 underline mb-4 inline-block"
      >
        ← Retour à la liste des tâches
      </Link>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}
      {loading && <p>Chargement...</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Statut Personnel</label>
          <select
            className="w-full border rounded p-2"
            value={statutPersonnel}
            onChange={(e) => setStatutPersonnel(e.target.value as Statut)}
            disabled={loading}
          >
            {Object.values(Statut).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Date de début</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date de fin</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          Enregistrer
        </button>
      </form>
    </div>
  )
}
