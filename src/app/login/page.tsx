import { Suspense } from 'react'
import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Chargement...</div>}>
      <LoginForm />
    </Suspense>   
  )
}       
