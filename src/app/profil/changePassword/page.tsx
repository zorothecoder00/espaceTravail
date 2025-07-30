// /app/profil/changePassword/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ChangePasswordPage() {
  const [ancien, setAncien] = useState('')
  const [nouveau, setNouveau] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/profil/changePassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ancienMotDePasse: ancien, nouveauMotDePasse: nouveau }),
    })

    const data = await res.json()
    setMessage(data.message || data.error)
  }

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Changer le mot de passe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="password" placeholder="Ancien mot de passe" value={ancien} onChange={(e) => setAncien(e.target.value)} className="input" required />
        <input type="password" placeholder="Nouveau mot de passe" value={nouveau} onChange={(e) => setNouveau(e.target.value)} className="input" required />
        <button type="submit" className="btn btn-primary">Changer</button>
      </form>
      {message && <p>{message}</p>}
      <div className="pt-4">
        <p className="text-sm text-gray-500">Mot de passe oublié ?</p>
        <button onClick={() => router.push('/profil/resetPassword')} className="text-blue-600 hover:underline text-sm">Réinitialiser ici</button>
      </div>
    </div>
  )
}
