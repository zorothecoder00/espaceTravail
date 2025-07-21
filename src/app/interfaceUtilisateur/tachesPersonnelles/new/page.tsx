'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

type Utilisateur = {
  id: number
  nom: string
  prenom: string
}

export default function NouvelleTachePersonnelle() {
  const [titre, setTitre] = useState('')
  const [contenu, setContenu] = useState('')
  const [date, setDate] = useState('')
  const [sousTaches, setSousTaches] = useState<string[]>([''])
  const [superviseurId, setSuperviseurId] = useState<number | null>(null)
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])

  const router = useRouter()

  // Charger la liste des utilisateurs pour choisir un superviseur
  useEffect(() => {
    fetch('/api/utilisateurs') // à créer : liste des users
      .then(res => res.json())
      .then(data => setUtilisateurs(data))
  }, [])

  const handleSousTacheChange = (index: number, value: string) => {
    const nouvelleListe = [...sousTaches]
    nouvelleListe[index] = value
    setSousTaches(nouvelleListe)
  }

  const ajouterSousTache = () => setSousTaches([...sousTaches, ''])

  const retirerSousTache = (index: number) => {
    setSousTaches(sousTaches.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      titre,
      contenu,
      date,
      sousTaches: sousTaches.map(contenu => ({ contenu })),
      superviseurId,
    }

    const res = await fetch('/api/tachesPersonnelles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      router.push('/taches-personnelles')
    } else {
      alert("Erreur lors de la création")
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nouvelle Tâche Personnelle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Titre</label>
          <input type="text" className="w-full border px-3 py-2 rounded" value={titre} onChange={e => setTitre(e.target.value)} required />
        </div>

        <div>
          <label className="block mb-1">Contenu (description)</label>
          <textarea className="w-full border px-3 py-2 rounded" rows={4} value={contenu} onChange={e => setContenu(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1">Date</label>
          <input type="date" className="border px-3 py-2 rounded" value={date} onChange={e => setDate(e.target.value)} required />
        </div>

        <div>
          <label className="block mb-1">Sous-tâches</label>
          {sousTaches.map((tache, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input type="text" className="flex-1 border px-2 py-1 rounded" value={tache} onChange={e => handleSousTacheChange(index, e.target.value)} required />
              <button type="button" className="text-red-500" onClick={() => retirerSousTache(index)}>Supprimer</button>
            </div>
          ))}
          <button type="button" onClick={ajouterSousTache} className="text-blue-600">+ Ajouter une sous-tâche</button>
        </div>

        <div>   
          <label className="block mb-1">Superviseur (optionnel)</label>
          <select className="w-full border px-3 py-2 rounded" value={superviseurId ?? ''} onChange={e => setSuperviseurId(e.target.value ? parseInt(e.target.value) : null)}>
            <option value="">-- Aucun --</option>
            {utilisateurs.map(user => (
              <option key={user.id} value={user.id}>{user.prenom} {user.nom}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Créer la tâche</button>
      </form>
    </div>
  )
}
