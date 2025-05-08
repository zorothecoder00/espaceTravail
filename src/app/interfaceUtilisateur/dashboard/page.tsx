import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function UtilisateurDashboard() {
  const session = await getServerSession(authOptions)

  // Si pas connecté
  if (!session) {
    redirect('/login')
  }

  // Si ce n'est pas un utilisateur
  if (session.user.role !== 'UTILISATEUR') {
    redirect('/') // Ou vers une page d'erreur ou admin
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenue, {session.user.prenom} !</h1>
      <p className="mt-2 text-gray-600">Ceci est votre interface utilisateur.</p>

      {/* Ajoute ici les composants spécifiques pour un utilisateur */}
    </div>
  )
}
