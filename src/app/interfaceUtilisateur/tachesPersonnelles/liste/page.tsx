'use client'

import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { format, parseISO } from 'date-fns'  
import { EventClickArg } from '@fullcalendar/core'

type SousTache = {  
  id: number
  contenu: string  
  statut: string
}

type Tache = {
  id: number
  titre: string
  contenu: string
  date: string
  statut: string
  sousTaches: SousTache[]
}

export default function ListeTachesPersonnelles() {
  const [taches, setTaches] = useState<Tache[]>([])
  const [tacheActive, setTacheActive] = useState<Tache | null>(null)

  useEffect(() => {
    fetch('/api/tachesPersonnelles')
      .then(res => res.json())
      .then(data => setTaches(data))
  }, [])

  const events = taches.map(tache => ({
    id: String(tache.id),
    title: tache.titre,
    date: tache.date,
    extendedProps: tache,
    color: tache.statut === 'TERMINEE' ? '#16a34a' : '#f59e0b', // Vert ou orange
  }))

  const handleEventClick = (info: EventClickArg) => {
    const tache = info.event.extendedProps as Tache
    setTacheActive(tache)
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mon planning personnel</h1>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        locale="fr"
        height="auto"
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth',
        }}
      />

      {tacheActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold">{tacheActive.titre}</h2>
            <p className="mt-2 text-gray-700 text-sm">{tacheActive.contenu}</p>
            <p className="text-sm mt-2"><strong>Date :</strong> {format(parseISO(tacheActive.date), 'dd/MM/yyyy')}</p>
            <p className="text-sm"><strong>Statut :</strong> <span className={tacheActive.statut === 'TERMINEE' ? 'text-green-600' : 'text-orange-500'}>{tacheActive.statut}</span></p>

            <h3 className="mt-4 font-medium">Sous-tâches :</h3>
            <ul className="list-disc list-inside text-sm">
              {tacheActive.sousTaches.map(s => (
                <li key={s.id}>
                  {s.contenu} — <span className={s.statut === 'TERMINEE' ? 'text-green-600' : 'text-orange-600'}>{s.statut}</span>
                </li>
              ))}
            </ul>

            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setTacheActive(null)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
