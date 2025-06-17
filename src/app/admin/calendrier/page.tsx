'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

type TacheEvent = {
  id: number
  titre: string
  deadline: string
  projet: { nom: string }
}

export default function CalendrierPage() {
  const [events, setEvents] = useState<{ title: string; date: string }[]>([])

  useEffect(() => {
    const fetchTaches = async () => {
      try {
        const res = await fetch('/api/calendrier')
        const data: TacheEvent[] = await res.json()

        const formattedEvents = data.map(t => ({
          title: `${t.titre} (${t.projet.nom})`,
          date: t.deadline
        }))

        setEvents(formattedEvents)
      } catch (error) {
        console.error("Erreur lors du chargement des tâches admin :", error)
      }
    }

    fetchTaches()
  }, [])

  return (
    <div className="p-6">
      <Link
        href="/admin/dashboard"
        className="text-sm text-gray-600 underline"
      >
        ← Retour au Dashboard
      </Link>

      <h1 className="text-2xl font-bold mb-4">Calendrier des Tâches</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        locale="fr"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth',
        }}
      />
    </div>
  )
}
