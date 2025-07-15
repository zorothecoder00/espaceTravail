"use client"

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
  const [events, setEvents] = useState<
    { title: string; date: string; url: string }[]
  >([])

  useEffect(() => {
    const fetchTaches = async () => {
      try {
        const res = await fetch('/api/calendrier')
        const json = await res.json()
        const data: TacheEvent[] = json.data // 👈 ici on prend bien le tableau

        const formattedEvents = data.map(t => ({
          title: `${t.titre} (${t.projet.nom})`,
          date: t.deadline,
          url: `/admin/calendrier/${t.id}`, // 👈 lien cliquable vers le détail
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
        eventClick={(info) => {
          // ouverture via lien cliquable
          info.jsEvent.preventDefault()
          if (info.event.url) {
            window.open(info.event.url, "_self") // ← redirige vers la page [id]
          }
        }}
      />
    </div>
  )
}
