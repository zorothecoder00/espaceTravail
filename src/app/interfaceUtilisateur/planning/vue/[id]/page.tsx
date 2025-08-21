'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'    

type User = {     
  id: number
  nom: string
  prenom: string
}

type Tache = {
  id: number
  titre: string
  heure: string
  etat?: boolean
  commentaires?: string
  resultatAttendu?: string
  objectif?: string
  priorite?: boolean
  responsable?: User
}

type Planning = {
  id: number
  titre: string
  date: string
  taches: Tache[]
  responsable?: User
}

export default function PlanningJournalier() {
  const { id } = useParams() as { id: string }
  const [planningData, setPlanningData] = useState<Planning | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)  

  const [showModal, setShowModal] = useState(false)
  const [messageEnvoye, setMessageEnvoye] = useState(false)
  const [lienPlanning, setLienPlanning] = useState('')

  const [utilisateurs, setUtilisateurs] = useState<User[]>([])
  const [selectedDestinataireId, setSelectedDestinataireId] = useState<number | null>(null)

  const searchParams = useSearchParams()
  const readOnly = searchParams?.get('readonly') === '1' || false

  useEffect(() => {
    const fetchPlanning = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/planning/${id}`)

        if (!res.ok) {
          setMessage('Erreur lors de la récupération')
          return
        }

        const data = await res.json()
        setPlanningData(data.data)
      } catch (error) {
        console.error('Erreur serveur', error)
        setMessage('Erreur serveur')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPlanning()
    }
  }, [id])

  useEffect(() => {
    if (typeof window !== 'undefined' && id) {
      const url = new URL(`/interfaceUtilisateur/planning/vue/${id}`, window.location.origin)
      url.searchParams.set('readonly', '1')  // <-- ajout ici
      setLienPlanning(url.toString())
    }
  }, [id])

  // Fetch utilisateurs
  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const res = await fetch('/api/utilisateurs')
        const data = await res.json()
        setUtilisateurs(data.data || [])
      } catch (error) {
        console.error('Erreur lors du fetch des utilisateurs', error)
      }
    }

    fetchUtilisateurs()
  }, [])

  const envoyerMessage = async () => {
    if (!selectedDestinataireId) return

    const formData = new FormData()
    formData.append('contenu', `Voici le lien du planning : ${lienPlanning}`)
    formData.append('receiverId', selectedDestinataireId.toString())
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        setMessageEnvoye(true)
        setShowModal(false)
      }else{
        const data = await res.json()
        console.error("Erreur serveur", data.message)
      }
    } catch (error) {
      console.error('Erreur envoi message', error)
    }
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }     

  const destinataire = utilisateurs.find(u => u.id === selectedDestinataireId)

  if (loading) return <p>Chargement...</p>
  if (message) return <p>{message}</p>
  if (!planningData) return <p>Aucun planning trouvé.</p>

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        {!readOnly && (
          <>
            <Link href="/interfaceUtilisateur/planning/vue" className="text-blue-600 hover:underline">
              ← Retour sur la liste des Plannings
            </Link>
            <Link href="/interfaceUtilisateur/planning/new" className="text-blue-600 hover:underline">
              + Créer un nouveau Planning
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
            >
              📩 Envoyer ce planning par message
            </button>
          </>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-4">
        Planning Journalier — {formatDate(planningData.date)}
      </h1>

      <div className="mb-6">
        <p><span className="font-semibold">Titre :</span> {planningData.titre}</p>
        <p>
          <span className="font-semibold">Responsable :</span>{' '}
          {planningData.responsable
            ? `${planningData.responsable.prenom} ${planningData.responsable.nom}`
            : '--'}
        </p>
      </div>

      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-2 border">🕐 Heure</th>
            <th className="p-2 border">🗂️ Tâche prévue</th>
            <th className="p-2 border">🎯 Objectif</th>
            <th className="p-2 border">📌 Résultat attendu</th>
            <th className="p-2 border">👤 Responsable</th>
            <th className="p-2 border">📊 État</th>
            <th className="p-2 border">⚠️ Priorité</th>
            <th className="p-2 border">📝 Commentaires</th>
          </tr>
        </thead>
        <tbody>
          {planningData.taches?.length > 0 ? (
            planningData.taches.map((tache) => (
              <tr key={tache.id}>
                <td className="p-2 border">{tache.heure}</td>
                <td className="p-2 border">{tache.titre}</td>
                <td className="p-2 border">{tache.objectif || '--'}</td>
                <td className="p-2 border">{tache.resultatAttendu || '--'}</td>
                <td className="p-2 border">
                  {tache.responsable
                    ? `${tache.responsable.prenom} ${tache.responsable.nom}`
                    : '--'}
                </td>
                <td className="p-2 border">{tache.etat ? '✅ Terminé' : '⏳ En cours'}</td>
                <td className="p-2 border">{tache.priorite ? '🔥 Élevée' : '⚠️ Moyenne'}</td>
                <td className="p-2 border">{tache.commentaires || '--'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 border italic text-gray-500" colSpan={8}>
                Aucune tâche prévue pour ce jour.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Modale */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-violet-300 rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Envoyer ce planning par message</h2>
            <label className="block mb-2 text-sm font-medium text-white">
              Choisir un destinataire :
            </label>
            <select
              value={selectedDestinataireId ?? ''}
              onChange={(e) => setSelectedDestinataireId(Number(e.target.value))}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="" disabled>-- Sélectionner un utilisateur --</option>
              {utilisateurs.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.prenom} {user.nom}
                </option>
              ))}
            </select>

            <p className="mb-4 text-white">
              Le message contiendra ce lien :
              <br />
              <span className="text-blue-600 underline">
                {lienPlanning}
              </span>
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={envoyerMessage}
                disabled={!selectedDestinataireId}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer disabled:bg-blue-300"
              >  
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Affichage du nom */}
      {destinataire && (
        <p className="text-sm text-muted-foreground">
          Message destiné à <strong>{destinataire.nom}</strong>
        </p>
      )}

       {/* ✅ Message de succès */}
      {messageEnvoye && (
      <div className="mt-6 bg-green-100 border border-green-400 text-green-700 p-4 rounded">
        <p>✅ Message envoyé avec succès !</p>

      </div>
    )}
 
    </div>
  )
}
