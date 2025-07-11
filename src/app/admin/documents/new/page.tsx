'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type User = { id: number; nom: string }
type Departement = { id: number; nom: string }
type Projet = { id: number; nom: string }

export default function NewDocumentForm() {
  const router = useRouter()

  // States pour données sélectionnables
  const [users, setUsers] = useState<User[]>([])
  const [departements, setDepartements] = useState<Departement[]>([])
  const [projets, setProjets] = useState<Projet[]>([])

  // Form inputs
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [fichier, setFichier] = useState<File | null>(null)

  // Selected destinataires (IDs)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [selectedDepartements, setSelectedDepartements] = useState<number[]>([])
  const [selectedProjets, setSelectedProjets] = useState<number[]>([])

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Fetch données utilisateurs, départements, projets pour les selects
  useEffect(() => {
    async function fetchData() {
      try {
        const [usersRes, depsRes, projsRes] = await Promise.all([
          fetch('/api/utilisateurs'),
          fetch('/api/departements'),
          fetch('/api/projets'),
        ])

        const usersData = await usersRes.json()
        const depsData = await depsRes.json()
        const projsData = await projsRes.json()

        setUsers(usersData.data || [])
        setDepartements(depsData.data || [])
        setProjets(projsData.data || [])
      } catch (error) {
        console.error('Erreur chargement des données', error)
      }
    }
    fetchData()
  }, [])

  // Gérer sélection multiple dans les selects
  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => Number(option.value))
    setState(selectedOptions)
  }

  // Soumission formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (!titre.trim()) {
      setMessage('Le titre est obligatoire.')
      setLoading(false)
      return
    }

    if (
      selectedUsers.length === 0 &&
      selectedDepartements.length === 0 &&
      selectedProjets.length === 0
    ) {
      setMessage('Merci de sélectionner au moins un destinataire.')
      setLoading(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append('titre', titre)
      formData.append('description', description)
      formData.append('utilisateurs', JSON.stringify(selectedUsers))
      formData.append('departements', JSON.stringify(selectedDepartements))
      formData.append('projets', JSON.stringify(selectedProjets))

      if (fichier) {
        formData.append('fichier', fichier)
      }

      const res = await fetch('/api/documents', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('Document créé et partagé avec succès.')
        router.push('/admin/documents/liste')
      } else {
        setMessage(data.message || 'Erreur lors de la création.')
      }
    } catch (error) {
      console.error('Erreur réseau', error)
      setMessage('Erreur réseau, veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 sm:px-4">
      <h1 className="text-2xl font-bold mb-6">📄Créer et partager un document</h1>
      <Link
        href="/admin/documents/liste"
        className="text-blue-600 hover:underline block mb-4"
      >
        ← Retour à la liste des documents
      </Link>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6 border" encType="multipart/form-data">
        {/* Titre */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="titre">
            Titre <span className="text-red-600">*</span>
          </label>
          <input
            id="titre"
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
            disabled={loading}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded px-3 py-2"
            rows={4}
            disabled={loading}
          />
        </div>

        {/* Utilisateurs (multi-select) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="utilisateurs">
            Utilisateurs (destinataires)
          </label>
          <select
            id="utilisateurs"
            multiple
            size={5}
            value={selectedUsers.map(String)}
            onChange={(e) => handleSelectChange(e, setSelectedUsers)}
            className="w-full border rounded px-3 py-2"
            disabled={loading}
          >
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.nom}
              </option>
            ))}
          </select>
          <small className="text-gray-500">Sélectionnez un ou plusieurs utilisateurs</small>
        </div>

        {/* Départements (multi-select) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="departements">
            Départements (destinataires)
          </label>
          <select
            id="departements"
            multiple
            size={5}
            value={selectedDepartements.map(String)}
            onChange={(e) => handleSelectChange(e, setSelectedDepartements)}
            className="w-full border rounded px-3 py-2"
            disabled={loading}
          >
            {departements.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nom}
              </option>
            ))}
          </select>
          <small className="text-gray-500">Sélectionnez un ou plusieurs départements</small>
        </div>

        {/* Projets (multi-select) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="projets">
            Projets (destinataires)
          </label>
          <select
            id="projets"
            multiple
            size={5}
            value={selectedProjets.map(String)}
            onChange={(e) => handleSelectChange(e, setSelectedProjets)}
            className="w-full border rounded px-3 py-2"
            disabled={loading}
          >
            {projets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nom}
              </option>
            ))}
          </select>
          <small className="text-gray-500">Sélectionnez un ou plusieurs projets</small>
        </div>

        {/* Fichier (optionnel) */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="fichier">
            Fichier (optionnel, max 5 Mo)
          </label>
          <input
            id="fichier"
            type="file"
            onChange={(e) => setFichier(e.target.files ? e.target.files[0] : null)}
            className="w-full border rounded px-3 py-2"
            accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            disabled={loading}
          />
        </div>

        {/* Message */}
        {message && (
          <div
            className={`p-3 rounded ${
              message.toLowerCase().includes('erreur')
                ? 'bg-red-100 text-red-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {message}
          </div>
        )}

        {/* Bouton submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Envoi en cours...' : 'Créer et partager'}
        </button>
      </form>
    </div>
  )
}
