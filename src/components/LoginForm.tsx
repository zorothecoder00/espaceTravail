'use client'

import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Eye, EyeOff, Building2, Mail, Lock } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()  
  const searchParams = useSearchParams()
  const [error, setError] = useState('')
  const [infoMessage, setInfoMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!searchParams) return;

    const registered = searchParams.get('registered')
    const logout = searchParams.get('logout')

    if (registered === 'success') {
      setInfoMessage('✅ Compte créé avec succès. Veuillez vous connecter.')
    }

    if (logout === 'success') {
      setInfoMessage('✅ Déconnexion réussie.')
    }
  }, [searchParams])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const form = e.target as HTMLFormElement

    const res = await signIn('credentials', {
      redirect: false,
      email: form.email.value.trim(),
      password: form.password.value.trim(),
    })

    if (res?.ok) {
      const sessionRes = await fetch("/api/auth/session")
      const sessionData = await sessionRes.json()

      const role = sessionData?.user?.role

      if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
        router.push('/admin/dashboard')
      } else if (role === 'UTILISATEUR') {
        router.push('/interfaceUtilisateur/dashboard')
      } else {
        setError('Rôle non autorisé')
      }
    } else {
      setError("Identifiants incorrects")
    }

    setIsLoading(false)
  } 

  return (  
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="text-center">
        <div className="bg-blue-600 p-3 rounded-xl inline-flex justify-center">
          <Building2 className="h-8 w-8 text-white" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">CONNEXION</h2>
      </div>

      {infoMessage && (
        <div className="text-green-600 text-sm text-center mb-4">
          {infoMessage}
        </div>
      )}

      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="E-mail"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="appearance-none rounded-md relative block w-full pl-10 pr-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connexion...' : 'CONNEXION'}
          </button>
        </div>
      </form>

      {isLoading && (
        <p className="text-center text-sm text-gray-600">Connexion en cours...</p>
      )}

      
    </div>
  </div>
)
}
