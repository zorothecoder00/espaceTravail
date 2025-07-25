'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import type { Statut, Priorite } from '@prisma/client'

type User = {
  id: number     
  nom: string
  prenom: string     
}

type Projet = {
  id: number
  nom: string
}

type Document = {
  id: number
  titre: string
  fichier: string
}

type Commentaire = {
  id: number
  contenu: string
  auteur?: User
}

type SousTacheProjet = {
  id: number
  titre: string
  description?: string | null
  deadline?: string | null
  statut: Statut
  responsable?: User | null
  utilisateurs?: SousTacheUtilisateur[]
  priorite?: Priorite
  commentaires?: Commentaire[] | null
  pieceJointe?: Document[] | null
}

type SousTacheUtilisateur = {
  sousTacheProjet: SousTacheProjet
  user: User
  statutPersonnel?: Statut
  dateDebut?: string
  dateFin?: string

}

type Notification = {
  id: number
  contenu: string
  date: string
}

type Message = {
  id: number
  contenu: string
  date: string
}

type TacheDetail = {
  id: number
  titre: string
  description: string | null
  deadline: string | null
  statut: Statut
  projet: Projet
  TacheUtilisateur: { 
    user: User
    statutPersonnel?: Statut
    dateDebut?: string
    dateFin?: string 
  }[]
  sousTachesProjet?: SousTacheProjet[]
  notifications: Notification[]
  messages: Message[]
}

export default function TacheDetailPage() {
  const { id } = useParams() as { id: string }
  const [tache, setTache] = useState<TacheDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return

    const fetchTache = async () => {
      try {
        const res = await fetch(`/api/mesTaches/${id}`)
        if (!res.ok) {
          if (res.status === 401) {
            setError('Non autorisé. Veuillez vous connecter.')
          } else if (res.status === 403) {
            setError("Vous n'êtes pas assigné à cette tâche.")
          } else if (res.status === 404) {
            setError('Tâche introuvable.')
          } else {
            setError('Erreur lors de la récupération.')
          }
          return
        }

        const data = await res.json()
        setTache(data.data)
      } catch (err) {
        console.error(err)
        setError('Erreur réseau.')
      } finally {
        setLoading(false)
      }
    }

    fetchTache()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />
  if (error) return <p className="text-red-600">{error}</p>
  if (!tache) return <p className="text-red-600">Aucune donnée trouvée.</p>

  return (
    <div className="p-6 space-y-6">
      <Link
        href="/interfaceUtilisateur/mesTaches/liste"
        className="text-sm text-blue-600 underline"
      >
        ← Retour à la liste des tâches
      </Link>

      <h1 className="text-2xl font-bold">Détail de la tâche</h1>

      <Card>
        <CardContent className="space-y-2 pt-4">
          <p><strong>Titre :</strong> {tache.titre}</p>
          <p><strong>Description :</strong> {tache.description || 'Aucune description'}</p>
          <p><strong>Deadline :</strong> {tache.deadline ? new Date(tache.deadline).toLocaleString('fr-FR') : 'Non définie'}</p>
          <p><strong>Statut :</strong> <Badge>{tache.statut}</Badge></p>
          <p><strong>Projet :</strong> {tache.projet?.nom || 'Aucun'}</p>
          <p>
            <strong>Utilisateurs assignés :</strong>{' '}
            {tache.TacheUtilisateur.length === 0 ? (
              'Aucun'
            ) : (
              tache.TacheUtilisateur.map((a, i) => {
                const debut = a.dateDebut ? new Date(a.dateDebut).toLocaleDateString('fr-FR') : '-'
                const fin = a.dateFin ? new Date(a.dateFin).toLocaleDateString('fr-FR') : '-'
                return (
                  <span key={a.user.id}>
                    {a.user.prenom} {a.user.nom} (
                    statut: {a.statutPersonnel || '-'}, début: {debut}, fin: {fin}
                    ){i < tache.TacheUtilisateur.length - 1 ? ', ' : ''}
                  </span>
                )
              })    
            )}
          </p>

          <p><strong>Notifications :</strong> {tache.notifications.length}</p>
          <p><strong>Messages :</strong> {tache.messages.length}</p>
        </CardContent>
      </Card>

      {/* Sous-tâches */}
      {tache.sousTachesProjet && (
        <Card>
          <CardContent className="pt-4">
            <h2 className="text-lg font-semibold mb-2">Sous-tâches</h2>
            {tache.sousTachesProjet.length === 0 ? (
              <p>Aucune sous-tâche</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 border">Titre</th>
                      <th className="p-2 border">Responsable</th>
                      <th className="p-2 border">Utilisateur</th>
                      <th className="p-2 border">Date début</th>
                      <th className="p-2 border">Date fin</th>
                      <th className="p-2 border">Statut personnel</th>
                      <th className="p-2 border">Priorité</th>
                      <th className="p-2 border">Pièces jointes</th>
                      <th className="p-2 border">Commentaires</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tache.sousTachesProjet.map((st) => {
                      const utilisateurs = st.utilisateurs ?? []

                      return utilisateurs.length > 0 ? (
                        utilisateurs.map((u) => (
                          <tr key={`${st.id}-${u.user.id}`}>
                            <td className="p-2 border">{st.titre}</td>
                            <td className="p-2 border">{st.responsable ? `${st.responsable.nom} ${st.responsable.prenom}` : '—'}</td>
                            <td className="p-2 border">{u.user.nom} {u.user.prenom}</td>
                            <td className="p-2 border">{u.dateDebut ? new Date(u.dateDebut).toLocaleDateString('fr-FR') : '—'}</td>
                            <td className="p-2 border">{u.dateFin ? new Date(u.dateFin).toLocaleDateString('fr-FR') : '—'}</td>
                            <td className="p-2 border">{u.statutPersonnel ?? '—'}</td>
                            <td className="p-2 border">{st.priorite ?? '—'}</td>
                            <td className="p-2 border">
                              {st.pieceJointe && st.pieceJointe.length > 0 ? (
                                <ul className="list-disc pl-4">
                                  {st.pieceJointe.map((doc, i) => (
                                    <li key={i}>
                                      <a
                                        href={doc.fichier}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                      >
                                        {doc.titre || `Document ${i + 1}`}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              ) : '—'}
                            </td>
                            <td className="p-2 border">
                              {st.commentaires && st.commentaires.length > 0 ? (
                                <ul className="list-disc pl-4">
                                  {st.commentaires.map((c, i) => (
                                    <li key={i}>
                                      {c.contenu}
                                      {c.auteur && (
                                        <span className="text-gray-500 text-xs"> — {c.auteur.nom} {c.auteur.prenom}</span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              ) : '—'}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr key={st.id}>
                          <td className="p-2 border">{st.titre}</td>
                          <td className="p-2 border">{st.responsable ? `${st.responsable.nom} ${st.responsable.prenom}` : '—'}</td>
                          <td className="p-2 border">—</td>
                          <td className="p-2 border">—</td>
                          <td className="p-2 border">—</td>
                          <td className="p-2 border">—</td>
                          <td className="p-2 border">{st.priorite ?? '—'}</td>
                          <td className="p-2 border">
                            {st.pieceJointe && st.pieceJointe.length > 0 ? (
                              <ul className="list-disc pl-4">
                                {st.pieceJointe.map((doc, i) => (
                                  <li key={i}>{doc.titre}</li>
                                ))}
                              </ul>
                            ) : '—'}
                          </td>
                          <td className="p-2 border">
                            {st.commentaires && st.commentaires.length > 0 ? (
                              <ul className="list-disc pl-4">
                                {st.commentaires.map((c, i) => (
                                  <li key={i}>
                                    {c.contenu}
                                    {c.auteur && (
                                      <span className="text-gray-500 text-xs"> — {c.auteur.nom} {c.auteur.prenom}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : '—'}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
