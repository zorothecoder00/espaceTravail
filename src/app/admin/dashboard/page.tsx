import { redirect } from "next/navigation"; 
import { getAuthSession } from "@/lib/auth"; // helper  
import prisma from "@/lib/prisma";              
import { Statut, Role } from "@prisma/client";  
import {
  LayoutDashboard,
  Users,
  Building2,
  FolderKanban,  
  CheckSquare,    
  FileText,
  Calendar  
} from "lucide-react";         
import Image from 'next/image'  
import ProjectActivityChart from '@/components/ProjectActivityChart'
import ProjectDoughnutChart from '@/components/ProjectDoughnutChart'   
import SignOutButton from "@/components/SignOutButton"; // 👈 le bouton à créer   
   
export default async function Dashboard() {       
  const session = await getAuthSession(); 
  console.log("Session admin dashboard:", session);   

  if (!session?.user?.role || session.user.role !== Role.ADMIN) {
    redirect("/login");
  }

  const [
    { totalTaches },
    { projetsAttente },
    { projetsEnCours },
    tachesRecentes,
    usersOnline
  ] = await Promise.all([
    prisma.tache.count().then(count => ({ totalTaches: count })),
    prisma.projet.count({ where: { statut: Statut.ATTENTE } }).then(count => ({ projetsAttente: count })),
    prisma.projet.count({ where: { statut: Statut.EN_COURS } }).then(count => ({ projetsEnCours: count })),
    prisma.tache.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.user.findMany({
      where: {
        lastActiveAt: {
          gte: new Date(Date.now() - 5 * 60 * 1000),
        },
      },
      select: {
        prenom: true,
        nom: true,
      },
    }),
  ]);


  return (
    <div className="flex h-screen">  
      {/* Sidebar*/}
      <aside className="w-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-10">LOGO</div> 
        <nav className="flex flex-col gap-4">  
          <a href="/admin/dashboard" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
          </a>
          <a href="/admin/utilisateurs/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Users className="w-5 h-5" />
          Utilisateurs
          </a>
          <a href="/admin/departements/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Building2 className="w-5 h-5" />
          Départements
          </a>
          <a href="/admin/projets/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FolderKanban className="w-5 h-5" />
          Projets
          </a>
          <a href="/admin/taches/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <CheckSquare className="w-5 h-5" />
          Tâches
          </a>
          <a href="/admin/documents" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Documents
          </a>
          <a href="/admin/calendrier" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Calendrier
          </a>
        </nav>
      </aside>  
 
      {/* Main content */}          
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <input type="text" placeholder="Rechercher..." className="p-2 border rounded w-1/2" />
          <div className="flex items-center gap-4">
            <a href="/notifications" className="relative text-sm text-blue-800 font-semibold hover:underline">   
              Notifications
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </a>
            <Image src="/profile.png" alt="Profil" width={40} height={40} className="rounded-full" />
            <SignOutButton /> {/* 👈 le bouton Déconnexion dynamique */}
          </div>
        </div>

        {/* Statistiques */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Stat title="Total Tâches" 
          value={totalTaches} 
          icon={CheckSquare}/>
          <Stat title="Utilisateurs en ligne" 
          value={usersOnline.length} 
          icon={Users} />
          <Stat title="Projets en attente" 
          value={projetsAttente} 
          icon={FolderKanban}/>
          <Stat title="Projets en cours" 
          value={projetsEnCours} 
          icon={FolderKanban}/>
        </div> 

        {/* Listes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="Tâches Récentes" 
           items={tachesRecentes.map(t => t.titre)} 
           icon={CheckSquare}
          />
          <Card title="Utilisateurs connectés récemment"
           items={usersOnline.map(user => `${user.prenom} ${user.nom}`)} 
           icon={Users} 
          />
        </div>  
  
        {/* Graphique */}
        {/*<div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Avancement des Projets</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">[ Graphique ici bientôt 📊 ]</div>
        </div>*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <ProjectActivityChart />
          <ProjectDoughnutChart />
        </div>
      </main>
    </div>
  );
}

function Stat({
  title,
  value,
  icon: Icon, // 👈 icône dynamique
}: {
  title: string;
  value: number;
  icon: React.ElementType;
}) {
  return (
    <div className="bg-green-700 border border-white/50 p-6 rounded shadow transition duration-300 ease-in-out hover:scale-105 hover:bg-green-700/70 flex items-center gap-4">
      <Icon className="w-8 h-8 text-white" />
      <div>
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
}: {
  title: string;
  items: string[];
  icon: React.ElementType;
}) {
  return (
    <div className="bg-sky-500 backdrop-blur-md border border-white/50 p-6 rounded shadow transition duration-300 ease-in-out hover:scale-105 hover:bg-sky-500/70">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="border-b pb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}

