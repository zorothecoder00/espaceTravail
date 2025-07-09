'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { z } from 'zod'
import { Eye, EyeOff } from 'lucide-react'

const registerSchema = z.object({
  prenom: z.string().min(2, 'Prénom requis'),
  nom: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  password: z.string().min(6, '6 caractères minimum'),
  confirmPassword: z.string().min(6, 'Confirmation requise'),
  departementId: z.string().nullable().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
})

export default function Register() {
  const router = useRouter()
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const [serverError, setServerError] = useState('')
  const [departements, setDepartements] = useState<{ id: string; nom: string }[]>([])
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loadingDeps, setLoadingDeps] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)

  useEffect(() => {
    const fetchDepartements = async () => {
      try {
        const res = await fetch('/api/departements')
        if (res.ok) {
          const data = await res.json()
          setDepartements(data)
        }
      } catch (err) {
        console.error('Erreur chargement départements', err)
      } finally {
        setLoadingDeps(false)
      }
    }

    fetchDepartements()
  }, [])

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setServerError('')
    setIsSubmitting(true)

    const form = e.currentTarget // ✅ Plus précis que e.target

    const notRobot = form.elements.namedItem('not-robot') as HTMLInputElement
    const password = form.elements.namedItem('password') as HTMLInputElement
    const confirmPassword = form.elements.namedItem('confirmPassword') as HTMLInputElement
    const departement = form.elements.namedItem('departement') as HTMLSelectElement
    const prenom = form.elements.namedItem('prenom') as HTMLInputElement
    const nom = form.elements.namedItem('nom') as HTMLInputElement
    const email = form.elements.namedItem('email') as HTMLInputElement

    if (!notRobot?.checked) {
      setServerError('Veuillez confirmer que vous n’êtes pas un robot.')
      setIsSubmitting(false)
      return
    }

    if (password.value !== confirmPassword.value) {
      setErrors({ password: ['Les mots de passe ne correspondent pas'] })
      setIsSubmitting(false)
      return
    }

    const formDataValidation = {
      prenom: prenom?.value || '',
      nom: nom?.value || '',
      email: email?.value || '',
      password: password?.value || '',
      confirmPassword: confirmPassword?.value || '',
      departementId: departement?.value || undefined,
    }

    const validation = registerSchema.safeParse(formDataValidation)
    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors)
      setIsSubmitting(false)
      return
    }

    const formData = new FormData()
    formData.append('prenom', prenom.value)
    formData.append('nom', nom.value)
    formData.append('email', email.value)
    formData.append('password', password.value)
    formData.append('departementId', departement?.value || '')

    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.message || 'Erreur lors de l’inscription.')
        return
      }

      router.push('/login?registered=success')
    } catch (error) {
      console.error(error)
      setServerError("Une erreur inattendue s’est produite.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">INSCRIVEZ-VOUS</h2>
      </div>

      <form onSubmit={handleRegister} className="mt-8 space-y-6" encType="multipart/form-data">
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

          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>}
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2 text-gray-600"
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword[0]}</p>}
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

        <div>
          <label htmlFor="image" className="block text-sm font-medium">Image (optionnelle)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded"
          />
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
            disabled={isSubmitting}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isSubmitting ? 'Traitement...' : 'SOUMETTRE'}
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
  