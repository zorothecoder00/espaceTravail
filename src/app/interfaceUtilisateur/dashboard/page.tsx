// src/app/interfaceUtilisateur/dashboard/page.tsx   
import { getAuthSession } from "@/lib/auth"; // helper    
import { redirect } from "next/navigation"
import { getUserDashboardStats } from "@/lib/getUserDashboardStats"
import {             
  LayoutDashboard,                   
  //Users,                         
  //Building2,  
  FolderKanban,
  CheckSquare,  
  FileText,
  Calendar
} from "lucide-react";  
import Image from "next/image"
import SignOutButton from "@/components/SignOutButton" // Assure-toi que ce composant existe   

export default async function UtilisateurDashboard() {
  const session = await getAuthSession()  
  
  // Redirection si l'utilisateur n'est pas connecté 
  if (!session?.user) redirect("/login")
  // Redirection si l'utilisateur n'est pas de rôle "UTILISATEUR"
  if (session.user.role !== "UTILISATEUR") redirect("/")

  const { projetsRestants, tachesRestantes, documents } = await getUserDashboardStats(session.user.id)  

  return (
    <div className="flex h-screen">              
      {/* Sidebar facultative si besoin plus tard */}
      <aside className="w-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-10">LOGO 
        </div>
        <nav className="flex flex-col gap-4">
          <a href="/interfaceUtilisateur/dashboard" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <LayoutDashboard className="w-5 h-5" />     
          Dashboard     
          </a>
          <a href="/interfaceUtilisateur/mesProjets/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FolderKanban className="w-5 h-5" />
          Mes Projets
          </a>
          <a href="/interfaceUtilisateur/mesTaches/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <CheckSquare className="w-5 h-5" />
          Mes Tâches
          </a>
          <a href="/interfaceUtilisateur/mesDocuments" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Mes Documents
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
        <p className="mt-2 text-gray-600 mb-6">Voici un aperçu de vos activités récentes.</p>

        {/* 💡 Cards de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Projets en cours</h2>
            <p className="text-3xl font-bold text-blue-600">{projetsRestants}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Tâches en attente</h2>
            <p className="text-3xl font-bold text-orange-600">{tachesRestantes}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Documents reçus</h2>
            <p className="text-3xl font-bold text-green-600">{documents}</p>
          </div>
        </div>

        {/* ... ici tu pourras mettre les listes plus tard si tu veux */}

        {/* Tu peux ajouter ici les documents ou tâches reçus dynamiquement */}
      </main>
    </div>
  )
}
