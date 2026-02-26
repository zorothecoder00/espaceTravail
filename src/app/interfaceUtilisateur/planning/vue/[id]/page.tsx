'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

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
  const searchParams = useSearchParams()
  const readOnly = searchParams?.get('readonly') === '1'

  const [planningData, setPlanningData]           = useState<Planning | null>(null)
  const [errorMsg, setErrorMsg]                   = useState('')
  const [loading, setLoading]                     = useState(false)
  const [showModal, setShowModal]                 = useState(false)
  const [sending, setSending]                     = useState(false)
  const [lienPlanning, setLienPlanning]           = useState('')
  const [utilisateurs, setUtilisateurs]           = useState<User[]>([])
  const [selectedDestinataireId, setSelectedDestinataireId] = useState<number | null>(null)

  useEffect(() => {
    const fetchPlanning = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/planning/${id}`)
        if (!res.ok) { setErrorMsg('Erreur lors de la récupération du planning'); return }
        const data = await res.json()
        setPlanningData(data.data)
      } catch {
        setErrorMsg('Erreur serveur')
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchPlanning()
  }, [id])

  useEffect(() => {
    if (typeof window !== 'undefined' && id) {
      const url = new URL(`/interfaceUtilisateur/planning/vue/${id}`, window.location.origin)
      url.searchParams.set('readonly', '1')
      setLienPlanning(url.toString())
    }
  }, [id])

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const res  = await fetch('/api/utilisateurs')
        const data = await res.json()
        setUtilisateurs(data.data || [])
      } catch {
        console.error('Erreur fetch utilisateurs')
      }
    }
    fetchUtilisateurs()
  }, [])

  const envoyerMessage = async () => {
    if (!selectedDestinataireId) return
    setSending(true)
    try {
      const fd = new FormData()
      fd.append('contenu', `Voici le lien du planning : ${lienPlanning}`)
      fd.append('receiverId', selectedDestinataireId.toString())
      fd.append('planningId', id)

      const res = await fetch('/api/messages', { method: 'POST', body: fd })
      if (res.ok) {
        toast.success('Planning envoyé avec succès ✅', { autoClose: 4000 })
        setShowModal(false)
        setSelectedDestinataireId(null)
      } else {
        const data = await res.json()
        toast.error(data.message || 'Erreur lors de l\'envoi')
      }
    } catch {
      toast.error('Erreur lors de l\'envoi du message')
    } finally {
      setSending(false)
    }
  }

  const formatDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString('fr-FR', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
    })

  if (loading) {
    return (
      <div className="p-6 space-y-4 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-100 rounded w-1/4" />
        <div className="h-48 bg-gray-100 rounded" />
      </div>
    )
  }

  if (errorMsg) return <p className="p-6 text-red-500 font-medium">{errorMsg}</p>
  if (!planningData) return <p className="p-6 text-gray-500">Aucun planning trouvé.</p>

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Barre d'actions */}
      {!readOnly && (
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <Link href="/interfaceUtilisateur/planning/vue" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors">
            ← Retour sur la liste des Plannings
          </Link>
          <Link href="/interfaceUtilisateur/planning/new" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors">
            + Créer un nouveau Planning
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm"
          >
            <PaperAirplaneIcon className="w-4 h-4" />
            Envoyer par message
          </button>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-2">
        Planning Journalier — {formatDate(planningData.date)}
      </h1>

      <div className="mb-6 text-sm text-gray-600 space-y-1">
        <p><span className="font-semibold text-gray-800">Titre :</span> {planningData.titre}</p>
        <p>
          <span className="font-semibold text-gray-800">Responsable :</span>{' '}
          {planningData.responsable
            ? `${planningData.responsable.prenom} ${planningData.responsable.nom}`
            : '—'}
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-700 font-semibold">
            <tr>
              <th className="p-3 border-b">Heure</th>
              <th className="p-3 border-b">Tâche prévue</th>
              <th className="p-3 border-b">Objectif</th>
              <th className="p-3 border-b">Résultat attendu</th>
              <th className="p-3 border-b">Responsable</th>
              <th className="p-3 border-b">État</th>
              <th className="p-3 border-b">Priorité</th>
              <th className="p-3 border-b">Commentaires</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {planningData.taches?.length > 0 ? (
              planningData.taches.map(tache => (
                <tr key={tache.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-medium text-gray-700">{tache.heure}</td>
                  <td className="p-3">{tache.titre}</td>
                  <td className="p-3 text-gray-500">{tache.objectif || '—'}</td>
                  <td className="p-3 text-gray-500">{tache.resultatAttendu || '—'}</td>
                  <td className="p-3 text-gray-500">
                    {tache.responsable ? `${tache.responsable.prenom} ${tache.responsable.nom}` : '—'}
                  </td>
                  <td className="p-3">
                    {tache.etat
                      ? <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-medium">✅ Terminé</span>
                      : <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full text-xs font-medium">⏳ En cours</span>
                    }
                  </td>
                  <td className="p-3">
                    {tache.priorite
                      ? <span className="inline-flex items-center gap-1 text-red-700 bg-red-50 px-2 py-0.5 rounded-full text-xs font-medium">🔥 Élevée</span>
                      : <span className="inline-flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">⚠️ Moyenne</span>
                    }
                  </td>
                  <td className="p-3 text-gray-500">{tache.commentaires || '—'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-6 text-center italic text-gray-400">
                  Aucune tâche prévue pour ce planning.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modale d'envoi */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <PaperAirplaneIcon className="w-5 h-5 text-indigo-600" />
                Envoyer ce planning
              </h2>
              <button
                onClick={() => { setShowModal(false); setSelectedDestinataireId(null) }}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Destinataire
                </label>
                <select
                  value={selectedDestinataireId ?? ''}
                  onChange={e => setSelectedDestinataireId(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition-colors bg-white"
                >
                  <option value="" disabled>— Sélectionner un utilisateur —</option>
                  {utilisateurs.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.prenom} {user.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 text-xs text-gray-500 border border-slate-200">
                <p className="font-medium text-gray-700 mb-1">Lien qui sera partagé :</p>
                <p className="break-all text-indigo-600">{lienPlanning}</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 px-5 pb-5">
              <button
                onClick={() => { setShowModal(false); setSelectedDestinataireId(null) }}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors font-medium"
              >
                Annuler
              </button>
              <button
                onClick={envoyerMessage}
                disabled={!selectedDestinataireId || sending}
                className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi…
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4" />
                    Envoyer
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
