'use client' 

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod' 
import { signIn } from 'next-auth/react' 

const registerSchema = z.object({
  prenom: z.string().min(2, 'Prénom requis'),
  nom: z.string().min(2, 'Nom requis'), 
  email: z.string().email('Email invalide'),
  password: z.string().min(6, '6 caractères minimum'),
})

export default function Register() {
  const router = useRouter()
  const [errors, setErrors] = useState<any>({})
  const [serverError, setServerError] = useState('')

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setErrors({})
    setServerError('')

    const form = {
      prenom: e.target.prenom.value,
      nom: e.target.nom.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    const validation = registerSchema.safeParse(form)

    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors)
      return
    }

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (res.ok) {
      // Connexion automatique avec next-auth
      await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
        callbackUrl: '/admin', 
      })
    } else {
      setServerError(data.message || 'Erreur inconnue')
    } 
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">INSCRIVEZ-VOUS</h2>
      </div>
      <form onSubmit={handleRegister} className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="prenom" className="sr-only">Prénom</label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Prénom"
            />
            {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom[0]}</p>}
          </div>

          <div>
            <label htmlFor="nom" className="sr-only">Nom</label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Nom"
            />
            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom[0]}</p>}
          </div>

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
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="not-robot"
            name="not-robot"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="not-robot" className="ml-2 block text-sm text-gray-900">
            Je ne suis pas un robot
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            SOUMETTRE 
          </button>
          {serverError && <p className="text-red-600 text-sm mt-2 text-center">{serverError}</p>}
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Avez vous déjà un compte ?{' '}
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Connectez vous
          </a>
        </p>
      </div>
    </div>
  </div>
)
}
