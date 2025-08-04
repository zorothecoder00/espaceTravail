 "use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link" 
import ReactMarkdown from "react-markdown"
import { Statut, Priorite } from '@prisma/client'   

type User = {
  id: number
  nom: string
  prenom: string
}

type Document = {
  id: number
  titre: string
  fichier: string
}

type Commentaire = {
  id: number
  titre?: string
  contenu: string
  auteur?: User
  createdAt?: string
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


type TacheUtilisateur = {
  id: number
  user: User
}

type Projet = {
  id: number
  nom: string
}

type Notification = {
  id: number
  message: string
  vu: boolean
  dateNotification: string
}

type Message = {
  id: number
  contenu: string
  createdAt: string
}

type TacheDetail = {
  id: number
  titre: string
  description: string | null
  deadline: string | null
  statut: Statut
  projet: Projet
  sousTachesProjet: SousTacheProjet[]
  TacheUtilisateur: TacheUtilisateur[]
  notifications: Notification[]
  messages: Message[]
}   

export default function TacheDetailPage() {
  const { id } = useParams() as { id: string }
  const [tache, setTache] = useState<TacheDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    async function fetchTache() {
      try {
        const res = await fetch(`/api/taches/${id}`)
        if (!res.ok) {
          throw new Error("Erreur récupération tâche")
        }
        const json = await res.json()
        setTache(json.data)

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTache()
  }, [id])

  if (loading) return <Skeleton className="w-full h-32 rounded-xl" />

  if (!tache) return <p className="text-red-600">Tâche introuvable</p>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Détail de la tâche</h1>
      <Link href={`/notifications/${tache.notifications[0]?.id} `} className="text-blue-600 hover:underline mb-4 block">
        ← Retour vers la notification  
      </Link>
  
      <Card>
        <CardContent>          
          <p><strong>Titre :</strong> {tache.titre}</p>
          <div>
            <strong>Description :</strong>  
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
              <ReactMarkdown>
                {tache.description ?? "_Aucune description_"}
              </ReactMarkdown>
            </div>
          </div>
          <p><strong>Statut :</strong> {tache.statut}</p>
          <p><strong>Deadline :</strong> {tache.deadline ? new Date(tache.deadline).toLocaleDateString("fr-FR") : "Non définie"}</p>
          <p><strong>Projet :</strong> {tache.projet.nom}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Utilisateurs assignés</h2>
          {tache.TacheUtilisateur.length === 0 ? (
            <p>Aucun utilisateur assigné</p>
          ) : (
            <ul className="list-disc pl-5">
              {tache.TacheUtilisateur.map((tu) => (
                <li key={tu.user.id}>{tu.user.nom} {tu.user.prenom}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Notifications liées</h2>
          {tache.notifications.length === 0 ? (
            <p>Aucune notification</p>
          ) : (
            <ul className="list-disc pl-5">
              {tache.notifications.map((notif) => (
                <li key={notif.id}>{notif.message} {notif.vu ? "(Vu)" : "(Non vu)"}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Messages associés</h2>
          {tache.messages.length === 0 ? (
            <p>Aucun message</p>
          ) : (
            <ul className="list-disc pl-5">
              {tache.messages.map((msg) => (
                <li key={msg.id}>
                  <p>{msg.contenu}</p>
                  <small className="text-gray-500">{new Date(msg.createdAt).toLocaleString("fr-FR")}</small>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
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
                    if(utilisateurs?.length > 0){
                      return utilisateurs.map((u) => (
                        <tr key={`${st.id}-${u.user.id}`}>
                        <td className="p-2 border">{st.titre}</td>
                        <td className="p-2 border">{st.responsable ? `${st.responsable.nom} ${st.responsable.prenom}` : '—'}</td>
                        <td className="p-2 border">{u.dateDebut ? new Date(u.dateDebut).toLocaleDateString("fr-FR") : '—'}</td>
                        <td className="p-2 border">{u.dateFin ? new Date(u.dateFin).toLocaleDateString("fr-FR") : '—'}</td>
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
                                <li key={i}>{c.contenu}</li>
                              ))}
                            </ul>
                          ) : '—'}
                        </td>
                      </tr>
                    )) 
                    }else{
                      return(
                      <tr key={st.id}>
                        <td className="p-2 border">{st.titre}</td>
                        <td className="p-2 border">{st.responsable ? `${st.responsable.nom} ${st.responsable.prenom}` : '—'}</td>
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
                    }
                                           
                  })}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

    </div>
  )

}
