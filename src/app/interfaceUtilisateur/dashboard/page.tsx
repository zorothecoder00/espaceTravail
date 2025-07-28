// src/app/interfaceUtilisateur/dashboard/page.tsx
import { getAuthSession } from "@/lib/auth"      
import { redirect } from "next/navigation"
import { getUserDashboardStats } from "@/lib/getUserDashboardStats"
import {     
  LayoutDashboard,                  
  FolderKanban,   
  CheckSquare,       
  FileText,   
  Calendar  
} from "lucide-react"
import Image from "next/image"
import SignOutButton from "@/components/SignOutButton"
import Link from "next/link"

export default async function UtilisateurDashboard() {
  const session = await getAuthSession()

  if (!session?.user) redirect("/login")    
  if (session?.user?.role !== "UTILISATEUR") redirect("/")  

  const { projetsRestants, tachesRestantes, documents } = await getUserDashboardStats(session.user.id)  

  return (
    <div className="flex h-screen">        
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col p-6">  
        <div className="mb-10 flex justify-center">
          <Image
            src="/logocea.jpeg"
            alt="Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div> 
        <nav className="flex flex-col gap-4">  
          <Link href="/interfaceUtilisateur/dashboard" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard        
          </Link>     
          <Link href="/interfaceUtilisateur/mesProjetsDiriges" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <FolderKanban className="w-5 h-5" />
            Projets dirigés
          </Link>
          <Link href="/interfaceUtilisateur/mesProjets/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <FolderKanban className="w-5 h-5" />
            Mes Projets
          </Link>
          <Link href="/interfaceUtilisateur/mesTaches/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <CheckSquare className="w-5 h-5" />
            Mes Tâches
          </Link>
          <Link href="/interfaceUtilisateur/planning/vue" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <Calendar className="w-5 h-5" />  
            Mon agenda personnel  
          </Link>
          <Link href="/interfaceUtilisateur/mesDocuments/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Mes Documents
          </Link>
          <Link href="/interfaceUtilisateur/calendrier" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Calendrier   
          </Link>
        </nav>
      </aside>

      {/* Main Content */}       
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Rechercher..."   
            className="p-2 border rounded w-1/2"
          />
          <div className="flex items-center gap-4">
            <Link
              href="/notifications"
              className="relative text-sm text-blue-800 font-semibold hover:underline"
            >
              Notifications
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Image
              src={session?.user?.image || "/profile.png"}
              alt="Profil utilisateur"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <SignOutButton />
          </div>
        </div>

        <h1 className="text-2xl font-bold">Bienvenue, {session.user.prenom} !</h1>
        <p className="mt-2 text-gray-600 mb-6">Voici un aperçu de vos activités récentes.</p>

        {/* Cartes de stats */}
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
      </main>      
    </div>       
  )      
}      
