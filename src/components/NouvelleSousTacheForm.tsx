'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Priorite, Statut } from '@prisma/client'
import Link from 'next/link'

export default function NouvelleSousTache() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tacheId = searchParams?.get('tacheId') ?? ''

  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [priorite, setPriorite] = useState<Priorite>('MOYENNE')
  const [statut, setStatut] = useState<Statut>('ATTENTE')
  const [erreur, setErreur] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!tacheId) {
      setErreur('ID de tâche manquant.')
      return
    }

    if (!titre.trim()) {
      setErreur('Le titre est obligatoire.')
      return
    }

    setLoading(true)
    setErreur('')

    try {
      const res = await fetch(`/api/mesTaches/${tacheId}/sousTaches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tacheId: Number(tacheId),
          sousTaches: [
            {
              titre,
              description,
              deadline,
              priorite,
              statut,
            },
          ],
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Erreur lors de la création')
      }

      router.push('/interfaceUtilisateur/mesTaches/liste')
    } catch (err) {
      console.log("Erreur inconnue")
      const message = err instanceof Error ? err.message : 'Erreur inconnue.'
      setErreur(message)
    } finally {
      setLoading(false)
    }
  }     

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Ajouter une sous-tâche</h1>

      <div className="mb-4">
        <Link href="/interfaceUtilisateur/mesTaches/liste" className="text-blue-600 hover:underline">
          ← 🗂️ Retour à mes tâches
        </Link>
      </div>

      {erreur && <p className="text-red-500 mb-4">{erreur}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Titre *</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date limite</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex gap-4">
          <div>
            <label className="block mb-1 font-medium">Priorité</label>
            <select
              value={priorite}
              onChange={(e) => setPriorite(e.target.value as Priorite)}
              className="p-2 border rounded"
            >
              <option value="BASSE">Basse</option>
              <option value="MOYENNE">Moyenne</option>
              <option value="ELEVEE">Élevée</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Statut</label>
            <select
              value={statut}
              onChange={(e) => setStatut(e.target.value as Statut)}
              className="p-2 border rounded"
            >
              <option value="ATTENTE">À faire</option>
              <option value="EN_COURS">En cours</option>
              <option value="TERMINE">Terminée</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-no-pointer hover:cursor-pointer"
          >
            {loading ? 'Ajout en cours...' : 'Créer la sous-tâche'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-600 underline"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  )
}
