'use client'

import { useState } from 'react'

export default function CreerDepartement() {
  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/departements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom }),
    })

    const data = await res.json()
    if (res.ok) {
      setMessage('Département créé avec succès !')
      setNom('')
    } else {
      setMessage(data.message || 'Erreur lors de la création')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Créer un département</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text" 
          placeholder="Nom du département"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Créer
        </button>
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
      </form>
    </div>
  )
}
