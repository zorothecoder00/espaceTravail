'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NouvellePageDocument() {
  const router = useRouter()
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [utilisateurs, setUtilisateurs] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/partageDocument', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          titre,
          description,
          utilisateurs: utilisateurs.split(',').map(id => parseInt(id.trim())),
          departements: [],
          projets: [],
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('Document partagé avec succès.')
        router.push('/admin/documents/liste')
      } else {
        setMessage(data.message || 'Erreur.')
      }
    } catch (err) {
      console.error('Erreur lors du partage du document :', err)
      setMessage('Erreur de réseau.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Créer et partager un document</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Titre</label>
          <input
            type="text"
            value={titre}
            onChange={e => setTitre(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">IDs des utilisateurs (séparés par virgule)</label>
          <input
            type="text"
            value={utilisateurs}
            onChange={e => setUtilisateurs(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="ex: 1,2,3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Partage en cours...' : 'Partager le document'}
        </button>

        {message && <p className="text-sm mt-2">{message}</p>}
      </form>

      <div className="mt-6">
        <Link href="/admin/documents/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des documents
        </Link>
      </div>
    </div>
  )
}
