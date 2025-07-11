'use client'

import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'lucide-react'

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
      email: form.email.value,
      password: form.password.value,
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
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">CONNEXION</h2>
      </div>

      {infoMessage && (
        <div className="text-green-600 text-sm text-center mb-4">
          {infoMessage}
        </div>
      )}

      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="E-mail"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">Mot de passe</label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Mot de passe"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-600"
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
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connexion...' : 'CONNEXION'}
          </button>
        </div>
      </form>

      {isLoading && (
        <p className="text-center text-sm text-gray-600">Connexion en cours...</p>
      )}

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Pas encore de compte ?{' '}
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Inscrivez-vous
          </a>
        </p>
      </div>
    </div>
  </div>
)
}
