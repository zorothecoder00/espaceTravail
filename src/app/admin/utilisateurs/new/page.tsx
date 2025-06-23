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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 1_048_576) { // 1 Mo
      setMessage('❌ L’image est trop grande. Maximum 1 Mo.')
      setImageFile(null)
    } else {
      setMessage('')
      setImageFile(file)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!imageFile) {
      setMessage('Veuillez choisir une image de profil valide.')
      return
    }

    const formData = new FormData()
    formData.append('nom', form.nom)
    formData.append('prenom', form.prenom)
    formData.append('email', form.email)
    formData.append('password', form.password)
    formData.append('role', form.role)
    formData.append('departementId', form.departementId || '')
    formData.append('image', imageFile)

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
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* Lien de retour vers la liste des utilisateurs */}
      <div className="mb-4">
        <Link href="/admin/utilisateurs/liste" className="text-blue-600 hover:underline">
          ← Retour à la liste des utilisateurs
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Ajouter un utilisateur</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input
            id="nom"
            name="nom"
            onChange={handleChange}
            placeholder="Nom"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            onChange={handleChange}
            placeholder="Prénom"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}   
            placeholder="Mot de passe"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-1">Photo de profil (max 1 Mo)</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
  
        <div>
          <label className="block mb-1 font-medium">Rôle de l&apos;utilisateur</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value as Role })}
            className="w-full border px-3 py-2 rounded"
          >
            <option value={Role.UTILISATEUR}>👤 Utilisateur</option>
            <option value={Role.ADMIN}>🛠️ Admin</option>
            <option value={Role.SUPER_ADMIN}>👑 Super Admin</option>
          </select>
        </div>

        <div>
          <label htmlFor="departementId" className="block text-sm font-medium text-gray-700 mb-1">Département associé(optionnel)</label>
          <input
            id="departementId"
            name="departementId"
            type="number"
            onChange={handleChange}
            placeholder="ID du département (optionnel)"
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-indigo-700 hover:cursor-pointer">
          Ajouter
        </button>
        {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
      </form>
    </div>
  )
}
