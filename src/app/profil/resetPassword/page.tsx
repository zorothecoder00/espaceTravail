// /app/profil/resetPassword/page.tsx
'use client'

import { useState } from 'react'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [nouveau, setNouveau] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/profil/resetPassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, nouveauMotDePasse: nouveau }),
    })

    const data = await res.json()
    setMessage(data.message || data.error)
  }

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Réinitialiser le mot de passe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required />
        <input type="password" placeholder="Nouveau mot de passe" value={nouveau} onChange={(e) => setNouveau(e.target.value)} className="input" required />
        <button type="submit" className="btn btn-primary">Réinitialiser</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
