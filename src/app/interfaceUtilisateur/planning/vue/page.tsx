'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useRouter } from 'next/navigation'

interface Planning {
  id: number
  titre: string
  date: string // Format ISO : '2025-07-28'
}

export default function PlanningCalendarView() {
  const [plannings, setPlannings] = useState<Planning[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/planning')
      const json = await res.json()
      setPlannings(json.data || [])
    }
    fetchData()     
  }, [])

  const events = plannings.map((plan) => ({
    id: String(plan.id),
    title: plan.titre,
    date: plan.date,
    backgroundColor: '#2563eb',
    textColor: 'white',
  }))

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vue planning</h1>
        <div className="flex gap-2">
          <Link
            href="/interfaceUtilisateur/dashboard"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"  
          >
            ← Retour
          </Link>
          <Link
            href="/interfaceUtilisateur/planning/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ajouter un planning
          </Link>
        </div>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale="fr"
        eventClick={(info) => {
          const planningId = info.event.id
          router.push(`/interfaceUtilisateur/planning/vue/${planningId}`)
        }}
        dateClick={(info) => {
          router.push(`/interfaceUtilisateur/planning/new?date=${info.dateStr}`)
        }}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth',
        }}
        height="auto"
      />
    </div>
  )
}
