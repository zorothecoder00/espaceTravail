'use client'
  
import { useEffect, useState } from 'react' 

type Tache = {
  id: string
  titre: string
  projet?: {
    nom: string
  } | null
  statut: string
  deadline?: string | null
} 

export default function ListeTaches() {
  const [taches, setTaches] = useState<Tache[]>([])

  useEffect(() => {
    fetch('/api/taches')
      .then(res => res.json())
      .then(setTaches)
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Liste des tâches</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Titre</th>
            <th className="p-2">Projet</th>
            <th className="p-2">Statut</th>
            <th className="p-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-2">{t.titre}</td>
              <td className="p-2">{t.projet?.nom || '—'}</td>
              <td className="p-2">{t.statut}</td>
              <td className="p-2">{t.deadline ? new Date(t.deadline).toLocaleString() : '—'}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}
