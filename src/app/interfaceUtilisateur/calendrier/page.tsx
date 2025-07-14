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
  const [events, setEvents] = useState<
    { title: string; date: string; url: string }[]
  >([])

  useEffect(() => {
    const fetchTaches = async () => {
      try {
        const res = await fetch('/api/monCalendrier')
        if (!res.ok) {
          if (res.status === 401) {
            alert("Session expirée. Veuillez vous reconnecter.")
            window.location.href = '/login'
            return
          }
          throw new Error('Erreur serveur.')
        }

        const data: TacheEvent[] = await res.json()

        const formattedEvents = data.map(t => ({
          title: `${t.titre} (${t.projet.nom})`,
          date: t.deadline,
          url: `/interfaceUtilisateur/calendrier/${t.id}`,
        }))

        setEvents(formattedEvents)
      } catch (error) {
        console.error("Erreur chargement tâches calendrier utilisateur :", error)
      }
    }

    fetchTaches()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="/interfaceUtilisateur/dashboard"
        className="text-sm text-gray-600 underline"
      >
        ← Retour au Dashboard
      </Link>

      <h1 className="text-2xl font-bold mb-4">Mon calendrier de tâches</h1>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale="fr"
        events={events}
        height="auto"
        eventColor="#3b82f6"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth',
        }}
        eventClick={(info) => {
          info.jsEvent.preventDefault()
          if (info.event.url) {
            window.open(info.event.url, "_self")
          }
        }}
      />
    </div>
  )
}
