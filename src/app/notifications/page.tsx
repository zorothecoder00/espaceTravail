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

  const { data: session } = useSession()

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true)
      try {

        const res = await fetch('/api/notifications', { cache: 'no-store' })
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
      {session?.user?.role === 'ADMIN' || 'SUPER_ADMIN' ? (
        <Link href="/admin/dashboard" className="text-sm text-blue-600 underline">
          Accéder à votre dashboard
        </Link>
      ) : (
        <Link href="/interfaceUtilisateur/dashboard" className="text-sm text-blue-600 underline">
          Accéder à votre dashboard
        </Link>
      )}

      <h1 className="text-xl font-semibold mb-4">Vos notifications</h1>

      {notifications.length === 0 ? (
        <p>Aucune notification pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li key={notif.id} className="border p-4 rounded shadow-sm bg-white">
              <p>{notif.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(notif.dateNotification).toLocaleString()}
              </p>
              {notif.lien && (
                <Link href={`/notifications/${notif.id}`} className="text-blue-600 underline text-sm">
                  Voir plus
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
