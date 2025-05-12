'use client'  

import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() { 
  const router = useRouter()
  const [error, setError] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    })

    if (res?.ok) {
      const session = await getSession()

      if (session?.user.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/utilisateur')
      }
    } else {
      setError("Identifiants incorrects")
    }
  }

  return ( 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">CONNEXION</h2>
        </div>
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

            <div>
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mot de passe"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              CONNEXION
            </button>
          </div>
        </form>

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
