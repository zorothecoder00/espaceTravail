// app/planning/[id]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Planning = {  
  id: number   
  titre: string
  date: string
  taches: string[]
  objectif?: string
  resultatAttendu?: string  
  etat?: boolean
  commentaires?: string
  responsable?: {
    nom: string
    prenom: string
  }
}   

export default function PlanningJournalier() {

  const { id } = useParams() as { id: string }
  const [planningData, setPlanningData] = useState<Planning | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPlanning = async() => {
      setLoading(true)
      try{
        const res = await fetch(`/api/planning/${id}`)

        if(!res.ok){
           setMessage("Erreur lors de la récupération")
           return
        }

        const data = await res.json()
        setPlanningData(data.data)
      }catch(error){
        console.error('Erreur serveur', error)
        setMessage('Erreur serveur')
      }finally{
        setLoading(false)
      }

    }

    if (id) {
      fetchPlanning()
    }

  },[id])

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  if (loading) return <p>Chargement...</p>
  if (message) return <p>{message}</p>
  if (!planningData) return <p>Aucun planning trouvé.</p>

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/admin/planning/vue"
          className="text-blue-600 hover:underline"
        >
          ← Retour sur la liste des Plannings 
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Planning du {formatDate(planningData.date)}</h1>
      <p className="mb-2"><span className="font-semibold">Titre :</span> {planningData.titre}</p>
      <p className="mb-2"><span className="font-semibold">Responsable :</span> {planningData?.responsable?.prenom} {planningData?.responsable?.nom}</p>

      <table className="w-full text-sm border mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Titre</th>
            <th className="border px-2 py-1">Objectif</th>
            <th className="border px-2 py-1">Résultat Attendu</th>
            <th className="border px-2 py-1">Tâches</th>
            <th className="border px-2 py-1">Responsable</th>
            <th className="border px-2 py-1">Commentaires</th>
            <th className="border px-2 py-1">État</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1 whitespace-nowrap">
              {planningData?.date ? formatDate(planningData.date) : '--'}
            </td>
            <td className="border px-2 py-1">{planningData?.titre || '--'}</td>
            <td className="border px-2 py-1">{planningData?.objectif || '--'}</td>
            <td className="border px-2 py-1">{planningData?.resultatAttendu || '--'}</td>
            <td className="border px-2 py-1">
              <ul className="list-disc list-inside space-y-1">
                {planningData?.taches?.length > 0 ? (
                  planningData.taches.map((tache, idx) => <li key={idx}>{tache}</li>)
                ) : (
                  <li>--</li>
                )}
              </ul>
            </td>
            <td className="border px-2 py-1">
              {planningData?.responsable
                ? `${planningData.responsable.prenom} ${planningData.responsable.nom}`
                : '--'}
            </td>
            <td className="border px-2 py-1">{planningData?.commentaires || '--'}</td>
            <td className="border px-2 py-1">
              {planningData?.etat ? '✅ Terminé' : '⏳ En cours'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
