'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' 
import { AlertTriangle } from 'lucide-react'

export default function UnauthorizedPage() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleReturn = () => {
    if (!session) {
      router.push('/login')
    } else if (session.user.role === 'UTILISATEUR') {
      router.push('/interfaceUtilisateur/dashboard')
    } else {
      router.push('/')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="max-w-md bg-white shadow-md rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4 text-yellow-500">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Accès refusé
        </h1>
        <p className="text-gray-600 mb-6">
          Vous n'avez pas la permission d'accéder à cette page.
        </p>
        <Button onClick={handleReturn}>
          Retour
        </Button>
      </div>
    </div>
  )
}
