'use client'

import { useEffect, useState } from 'react'  
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Trash2, Settings } from 'lucide-react'
import { Statut } from '@prisma/client'

interface Projet {
  id: number
  nom: string
  statut: Statut
  deadline: string | null
}

export default function ListeProjetsDiriges() {
  const [projets, setProjets] = useState<Projet[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const res = await fetch('/api/mesProjetsDiriges')
        if (!res.ok) throw new Error('Erreur lors du chargement')
        const data = await res.json()
        setProjets(data)
      } catch (error) {
        console.error('Erreur lors du chargement des projets', error)
      }finally {
        setLoading(false)
      }
    }

    fetchProjets()
  }, [])

  const supprimerProjet = async (id: number) => {
    if (!confirm('Voulez-vous vraiment supprimer ce projet ?')) return

    try {
      const res = await fetch(`/api/projets/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Erreur lors de la suppression')

      setProjets(prev => prev.filter(projet => projet.id !== id))
    } catch (error) {
      console.error('Erreur lors de la suppression', error)
    }
  }

  const statutLibelle = {
    ATTENTE: "En attente",
    EN_COURS: "En cours",
    TERMINE: "Terminé",
  } 


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mes projets dirigés</h1>

      {loading ? (
        <p className="text-gray-600">Chargement des projets...</p>
      ) : projets.length === 0 ? (
        <p className="text-gray-500">Aucun projet dirigé pour le moment.</p>
      ) : (
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border">Nom</th>
            <th className="text-left p-2 border">Statut</th>
            <th className="text-left p-2 border">Deadline</th>
            <th className="text-left p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projets.map((projet) => (
            <tr key={projet.id} className="hover:bg-gray-50">
              <td className="p-2 border">{projet.nom}</td>
              <td className="p-2 border">{statutLibelle[projet.statut]}</td>
              <td className="p-2 border">
                {projet.deadline
                  ? new Date(projet.deadline).toLocaleDateString()
                  : 'Non définie'}
              </td>  
              <td className="p-2 border space-x-2">
                <Button
                  variant="destructive"
                  onClick={() => supprimerProjet(projet.id)}
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Supprimer
                </Button>
                <Link href={`/interfaceUtilisateur/${projet.id}/gestion`}>
                  <Button variant="destructive">
                    <Settings className="w-4 h-4 mr-1" /> Gérer
                  </Button>    
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  )
}
