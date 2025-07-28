'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

type Planning = {    
  id: number
  titre: string
  date: string
  taches: string[]
}

export default function VoirPlanning() {  
  const { planningId } = useParams() as { planningId: string }
  const [planning, setPlanning] = useState<Planning | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlanning = async () => {  
      try {
        const res = await fetch(`/api/planning/${planningId}`)
        if (!res.ok) throw new Error('Erreur lors du chargement du planning')
        const data = await res.json()   
        setPlanning(data.data)
      } catch (err) {
        console.error("Erreur lors de la récupération", err)
        const error = err as Error
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (planningId) {   
      fetchPlanning()
    }
  }, [planningId])

  if (loading) return <p className="text-center mt-10 text-gray-600">Chargement...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>
  if (!planning) return <p className="text-center mt-10">Aucun planning trouvé</p>

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded-xl shadow-lg">
    <div className="relative z-10 p-6 max-w-xl mx-auto">
        <div className="mb-4">
          <Link
            href="/interfaceUtilisateur/planning/vue"
            className="text-blue-600 hover:underline"
          >
            &larr; Retour à la liste des plannings
          </Link>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        {planning.titre}
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        <strong>Date :</strong> {new Date(planning.date).toLocaleDateString()}
      </p>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Tâches :</h2>
        {planning.taches.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {planning.taches.map((tache, index) => (
              <li key={index} className="text-gray-700">
                {tache}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Aucune tâche enregistrée.</p>
        )}
      </div>  
    </div>
  )
}
