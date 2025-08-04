'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link' // ✅ Ajout ici

type Notification = {
  id: number
  message: string
  lien?: string
  dateNotification: string
  vu: boolean
}

export default function NotificationDetailPage() {
  const { id } = useParams() as { id: string }
  const [notification, setNotification] = useState<Notification | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        // 1. GET les détails
        const res = await fetch(`/api/notifications/${id}`)
        if (!res.ok) throw new Error('Erreur lors du chargement')
        const data = await res.json()
        setNotification(data.data)

        // 2. PUT vu: true
        await fetch(`/api/notifications/${id}/vu`, {
          method: 'PUT',
        })
      } catch (err) {
        console.error(err)
        setError('Erreur lors du chargement.')
      }
    }

    if (id) {
      fetchNotification()
    }
  }, [id])

  if (error) return <p>{error}</p>
  if (!notification) return <p>Chargement...</p>

  return (
    <div className="p-4">
      <Link
        href="/notifications"
        className="text-sm text-green-700 underline hover:text-blue-900"
      >
        ← Retour aux notifications
      </Link>

      <h1 className="text-xl font-bold mb-4">Détail de la notification</h1>
      <p>{notification.message}</p>
      <p className="text-sm text-gray-500">
        {new Date(notification.dateNotification).toLocaleString()}
      </p>
      {notification.lien && (
        <a href={notification.lien} className="text-blue-600 underline text-sm" target="_blank">
          Aller au lien
        </a>
      )}
    </div> 
  )
}
