// src/app/admin/projets/[id]/assignation/page.tsx
'use client' 

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'

type Utilisateur = {
  id: number
  nom: string
  prenom: string
}


export default function AssignationProjetPage() {
  const { id } = useParams()as { id: string }
  const [users, setUsers] = useState<Utilisateur[]>([])
  const [selectedUser, setSelectedUser] = useState<number | null>(null)

  useEffect(() => {
    axios.get<Utilisateur[]>('/api/utilisateurs').then((res) => setUsers(res.data))  // <-- typage axios
  }, [])

  const assigner = async () => {
    if (!selectedUser) return alert('Sélectionnez un utilisateur.')
    await axios.post('/api/assignations/projet', {
      utilisateurId: selectedUser,
      projetId: Number(id),
    })
    alert('Utilisateur assigné au projet avec succès !')
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Assigner un utilisateur au projet #{id}</h2>
      <select
        className="w-full p-2 border mb-4"
        onChange={(e) => setSelectedUser(Number(e.target.value))}
        value={selectedUser ?? ''}
      >
        <option value="">Sélectionnez un utilisateur</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>{u.nom} {u.prenom}</option>
        ))}
      </select>
      <button onClick={assigner} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Assigner
      </button>
    </div>
  )
}
