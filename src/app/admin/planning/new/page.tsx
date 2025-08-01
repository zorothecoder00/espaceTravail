'use client'  

import { useState, useEffect } from 'react'     
import { useRouter } from 'next/navigation'
import Link from 'next/link'  // <-- Import Link ici

type Utilisateur = {
  id: string
  nom: string
  prenom: string
}

type TachePlanning = {
  titre: string
  heure: string
  objectif?: string
  resultatAttendu?: string
  etat: boolean
  commentaires?: string
  priorite?: boolean
}

export default function NouveauPlanning() {
  const router = useRouter()

  const [titre, setTitre] = useState('')
  const [date, setDate] = useState('')
  const [taches, setTaches] = useState<TachePlanning[]>([])
  const [responsableId, setResponsableId] = useState('')
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // 👇 Fetch des utilisateurs
  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const res = await fetch('/api/utilisateurs')
        if (!res.ok) throw new Error('Erreur lors du chargement des utilisateurs')
        const data = await res.json()
        setUtilisateurs(data.data)
      } catch (err) {
        console.error('Erreur fetch utilisateurs :', err)
        setError((err as Error).message)
      }
    }

    fetchUtilisateurs()
  }, [])

  const handleAddTache = () =>
  setTaches([
    ...taches,
    {
      titre: '',
      heure: '',
      objectif: '',
      resultatAttendu: '',
      commentaires: '',
      etat: false,
      priorite: false,  
    },
  ])
  const handleRemoveTache = (index: number) => {
    const newTaches = [...taches]
    newTaches.splice(index, 1)
    setTaches(newTaches)
  }
  const handleChangeTache = <K extends keyof TachePlanning>(
  index: number,
  field: K,
  value: TachePlanning[K]) => {
    setTaches((prevTaches) => {
      const updated = [...prevTaches]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/planning', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titre,
          date,
          taches,     
          responsableId,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Erreur lors de la création du planning')
      }

      setSuccess('Planning créé avec succès')
      setError('')
      setSubmitting(false)
      router.push('/admin/planning/vue') // à adapter si nécessaire
    } catch (err) {
      console.error("Erreur interne", err)
      setError((err as Error).message)
      setSuccess('')
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Créer un nouveau planning</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      {/* Lien pour revenir à la page planning vue */}
      <div className="mb-6">
        <Link
          href="/admin/planning/vue"
          className="text-blue-600 hover:underline"
        >
          ← Retour à la liste des plannings
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <div>
          <label className="block font-semibold mb-2">Tâches</label>
          {taches.map((tache, index) => (
            <div key={index} className="border p-4 mb-4 rounded space-y-2 bg-gray-50">
              <input
                type="text"
                placeholder="Titre de la tâche"
                value={tache.titre}
                onChange={(e) => handleChangeTache(index, 'titre', e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="time"
                value={tache.heure}
                onChange={(e) => handleChangeTache(index, 'heure', e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                placeholder="Objectif"
                value={tache.objectif ??''}
                onChange={(e) => handleChangeTache(index, 'objectif', e.target.value)}
                className="w-full border p-2 rounded"
                rows={2}
              />
              <textarea
                placeholder="Résultat attendu"
                value={tache.resultatAttendu ??''}
                onChange={(e) => handleChangeTache(index, 'resultatAttendu', e.target.value)}
                className="w-full border p-2 rounded"
                rows={2}
              />
              <textarea
                placeholder="Commentaires"
                value={tache.commentaires ??''}
                onChange={(e) => handleChangeTache(index, 'commentaires', e.target.value)}
                className="w-full border p-2 rounded"
                rows={2}
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={tache.etat ?? false}
                  onChange={(e) => handleChangeTache(index, 'etat', e.target.checked)}
                />
                <span>Terminée ?</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={tache.priorite ?? false}
                  onChange={(e) => handleChangeTache(index, 'priorite', e.target.checked)}
                />
                <span>Priorité Élevée ?</span>
              </label>
              <button type="button" onClick={() => handleRemoveTache(index)} className="text-red-600 hover:underline hover:cursor-pointer">
                Supprimer cette tâche
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTache} className="text-blue-600 hover:underline hover:cursor-pointer">
            + Ajouter une tâche
          </button>
        </div>

        <div>
          <label>Responsable</label>
          <select
            value={responsableId}
            onChange={(e) => setResponsableId(e.target.value)}
            className="w-full border p-2 rounded"
          >
          <option value="">-- Sélectionnez un responsable(optionnel) --</option>
            {utilisateurs.map((u) => (
              <option key={u.id} value={u.id}>
                {u.prenom} {u.nom}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"  
          disabled={submitting}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer disabled:cursor-not-allowed transition-opacity duration-200 ${submitting ? 'opacity-50' : 'opacity-100'} `}
        >
          {submitting ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </form>
    </div>
  )
}
