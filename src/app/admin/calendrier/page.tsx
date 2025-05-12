'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'
import { formatDate } from '@fullcalendar/core'

type TacheEvent = {
  id: number
  titre: string
  deadline: string
  projet: { nom: string }
}

export default function CalendrierPage() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    const fetchTaches = async () => {
      const res = await fetch('/api/calendrier')
      const data: TacheEvent[] = await res.json()

      const formattedEvents = data.map(t => ({
        title: `${t.titre} (${t.projet.nom})`,
        date: t.deadline
      }))

      setEvents(formattedEvents)
    }

    fetchTaches()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Calendrier des Tâches</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        locale="fr"
      />
    </div>
  )
}
