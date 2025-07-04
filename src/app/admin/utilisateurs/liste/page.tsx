'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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
    const res = await fetch(`/api/utilisateurs/${id}`, {
      method: 'DELETE',
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
      <div className="flex justify-between items-center mb-4">

        <div className="mb-2">
          <Link href="/admin/dashboard" className="text-blue-600 hover:underline">
            ← Retour au Dashboard
          </Link>
        </div>

        <h1 className="text-2xl font-bold">Liste des utilisateurs</h1>
        <Link
          href="/admin/utilisateurs/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Nouvel utilisateur
        </Link>
      </div>

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
              <td className="p-2 border space-x-2">
                <Link
                  href={`/admin/utilisateurs/edit/${u.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Modifier
                </Link>
                <Link
                  href={`/admin/utilisateurs/assignations?id=${u.id}`}
                  className="text-green-600 hover:underline"
                >
                  Assignations
                </Link>
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
