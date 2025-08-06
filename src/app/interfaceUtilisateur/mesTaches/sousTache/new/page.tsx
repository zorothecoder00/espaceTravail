import { Suspense } from 'react'
import NouvelleSousTacheForm from '@/components/NouvelleSousTacheForm'

export default function Page() {
  return( 
    <Suspense fallback={<div className="text-center mt-10">Chargement...</div>}>
      <NouvelleSousTacheForm />
    </Suspense>
  )    
}
   