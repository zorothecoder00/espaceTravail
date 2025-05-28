// src/app/interfaceUtilisateur/dashboard/page.tsx
import { getAuthSession } from "@/lib/auth"; // helper 
import { redirect } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Building2,
  FolderKanban,
  CheckSquare,
  FileText,
  Calendar
} from "lucide-react";  
import Image from "next/image"
import SignOutButton from "@/components/SignOutButton" // Assure-toi que ce composant existe

export default async function UtilisateurDashboard() {
  const session = await getAuthSession()

  // Redirection si l'utilisateur n'est pas connecté ou n'est pas de rôle "UTILISATEUR"
  if (!session?.user) redirect("/login")
  if (session.user.role !== "UTILISATEUR") redirect("/")

  return (
    <div className="flex h-screen">           
      {/* Sidebar facultative si besoin plus tard */}
      <aside className="w-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-10">LOGO</div>
          <nav className="flex flex-col gap-4">
            <a href="/admin/dashboard" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
          </a>
          <a href="/interfaceUtilisateur/utilisateurs/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Users className="w-5 h-5" />
          Utilisateurs
          </a>
          <a href="/interfaceUtilisateur/departements/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Départements
          </a>
          <a href="/interfaceUtilisateur/projets/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FolderKanban className="w-5 h-5" />
          Projets
          </a>
          <a href="/interfaceUtilisateur/taches/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <CheckSquare className="w-5 h-5" />
          Tâches
          </a>
          <a href="/interfaceUtilisateur/documents" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Documents
          </a>
          <a href="/interfaceUtilisateur/calendrier" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Calendrier
          </a>
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
              src="/profile.png"
              alt="Profil"
              width={40}
              height={40}
              className="rounded-full"
            />
            <SignOutButton />
          </div>
        </div>

        {/* Bienvenue + contenus utilisateur */}
        <h1 className="text-2xl font-bold">Bienvenue, {session?.user?.prenom} !</h1>
        <p className="mt-2 text-gray-600">Ceci est votre interface utilisateur.</p>

        {/* Tu peux ajouter ici les documents ou tâches reçus dynamiquement */}
      </main>
    </div>
  )
}
