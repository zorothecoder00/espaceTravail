'use client'

import { useEffect, useState } from 'react'

type Utilisateur = {
  id: number
  nom: string
  prenom: string
}

export default function NouvelleTachePersonnelle() {
  const [titre, setTitre] = useState('')
  const [contenu, setContenu] = useState('')
  const [statut, setStatut] = useState('TERMINEE')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const [sousTaches, setSousTaches] = useState<string[]>([''])

  const [superviseurId, setSuperviseurId] = useState<number | null>(null)
  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [searchUser, setSearchUser] = useState('')

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Charger utilisateurs filtrés selon searchUser
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/utilisateurs?search=${encodeURIComponent(searchUser)}&limit=10`)
        if (!res.ok) throw new Error('Erreur lors du chargement des utilisateurs')
        const json = await res.json()
        setUtilisateurs(json.data || [])
      } catch (error) {
        console.error(error)
      }
    }  
    fetchUsers()
  }, [searchUser])

  const ajouterSousTache = () => setSousTaches([...sousTaches, ''])
  const modifierSousTache = (i: number, val: string) => {
    const copie = [...sousTaches]
    copie[i] = val
    setSousTaches(copie)
  }
  const supprimerSousTache = (i: number) => {
    setSousTaches(sousTaches.filter((_, idx) => idx !== i))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')  

    if (!titre.trim() || !contenu.trim()) {
      setMessage('Le titre et contenu sont obligatoires.')
      setLoading(false)
      return
    }

    try {
      const payload = {
        titre,
        contenu,
        statut,
        date,
        sousTaches: sousTaches.filter(t => t.trim() !== ''),
        superviseurId,
      }

      const res = await fetch('/api/tachesPersonnelles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Erreur lors de la création')

      setMessage('Tâche créée avec succès')
      // Reset form
      setTitre('')
      setContenu('')
      setStatut('TERMINEE')
      setDate(new Date().toISOString().slice(0, 10))
      setSousTaches([''])
      setSuperviseurId(null)
      setSearchUser('')
      setUtilisateurs([])
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Erreur inconnue')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Créer une tâche personnelle</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Titre</label>
          <input
            type="text"
            value={titre}
            onChange={e => setTitre(e.target.value)}
            required
            className="border px-3 py-2 rounded w-full"
            placeholder="Titre de la tâche"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contenu</label>
          <textarea
            value={contenu}
            onChange={e => setContenu(e.target.value)}
            required
            className="border px-3 py-2 rounded w-full min-h-[100px]"
            placeholder="Description de la tâche"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Statut</label>
          <select
            value={statut}
            onChange={e => setStatut(e.target.value)}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="EN_ATTENTE">En attente</option>
            <option value="EN_COURS">En cours</option>
            <option value="TERMINEE">Terminée</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Superviseur (recherche par nom)</label>
          <input
            type="text"
            value={searchUser}
            onChange={e => setSearchUser(e.target.value)}
            placeholder="Rechercher un utilisateur..."
            className="border px-3 py-2 rounded w-full"
          />
          {utilisateurs.length > 0 && (
            <ul className="border rounded max-h-40 overflow-auto mt-1">
              {utilisateurs.map(user => (
                <li
                  key={user.id}
                  onClick={() => {
                    setSuperviseurId(user.id)
                    setSearchUser(user.nom)
                    setUtilisateurs([])
                  }}
                  className={`cursor-pointer px-2 py-1 hover:bg-gray-200 ${
                    superviseurId === user.id ? 'bg-gray-300 font-semibold' : ''
                  }`}
                >
                  {user.nom}
                </li>
              ))}
            </ul>
          )}
          {superviseurId && (
            <p className="mt-1 text-sm text-green-600">
              Superviseur sélectionné : {searchUser}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Sous-tâches</label>
          {sousTaches.map((st, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={st}
                onChange={e => modifierSousTache(i, e.target.value)}
                placeholder={`Sous-tâche ${i + 1}`}
                className="border px-3 py-2 rounded flex-grow"
              />
              <button
                type="button"
                onClick={() => supprimerSousTache(i)}
                className="bg-red-500 text-white px-2 py-1 rounded"
                aria-label="Supprimer sous-tâche"
              >
                &times;
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={ajouterSousTache}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Ajouter une sous-tâche
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Création...' : 'Créer la tâche'}
        </button>
      </form>

      {message && (
        <p className={`mt-4 font-medium ${message.startsWith('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  )
}
