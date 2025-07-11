'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function EditDepartement() {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const [nom, setNom] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)

  // Charger les infos du département
  useEffect(() => {
    if (!id) return

    async function fetchDepartement() {
      try {
        const res = await fetch(`/api/departements/${id}`)
        const json = await res.json()

        if (res.ok) {
          setNom(json.data.nom || '')
          setSuccess(null)
        } else {
          setMessage(json.message || "Erreur lors du chargement")
          setSuccess(false)
        }
      } catch (error) {
        console.error("Erreur fetch :", error)
        setMessage("Erreur réseau ou serveur")
        setSuccess(false)
      } finally {
        setLoading(false)
      }
    }

    fetchDepartement()
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch(`/api/departements/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom }),
    })

    const data = await res.json()

    if (res.ok) {
      setMessage('Département modifié avec succès !')
      setSuccess(true)

      setTimeout(() => {
        router.push('/admin/departements/liste')
      }, 1000)
    } else {
      setMessage(data.message || 'Erreur lors de la modification')
      setSuccess(false)
    }
  }

  if (loading) return <p>Chargement...</p>

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <Link href="/admin/departements/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des départements
        </Link>
      </div>

      <h1 className="text-xl font-bold mb-4">Modifier le département</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom du Département
          </label>
          <input
            type="text"
            placeholder="Nom du département"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-indigo-700 hover:cursor-pointer"
        >
          Enregistrer les modifications
        </button>

        {message && (
          <p className={`mt-2 text-sm ${success ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
