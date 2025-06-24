'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NouvellePageDocument() {
  const router = useRouter()
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [utilisateurs, setUtilisateurs] = useState('')
  const [fichier, setFichier] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const formData = new FormData()
      formData.append('titre', titre)
      formData.append('description', description)
      formData.append('utilisateurs', JSON.stringify(utilisateurs.split(',').map(id => parseInt(id.trim()))))
      formData.append('departements', JSON.stringify([])) // tu peux modifier si besoin
      formData.append('projets', JSON.stringify([]))      // idem

      if (fichier) {
        formData.append('fichier', fichier)
      }

      const res = await fetch('/api/documents', {
        method: 'POST',
        body: formData, // PAS de Content-Type, fetch s’en charge automatiquement
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('Document créé et partagé avec succès.')
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

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
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

        <div>
          <label className="block text-sm font-medium">Fichier (optionnel, max 1 Mo)</label>
          <input
            type="file"
            onChange={e => setFichier(e.target.files ? e.target.files[0] : null)}
            accept="image/*,application/pdf" // adapte selon tes besoins
            className="w-full p-2 border rounded"
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Envoi en cours...' : 'Partager le document'}
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
