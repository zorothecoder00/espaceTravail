// src/app/interfaceUtilisateur/dashboard/page.tsx
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Image from "next/image"
import SignOutButton from "@/components/SignOutButton" // Assure-toi que ce composant existe

export default async function UtilisateurDashboard() {
  const session = await getServerSession(authOptions)

  // Redirection si l'utilisateur n'est pas connecté ou n'est pas de rôle "UTILISATEUR"
  if (!session) redirect("/login")
  if (session.user.role !== "UTILISATEUR") redirect("/")

  return (
    <div className="flex h-screen">
      {/* Sidebar facultative si besoin plus tard */}
            <aside className="w-64 bg-gradient-to-b from-sky-500 to-violet-500 text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-10">LOGO</div>
        <nav className="flex flex-col gap-4">
          <a href="/interfaceUtilisateur/dashboard" className="hover:bg-blue-700 p-2 rounded">Dashboard</a>
          <a href="/interfaceUtilisateur/departements" className="hover:bg-blue-700 p-2 rounded">Départements</a>
          <a href="/interfaceUtilisateur/projets" className="hover:bg-blue-700 p-2 rounded">Projets</a>
          <a href="/interfaceUtilisateur/taches" className="hover:bg-blue-700 p-2 rounded">Tâches</a>
          <a href="/interfaceUtilisateur/documents" className="hover:bg-blue-700 p-2 rounded">Documents</a>
          <a href="/interfaceUtilisateur/calendrier" className="hover:bg-blue-700 p-2 rounded">Calendrier</a>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Rechercher..."
            className="p-2 border rounded w-1/2"
          />
          <div className="flex items-center gap-4">
            <a
              href="/notifications"
              className="relative text-sm text-blue-800 font-semibold hover:underline"
            >
              Notifications
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </a>
            <Image
              src="/profile.jpg"
              alt="Profil"
              width={40}
              height={40}
              className="rounded-full"
            />
            <SignOutButton />
          </div>
        </div>

        {/* Bienvenue + contenus utilisateur */}
        <h1 className="text-2xl font-bold">Bienvenue, {session.user.prenom} !</h1>
        <p className="mt-2 text-gray-600">Ceci est votre interface utilisateur.</p>

        {/* Tu peux ajouter ici les documents ou tâches reçus dynamiquement */}
      </main>
    </div>
  )
}
