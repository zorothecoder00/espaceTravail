import { Suspense } from 'react'
import PlanningFormClient from '@/components/PlanningFormClient'

export default function NouvellePagePlanning() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-indigo-100 relative overflow-hidden">
      <Suspense fallback={<p className="text-center mt-10 text-gray-600">Chargement...</p>}>
        <PlanningFormClient />
      </Suspense>  
    </div>
  )
}
