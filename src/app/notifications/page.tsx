'use client'

import { useEffect, useState } from 'react'    
import Link from 'next/link'
import { useSession } from 'next-auth/react'  

type Notification = {     
  id: number
  message: string
  lien?: string | null
  dateNotification: string   
}  

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  const { data: session } = useSession()

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true)
      try {

        const res = await fetch('/api/notifications')
        if (!res.ok) throw new Error('Erreur lors du chargement des notifications')

        const data = await res.json()
        setNotifications(data.data || [])     
      } catch (err) {
        console.error("Erreur inconnue", err)
        const message = err instanceof Error ? err.message : 'Erreur inconnue.'
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()  
  }, [])

  // ✅ Marquer automatiquement les notifications liées aux sous-tâches comme "vues"
  useEffect(() => {
    const markSousTacheNotificationsAsRead = async () => {
      const notifs = notifications.filter(
        (n) => n.lien === null // ou autre condition
      )  

      for (const notif of notifs) {
        try {
          await fetch(`/api/notifications/${notif.id}/vu`, {
            method: 'PUT',
          })
        } catch (err) {
          console.error(`Erreur lors de la mise à jour de la notif ${notif.id}`, err)
        }
      }
    }

    if (notifications.length > 0) {
      markSousTacheNotificationsAsRead()
    }
  }, [notifications])

  // 🔹 Supprimer une notification spécifique
  const deleteNotification = async (id: number) => {
    if (!confirm('Voulez-vous vraiment supprimer cette notification ?')) return
    try {
      await fetch(`/api/notifications?id=${id}`, { method: 'DELETE' })
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    } catch (err) {
      console.error('Erreur lors de la suppression', err)
    }
  }

  // 🔹 Supprimer toutes les notifications
  const clearNotifications = async () => {
    if (!confirm('Voulez-vous vraiment supprimer toutes les notifications ?')) return
    setDeleting(true)
    try {
      await fetch(`/api/notifications`, { method: 'DELETE' })
      setNotifications([])
    } catch (err) {
      console.error('Erreur lors du vidage des notifications', err)
    } finally {
      setDeleting(false)
    }
  }
  
  if (loading) {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-semibold mb-4">Vos notifications</h1>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse space-y-2 border p-4 rounded shadow-sm bg-white"
          >
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-1/4" />
          </div>
        ))}
      </div>   
    )
  }

  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="p-4">
      {session?.user?.role === 'ADMIN' || session?.user?.role === 'SUPER_ADMIN' ? (
        <Link href="/admin/dashboard" className="text-sm text-blue-600 underline">
          Accéder à votre dashboard
        </Link>
      ) : (
        <Link href="/interfaceUtilisateur/dashboard" className="text-sm text-blue-600 underline">
          Accéder à votre dashboard
        </Link>
      )}

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Vos notifications</h1>
        {notifications.length > 0 && (
          <button
            onClick={clearNotifications}
            disabled={deleting}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 hover:cursor-pointer disabled:opacity-50"
          >
            {deleting ? 'Suppression...' : 'Vider'}
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <p>Aucune notification pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li key={notif.id} className="border p-4 rounded shadow-sm bg-white flex justify-between items-start">
              <div>
                <p>{notif.message}</p>
                <p className="text-sm text-gray-500">
                  {new Date(notif.dateNotification).toLocaleString()}
                </p>
                {notif.lien && (
                  <Link href={`/notifications/${notif.id}`} className="text-blue-600 underline text-sm">
                    Voir plus
                  </Link>
                )}
              </div>
              <button
                onClick={() => deleteNotification(notif.id)}
                className="bg-gray-200 hover:bg-red-500 hover:text-white hover:cursor-pointer px-2 py-1 rounded text-sm"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

