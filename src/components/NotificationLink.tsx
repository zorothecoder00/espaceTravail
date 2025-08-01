'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NotificationLink() {
  const [nbNonLues, setNbNonLues] = useState<number>(0)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications/non-lues')
        const data = await res.json()
        setNbNonLues(data.data)
      } catch (error) {
        console.error('Erreur lors du chargement des notifications', error)
      }
    }

    fetchNotifications()
  }, [])

  return (
    <Link href="/notifications" className="relative text-sm text-blue-800 font-semibold hover:underline">
      Notifications
      {nbNonLues > 0 && (
        <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {nbNonLues}
        </span>
      )}
    </Link>
  )
}
