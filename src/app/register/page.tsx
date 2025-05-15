'use client'  
   
import { useRouter } from 'next/navigation'  
import { useState, useEffect } from 'react'
import { z } from 'zod' 
import { signIn } from 'next-auth/react' 
import { Role } from "@prisma/client";  

const registerSchema = z.object({
  prenom: z.string().min(2, 'Prénom requis'),
  nom: z.string().min(2, 'Nom requis'), 
  email: z.string().email('Email invalide'),
  password: z.string().min(6, '6 caractères minimum'),
  departementId: z.string().nullable().optional(),
})

export default function Register() {
  const router = useRouter()
  const [errors, setErrors] = useState<any>({})
  const [serverError, setServerError] = useState('')
  const [departements, setDepartements] = useState<any[]>([])
  const [loadingDeps, setLoadingDeps] = useState(true)

  useEffect(() => {
    const fetchDepartements = async () => {
      try {
        const res = await fetch('/api/departements')
        if (res.ok) {
          const data = await res.json()
          setDepartements(data)
        }
      } catch (err) {
        console.error('Erreur chargement départements')
      } finally {
        setLoadingDeps(false)
      }
    }

    fetchDepartements()
  }, [])

  const handleRegister = async (e: any) => {
    e.preventDefault()
    setErrors({})
    setServerError('')

    if (!e.target['not-robot'].checked) {
      setServerError('Veuillez confirmer que vous n’êtes pas un robot.')
      return
    }

    if (e.target.password.value !== e.target.confirmPassword.value) {
      setErrors({ password: ['Les mots de passe ne correspondent pas'] })
      return
    }

    const form = {
      prenom: e.target.prenom.value,
      nom: e.target.nom.value,
      email: e.target.email.value,
      password: e.target.password.value,
      departementId: e.target.departement?.value || null,
    }

    const validation = registerSchema.safeParse(form)

    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors)
      return
    } 

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    // ✅ Gérer les erreurs de l'inscription ici
    if (!res.ok) {
      setServerError(data.message || 'Erreur lors de l’inscription.')
      return
    }

    // ✅ Si inscription réussie, tenter la connexion
    const resLogin = await signIn('credentials', {
      redirect: false,
      email: form.email,
      password: form.password,    
    })

    if (resLogin?.ok) {
      const sessionRes = await fetch('/api/auth/session')
      const sessionData = await sessionRes.json()

      if (sessionData?.user?.role === 'ADMIN') {
        router.push('/admin/dashboard')
      } else {
        router.push('/interfaceUtilisateur/dashboard')
      }
    } else {
      setServerError('Connexion échouée après inscription.')
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

        <div>
          <label htmlFor="departement" className="block text-sm font-medium text-gray-700">
            Département (optionnel)
          </label>
          {loadingDeps ? (
            <p className="text-gray-500 text-sm">Chargement des départements...</p>
          ) : departements.length > 0 ? (
            <select
              name="departement"
              id="departement"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">-- Choisir un département --</option>
              {departements.map(dep => (
                <option key={dep.id} value={dep.id}>{dep.nom}</option>
              ))}
            </select>
          ) : (
            <p className="text-sm text-gray-500">Aucun département disponible pour le moment.</p>
          )}
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
