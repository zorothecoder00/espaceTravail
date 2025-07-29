'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Role } from '@prisma/client'
import Link from 'next/link'

type FormState = {
  nom: string
  prenom: string
  email: string
  password: string
  role: Role
  departementId: string
}

export default function AjouterUtilisateur() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: Role.UTILISATEUR,
    departementId: '',
  })
  const [message, setMessage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size > 1_048_576) {
      setMessage('❌ L’image est trop grande. Maximum 1 Mo.')
      setImageFile(null)
    } else {
      setMessage('')
      setImageFile(file || null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    const formData = new FormData()
    formData.append('nom', form.nom)
    formData.append('prenom', form.prenom)
    formData.append('email', form.email)
    formData.append('password', form.password)
    formData.append('role', form.role)
    formData.append('departementId', form.departementId || '')

    if (imageFile) {
      formData.append('image', imageFile)
    }

    const res = await fetch('/api/utilisateurs', {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      setMessage('✅ Utilisateur ajouté avec succès')
      setTimeout(() => {
        router.push('/admin/utilisateurs/liste')
      }, 1000)
    } else {
      const data = await res.json()
      setMessage(data.message || '❌ Une erreur est survenue')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="mb-4 ">
        <Link href="/admin/utilisateurs/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des utilisateurs
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Ajouter un utilisateur</h1>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label htmlFor="nom" className="block mb-1 font-medium">Nom</label>
          <input id="nom" name="nom" onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="prenom" className="block mb-1 font-medium">Prénom</label>
          <input id="prenom" name="prenom" onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" name="email" type="email" onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">Mot de passe</label>
          <input id="password" name="password" type="password" onChange={handleChange} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="image" className="block mb-1 font-medium">Image de profil (facultative, max 1 Mo)</label>
          <input id="image" type="file" accept="image/*" onChange={handleFileChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label htmlFor="role" className="block mb-1 font-medium">Rôle</label>
          <select name="role" value={form.role} onChange={handleChange} className="w-full border p-2 rounded">
            <option value={Role.UTILISATEUR}>👤 Utilisateur</option>
            <option value={Role.ADMIN}>🛠️ Admin</option>
            <option value={Role.SUPER_ADMIN}>👑 Super Admin</option>
          </select>
        </div>

        <div>
          <label htmlFor="departementId" className="block mb-1 font-medium">Département (optionnel)</label>
          <input
            id="departementId"
            name="departementId"
            type="number"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="ID du département"
          />
        </div>

        <button 
        type="submit"
        disabled={isSubmitting}
          className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Ajout en cours...' : 'Ajouter'}
        </button>
        {message && <p className="text-sm mt-2 text-center text-red-600">{message}</p>}
      </form>
    </div>
  )
}
