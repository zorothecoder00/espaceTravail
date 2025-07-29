'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

type Planning = {    
  id: number
  titre: string
  date: string
  taches: string[]
}

type Utilisateur = {
  id: string
  nom: string
  prenom: string
}

export default function VoirPlanning() {  
  const { planningId } = useParams() as { planningId: string }
  const [planning, setPlanning] = useState<Planning | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [showPartager, setShowPartager] = useState(false)
  const lienPlanning = `/interfaceUtilisateur/planning/vue/${planningId}`
  const [message, setMessage] = useState(`Voici le planning à consulter : ${lienPlanning}`)
  const [destinataire, setDestinataire] = useState('')
  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const [confirmation, setConfirmation] = useState('')

  const [utilisateurs, setUtilisateurs] = useState<Utilisateur[]>([])
  const [loadingUtilisateurs, setLoadingUtilisateurs] = useState(false)

  // le lien complet avec window, mis à jour côté client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lienComplet = `${window.location.origin}${lienPlanning}`
      setMessage(`Voici le planning à consulter : <a href="${lienComplet}" target="_blank" rel="noopener noreferrer">${lienComplet}</a>`)
    }
  }, [lienPlanning])

  useEffect(() => {
    const fetchPlanning = async () => {  
      try {
        const res = await fetch(`/api/planning/${planningId}`)
        if (!res.ok) throw new Error('Erreur lors du chargement du planning')
        const data = await res.json()   
        setPlanning(data.data)
      } catch (err) {
        console.error("Erreur lors de la récupération", err)
        const error = err as Error
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    if (planningId) {   
      fetchPlanning()
    }
  }, [planningId])

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      setLoadingUtilisateurs(true)
      try {
        const res = await fetch('/api/utilisateurs')
        if (!res.ok) throw new Error('Impossible de charger les utilisateurs')
        const data = await res.json()
        setUtilisateurs(data.data || [])
      } catch (err) {
        console.error("Erreur lors du chargement des utilisateurs :", err)
      } finally {
        setLoadingUtilisateurs(false)
      }
    }
  
    if (showPartager) {
      fetchUtilisateurs()
    }else{
    setMessage(`Voici le planning à consulter : ${lienPlanning}`)
    setConfirmation('')
    }
  }, [showPartager, lienPlanning])

  const envoyerMessage = async () => {
    if (!destinataire.trim() || !message.trim()) {
      alert('Veuillez sélectionner un destinataire et écrire un message.')
      return
    }

    setEnvoiEnCours(true)
    try {
      const formData = new FormData()
      formData.append('contenu', message)
      formData.append('receiverId', destinataire)

      // Si jamais tu veux un slug de planning
      // formData.append('slugPlanning', slug)

      // Si tu veux éventuellement ajouter une image :
      // formData.append('image', fileInput.files[0])

      const res = await fetch('/api/messages', {
        method: 'POST',
        body: formData,
        // ❌ NE PAS mettre Content-Type ici !
      })

      if (!res.ok) throw new Error('Échec de l’envoi du message')

      setConfirmation('Message envoyé avec succès 🎉')
      setShowPartager(false)  
      setDestinataire('')
    } catch (err) {
      alert('Erreur lors de l’envoi')
      console.error(err)
    } finally {
      setEnvoiEnCours(false)
    }
  }

  if (loading) return <p className="text-center mt-10 text-gray-600">Chargement...</p>
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>
  if (!planning) return <p className="text-center mt-10">Aucun planning trouvé</p>

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded-xl shadow-lg">
    <div className="relative z-10 p-6 max-w-xl mx-auto">
        <div className="mb-4">
          <Link
            href="/interfaceUtilisateur/planning/vue"
            className="text-blue-600 hover:underline"
          >
            &larr; Retour à la liste des plannings
          </Link>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        {planning.titre}
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        <strong>Date :</strong> {new Date(planning.date).toLocaleDateString()}
      </p>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Tâches :</h2>
        {planning.taches.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {planning.taches.map((tache, index) => (
              <li key={index} className="text-gray-700">
                {tache}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Aucune tâche enregistrée.</p>
        )}
      </div> 

      <button
        onClick={() => setShowPartager(true)}
        disabled={loadingUtilisateurs}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50 "
      >
        Partager ce planning
      </button>

      {confirmation && <p className="text-green-600 mt-4">{confirmation}</p>}

      {showPartager && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Envoyer ce planning</h2>

            <label className="block mb-2 text-sm font-medium text-gray-700">Destinataire</label>
            {loadingUtilisateurs ? (
              <p className="text-gray-500 mb-4">Chargement des utilisateurs...</p>
            ) : (
              <select
                value={destinataire}
                onChange={e => setDestinataire(e.target.value)}
                className="w-full border rounded p-2 mb-4"
              >
                <option value="">-- Sélectionner un utilisateur --</option>
                {utilisateurs.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.prenom} {user.nom}
                  </option>
                ))}
              </select>
            )}

            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={4}
              className="w-full border rounded p-2 mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPartager(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={envoyerMessage}
                disabled={envoiEnCours}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
              >
                {envoiEnCours ? 'Envoi...' : 'Envoyer'}
              </button>
            </div>
          </div>
        </div>
      )}
 
    </div>
  )
}
