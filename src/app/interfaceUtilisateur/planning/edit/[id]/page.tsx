'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

type Tache = {       
  id: number
  titre: string
  heure: string
  objectif?: string
  resultatAttendu?: string
  commentaires?: string
  etat?: boolean
  priorite?: boolean
}

type Planning = {
  id: number
  titre: string
  date: string
  responsableId?: number
  taches: Tache[]
}

export default function EditPlanningPage() {
  const router = useRouter()
  const { id } = useParams() as { id: string }

  const [planning, setPlanning] = useState<Planning | null>(null)
  const [loading, setLoading] = useState(true)
  const [titre, setTitre] = useState('')
  const [date, setDate] = useState('')
  const [taches, setTaches] = useState<Tache[]>([])
  const [submitting, setSubmitting] = useState(false)

  // Charger les données existantes du planning
  useEffect(() => {
    async function fetchPlanning() {
      try {
        const res = await fetch(`/api/planning/${id}`)
        const json = await res.json()

        if (res.ok) {
          const data = json.data
          setPlanning(data.data)
          setTitre(data.titre)
          setDate(data.date.slice(0, 10)) // YYYY-MM-DD
          setTaches(data.taches)
        }
      } catch (error) {
        console.error('Erreur de chargement', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchPlanning()
  }, [id])

  // Gestion de l'ajout d'une tâche
  const ajouterTache = () => {
    setTaches([...taches, { id: Date.now(), titre: '', heure: '', etat: false }])
  }

  // Modifier une tâche
  const modifierTache = <K extends keyof Tache>(
  index: number,
  field: K,
  value: Tache[K]) => {
    const nouvellesTaches = [...taches]
    nouvellesTaches[index] = { ...nouvellesTaches[index], [field]: value }
    setTaches(nouvellesTaches)
  }

  // Soumettre les modifications
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const res = await fetch(`/api/planning/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titre,
        date,
        taches,
        responsableId: planning?.responsableId,
      }),
    })

    if (res.ok) {
      router.push('/interfaceUtilisateur/planning/vue')   
    } else {
      const err = await res.json()
      alert(err.error || 'Erreur de mise à jour')
      setSubmitting(false)
    }
  }

  if (loading) return <p>Chargement...</p>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Modifier le planning</h1>
      <Link href="/interfaceUtilisateur/planning/vue" className="text-blue-600 hover:underline">
          ← Retour sur la liste des Plannings
      </Link>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium">Titre</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Tâches</h2>
          {taches.map((tache, index) => (
            <div key={index} className="border p-3 mb-3 rounded bg-gray-50">
              <input
                type="text"
                placeholder="Titre"
                value={tache.titre}
                onChange={(e) => modifierTache(index, 'titre', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="time"
                placeholder="Heure"
                value={tache.heure}
                onChange={(e) => modifierTache(index, 'heure', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <textarea
                placeholder="Objectif"
                value={tache.objectif || ''}
                onChange={(e) => modifierTache(index, 'objectif', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                placeholder="Résultat attendu"
                value={tache.resultatAttendu || ''}
                onChange={(e) => modifierTache(index, 'resultatAttendu', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              />
              <textarea
                placeholder="Commentaires"
                value={tache.commentaires || ''}
                onChange={(e) => modifierTache(index, 'commentaires', e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              />
              <div className="flex gap-4">
                <label>
                  <input
                    type="checkbox"
                    checked={tache.etat || false}
                    onChange={(e) => modifierTache(index, 'etat', e.target.checked)}
                  />
                  <span className="ml-2">Terminée</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={tache.priorite || false}
                    onChange={(e) => modifierTache(index, 'priorite', e.target.checked)}
                  />
                  <span className="ml-2">Priorité Élevée</span>
                </label>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={ajouterTache}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Ajouter une tâche
          </button>
        </div>

        <button
          type="submit"
          disabled= {submitting} 
          className={`w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 hover:cursor-pointer disabled:cursor-not-allowed transition-opacity duration-200 ${submitting ? 'opacity-50' : 'opacity-100'} `}
        >
          {submitting ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </form>
    </div>
  )
}
