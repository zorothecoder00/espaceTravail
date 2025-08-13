import { redirect } from "next/navigation"; 
import { getAuthSession } from "@/lib/auth"; // helper  
import { Role } from '@prisma/client';
import { getDashboardData } from '@/lib/getAdminDashboardStats'      
import {                 
  LayoutDashboard,                                                        
  Users,                  
  Building2,         
  FolderKanban,  
  CheckSquare,        
  FileText,
  Calendar,
  MessagesSquare  
} from "lucide-react";         
import Image from 'next/image'  
/*import ProjectActivityChart from '@/components/ProjectActivityChart'
import ProjectDoughnutChart from '@/components/ProjectDoughnutChart'*/ 
import ChartSection from '@/components/ChartSection'  
import SignOutButton from "@/components/SignOutButton"; // 👈 le bouton à créer 
import NotificationLink from "@/components/NotificationLink"  
import Link from "next/link"    
   
export default async function Dashboard() {         
  const session = await getAuthSession();         
  console.log("Session admin dashboard:", session);   

  if (!session?.user?.role || (session.user.role !== Role.ADMIN && session.user.role !== Role.SUPER_ADMIN)) {
    redirect("/login")
  }

  const {
    totalTaches,
    projetsAttente,
    projetsEnCours,  
    tachesRecentes,     
    usersOnline
  } = await getDashboardData();

  return ( 
    <div className="flex h-screen">             
      {/* Sidebar*/}
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
          <Link href="/admin/dashboard" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard  
          </Link>
          <Link href="/admin/utilisateurs/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Users className="w-5 h-5" />
          Utilisateurs                   
          </Link>
          <Link href="/admin/departements/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Départements
          </Link>
          <Link href="/admin/projets/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FolderKanban className="w-5 h-5" />
          Projets
          </Link> 
          <Link href="/admin/taches/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <CheckSquare className="w-5 h-5" />
          Tâches
          </Link>
          <Link href="/admin/planning/vue" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <Calendar className="w-5 h-5" />  
            Mon agenda personnel  
          </Link>
          <Link href="/admin/documents/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">   
          <FileText className="w-5 h-5" />
          Documents
          </Link>
          <Link href="/admin/messages/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
            <MessagesSquare className="w-5 h-5" />
            Mes Messages
          </Link>
          <Link href="/admin/calendrier" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Calendrier
          </Link>
        </nav>
      </aside>                 
 
      {/* Main content */}            
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">   
        <div className="flex justify-between items-center mb-8">
          <input type="text" placeholder="Rechercher..." className="p-2 border rounded w-1/2" />
          <div className="flex items-center gap-4">
            <NotificationLink/>
            <Image
              src={session?.user?.image || "/profile.png"}
              alt="Profil"
              width={40}  
              height={40}
              className="rounded-full object-cover"
            />
            {/* Nouveau lien Profil / Paramètres */}
            <Link
              href="/profil"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Profil
            </Link>
            <SignOutButton /> {/* 👈 le bouton Déconnexion dynamique */}
          </div>
        </div>

        {/* Statistiques */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Stat 
          title="Total Tâches" 
          value={totalTaches} 
          icon={CheckSquare}
          
          />
          <Link href="/usersOnline">
            <Stat 
              title="Utilisateurs en ligne" 
              value={usersOnline.length} 
              icon={Users} 
            />
          </Link>

          <Link href="/projetsAttente">
            <Stat 
              title="Projets en attente" 
              value={projetsAttente} 
              icon={FolderKanban} 
            />
          </Link>

          <Link href="/projetsEncours">
            <Stat 
              title="Projets en cours" 
              value={projetsEnCours} 
              icon={FolderKanban} 
            />
          </Link>
        </div> 

        {/* Listes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card 
           title="Tâches Récentes" 
           items={tachesRecentes} 
           icon={CheckSquare}
          />
          <Card
            title="Utilisateurs connectés récemment"
            items={usersOnline} // juste un tableau d’objets { prenom, nom, image? }
            icon={Users}
          />
        </div>  
  
        {/* Graphique */}
        {/*<div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Avancement des Projets</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">[ Graphique ici bientôt 📊 ]</div>
        </div>*/}
        <div className="">
          {/*<ProjectActivityChart />
          <ProjectDoughnutChart />*/}
          <ChartSection />  {/* rendu uniquement côté client, dynamique */}
        </div>
      </main>
    </div>
  );
}
      
function Stat({
  title,
  value,
  icon: Icon,
  bgColor = 'bg-black',
}: {
  title: string;
  value: number;
  icon: React.ElementType;
  bgColor?: string;
}) {
  return (
    <div className={`${bgColor} border border-white/50 p-6 rounded shadow transition duration-300 ease-in-out hover:scale-105 flex items-center gap-4`}>
      <Icon className={`w-8 h-8 ${bgColor === 'bg-white' ? 'text-black' : 'text-white'}`} />
      <div className={`${bgColor === 'bg-white' ? 'text-black' : 'text-white'}`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-2xl">{value}</p>
      </div>
    </div>
  );
}

  
function Card({
  title,
  items,
  icon: Icon,
  bgColor = 'bg-white',
}: {
  title: string;
  items: (
    | { titre: string; utilisateurs?: { nom: string; image?: string | null }[] }
    | {  prenom: string; nom: string; image?: string | null }
    | string
  )[];
  icon: React.ElementType;
  bgColor?: string;
}) {
  return (
    <div className={`${bgColor} backdrop-blur-md border border-white/50 p-6 rounded shadow transition duration-300 ease-in-out hover:scale-105 hover:bg-sky-500/70`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => {
          // 1. Tâche enrichie avec utilisateurs
          if (typeof item === "object" && "titre" in item) {
            return (
              <li key={i} className="border-b pb-3">
                <div className="font-semibold text-black">{item.titre}</div>
                {item.utilisateurs && item.utilisateurs.length > 0 && (
                  <div className="mt-1 flex items-center gap-2">
                    {item.utilisateurs.map((u, idx) => (
                      <div
                        key={idx}  
                        className="flex items-center gap-1 text-sm text-gray-700 bg-white/50 px-2 py-1 rounded shadow"
                      >
                        <Image   
                          src={u.image || "/profile.png"}
                          alt={`${u.nom}`}
                          width={20}
                          height={20}
                          className="rounded-full object-cover"
                        />
                        <span>{`${u.nom}`}</span>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          }

          // 2. Utilisateur simple
          if (typeof item === "object" && "prenom" in item && "nom" in item) {
            return (
              <li key={i} className="border-b pb-2 flex items-center gap-3">
                <Image
                  src={item.image || "/profile.png"}
                  alt={`${item.prenom} ${item.nom}`}
                  width={24}
                  height={24}
                  className="rounded-full object-cover"
                />
                <span>{`${item.prenom} ${item.nom}`}</span>
              </li>
            );
          }

          
        })}
      </ul>
    </div>
  );

}



