'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'   
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

type Event = {
  id: string
  title: string
  date: string
}

export default function CalendrierPage() {
  const { status } = useSession()
  const router = useRouter()

  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/monCalendrier')
        if (!res.ok) throw new Error('Erreur lors du chargement.')
        const data = await res.json()
        setEvents(data.events)
      } catch (error) {
        console.error('Erreur:', error)
      }
    }

    if (status === 'authenticated') {
      fetchEvents()
    }
  }, [status])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/interfaceUtilisateur/dashboard" className="text-sm text-gray-600 underline">
        ← Retour au Dashboard
      </Link>
      <h1 className="text-2xl font-bold mb-4">Mon calendrier de tâches</h1>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="fr"
        events={events}
        eventColor="#3b82f6"
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth',
        }}
      />
    </div>
  )
}
