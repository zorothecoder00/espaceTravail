'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AjouterUtilisateur() {
  const router = useRouter()
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: 'UTILISATEUR',
    departementId: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/utilisateurs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, departementId: form.departementId ? Number(form.departementId) : null }),
    })

    if (res.ok) {
      setMessage('Utilisateur ajouté avec succès')
      router.refresh()
    } else {
      const data = await res.json()
      setMessage(data.message || 'Erreur')
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ajouter un utilisateur</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="nom" onChange={handleChange} placeholder="Nom" className="w-full p-2 border rounded" required />
        <input name="prenom" onChange={handleChange} placeholder="Prénom" className="w-full p-2 border rounded" required />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Mot de passe" className="w-full p-2 border rounded" required />

        <select name="role" value={form.role} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="UTILISATEUR">UTILISATEUR</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <input name="departementId" type="number" onChange={handleChange} placeholder="ID du département (optionnel)" className="w-full p-2 border rounded" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Ajouter
        </button>
        {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
      </form>
    </div>
  )
}
