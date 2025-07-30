// app/profil/page.tsx (page serveur)
import { getAuthSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function ProfilPage() {
  const session = await getAuthSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Mon profil</h1>

      <p><strong>Email :</strong> {session.user.email}</p>

      <div className="mt-6 space-y-4">
        <Link
          href="/profil/changePassword"
          className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
        >
          🔒 Changer le mot de passe
        </Link>

      </div>
    </div>
  )
}
