'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'

export default function AssignationTachePage() {
  const { id } = useParams()
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState<number | null>(null)

  useEffect(() => {
    axios.get('/api/utilisateurs').then(res => setUsers(res.data))
  }, [])

  const assigner = async () => {
    if (!selectedUser) return alert('Sélectionnez un utilisateur.')
    await axios.post('/api/assignations/tache', {
      utilisateurId: selectedUser,
      tacheId: Number(id),
    })
    alert('Utilisateur assigné à la tâche avec succès !')
  }

  return ( 
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Assigner un utilisateur à la tâche #{id}</h2>
      <select
        className="w-full p-2 border mb-4"
        onChange={(e) => setSelectedUser(Number(e.target.value))}
        value={selectedUser ?? ''}
      >
        <option value="">Sélectionnez un utilisateur</option>
        {users.map((u: any) => (
          <option key={u.id} value={u.id}>{u.nom} {u.prenom}</option>
        ))}
      </select>
      <button onClick={assigner} className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Assigner
      </button>
    </div>
  )
}
