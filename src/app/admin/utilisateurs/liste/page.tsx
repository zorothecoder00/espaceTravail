'use client'

import { useEffect, useState } from 'react'

type Utilisateur = {
  id: number
  nom: string
  prenom: string
  email: string  
  role: string
  departement?: { nom: string }
}

export default function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [message, setMessage] = useState('')

  const chargerUtilisateurs = async () => {
    const res = await fetch('/api/utilisateurs')
    const data = await res.json()
    setUtilisateurs(data)
  }

  useEffect(() => {
    chargerUtilisateurs()
  }, [])

  const supprimerUtilisateur = async (id: number) => {
    const res = await fetch('/api/utilisateurs', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })
    if (res.ok) {
      setMessage('Utilisateur supprimé')
      chargerUtilisateurs()
    } else {
      setMessage('Erreur lors de la suppression')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
      {message && <p className="text-sm text-red-500">{message}</p>}
      <table className="w-full table-auto border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nom</th>
            <th className="p-2 border">Prénom</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Rôle</th>
            <th className="p-2 border">Département</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.map((u) => (
            <tr key={u.id} className="text-center border-t">
              <td className="p-2 border">{u.nom}</td>
              <td className="p-2 border">{u.prenom}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
              <td className="p-2 border">{u.departement?.nom || '-'}</td>
              <td className="p-2 border">
                <button
                  onClick={() => supprimerUtilisateur(u.id)}
                  className="text-red-600 hover:underline"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
          {utilisateurs.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center p-4">
                Aucun utilisateur trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
