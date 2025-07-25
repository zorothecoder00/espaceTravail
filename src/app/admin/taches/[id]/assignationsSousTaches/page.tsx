'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' 
import Link from 'next/link'
import { toast } from 'react-toastify'
import { Statut } from '@prisma/client'    

interface Tache {
  id: number,
  titre: string
}

interface User {
  id: number
  nom: string
  estAssigne: boolean
  statutPersonnel?: Statut,
  dateDebut?: string,
  dateFin?: string,
}

interface SousTacheProjet {
  id: number   
  titre: string
  tache: Tache
}

export default function AssignationsSousTaches() {
  const { id } = useParams() as { id: string }
  const [sousTaches, setSousTaches] = useState<SousTacheProjet[]>([])
  const [selectedSousTacheId, setSelectedSousTacheId] = useState<number | ''>('')
  const [utilisateurs, setUtilisateurs] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  // Charger les sous-tâches
  useEffect(() => {
    async function fetchSousTaches() {
      setLoading(true)
      try {
  
        const res = await fetch(`/api/taches/${id}/assignationsSousTaches`)
        if (!res.ok) throw new Error("Erreur chargement sous-tâches")
        const json = await res.json()
        setSousTaches(json.data)

      } catch (err) {
        console.error('Erreur lors de la récupération', err)
        toast.error("Erreur chargement sous-tâches")
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchSousTaches()
  }, [id])

  // Charger assignations pour une sous-tâche sélectionnée
  useEffect(() => {
    async function fetchAssignations() {
      if (!selectedSousTacheId) return

      setLoading(true)
      try {

        const res = await fetch(`/api/taches/${id}/assignationsSousTaches?sousTacheid=${selectedSousTacheId}`)
        if (!res.ok) throw new Error("Erreur chargement assignations")

        const json = await res.json()
        setUtilisateurs(json.data.utilisateurs)
      } catch (err) {
        console.error("Erreur chargement assignations", err)
        toast.error("Erreur chargement assignations")
      } finally {
        setLoading(false)
      }
    }

    fetchAssignations()
  }, [selectedSousTacheId, id])

  const toggleAssignation = (userId: number) => {
    setUtilisateurs((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, estAssigne: !user.estAssigne } : user
      )
    )
  }

  const handleSubmit = async () => {
    if (!selectedSousTacheId) {
      toast.error("Veuillez sélectionner une sous-tâche.")
      return
    }
    const utilisateursIds = utilisateurs.filter(u => u.estAssigne).map(u => u.id)

    try {
      const res = await fetch(`/api/taches/${id}/assignationsSousTaches`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ utilisateursIds, sousTacheId: selectedSousTacheId }),
      })

      if (res.ok) {
        toast.success("Assignations mises à jour.")
      } else {
        const err = await res.json()
        toast.error(`Erreur: ${err.error || 'Inconnue'}`)
      }
    } catch (err) {
      console.error("Erreur lors de l’enregistrement", err)
      toast.error("Erreur lors de l’enregistrement.")
    }
  }

  return (
  <div className="p-4 space-y-6">
    <h1 className="text-2xl font-bold">Assignation des sous-tâches de la tâche # ${id}</h1>
    <Link href="/admin/taches/liste" className="text-blue-600 hover:underline text-sm">
          ← Retour à la liste des tâches
    </Link>

    {loading ? (
      <p className="text-blue-500 mt-2">Chargement des sous-tâches...</p>
    ) : sousTaches.length === 0 ? (
      <p className="text-gray-500 mt-2">Aucune sous-tâche disponible pour cette tâche.</p>
    ) : (
      <div>
        <label htmlFor="sousTacheSelect" className="block mb-1">
          Sélectionner une sous-tâche
        </label>
        <select
          id="sousTacheSelect"
          value={selectedSousTacheId}
          onChange={(e) => {
            const val = e.target.value
            setSelectedSousTacheId(val === '' ? '' : Number(val))
          }}
          className="border rounded px-3 py-2 w-full"
        >
          <option value="">-- Sélectionnez --</option>
          {sousTaches.map((s) => (
            <option key={s.id} value={s.id}>
              {s.titre}
            </option>
          ))}
        </select>
      </div>
    )}

    {selectedSousTacheId !== '' && (
      <div className="border p-4 rounded shadow space-y-4">
        <h2 className="text-lg font-semibold">Utilisateurs assignables</h2>

        {loading ? (
          <p>Chargement...</p>
        ) : utilisateurs.length === 0 ? (
          <p>Aucun utilisateur assignable trouvé.</p>
        ) : (
          <ul className="space-y-2">
            {utilisateurs.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <span className="font-medium">{user.nom}</span>
                  {user.statutPersonnel && (
                    <span className="ml-2 text-sm text-gray-500">
                      ({user.statutPersonnel})
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleAssignation(user.id)}
                  className={`px-3 py-1 rounded ${
                    user.estAssigne
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {user.estAssigne ? 'Retirer' : 'Assigner'}
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading || utilisateurs.length === 0}
          className={`mt-4 px-4 py-2 rounded text-white transition ${
            loading || utilisateurs.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    )}

  </div>
)
}