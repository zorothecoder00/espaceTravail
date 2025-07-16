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
import Link from "next/link"  
   
export default async function Dashboard() {       
  const session = await getAuthSession(); 
  console.log("Session admin dashboard:", session);   

  if (!session?.user?.role || (session.user.role !== Role.ADMIN && session.user.role !== Role.SUPER_ADMIN)) {
    redirect("/login")
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
        image: true,
      },
    }),
  ]);


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
          <Link href="/admin/documents/liste" className="hover:bg-blue-700 p-2 rounded flex items-center gap-2">   
          <FileText className="w-5 h-5" />
          Documents
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
            <Link href="/notifications" className="relative text-sm text-blue-800 font-semibold hover:underline">   
              Notifications
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>  
            </Link>
            <Image
              src={session?.user?.image || "/profile.png"}
              alt="Profil"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
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
          <Stat 
          title="Utilisateurs en ligne" 
          value={usersOnline.length} 
          icon={Users} 
          
          />
          <Stat 
          title="Projets en attente" 
          value={projetsAttente} 
          icon={FolderKanban}
          
          />
          <Stat 
          title="Projets en cours" 
          value={projetsEnCours} 
          icon={FolderKanban}
          
          />
        </div> 

        {/* Listes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card 
           title="Tâches Récentes" 
           items={tachesRecentes.map(t => t.titre)} 
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
  items: ({ prenom: string; nom: string; image?: string | null } | string)[];
  icon: React.ElementType;       
  bgColor?: string;
}) {
  return (
    <div className={`${bgColor} backdrop-blur-md border border-white/50 p-6 rounded shadow transition duration-300 ease-in-out hover:scale-105 hover:bg-sky-500/70`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => {
          if (typeof item === "string") {
            // Cas d’un titre simple (ex : tâche)
            return (
              <li key={i} className="border-b pb-2 text-white">
                {item}
              </li>
            )
          }
  
          // Cas d’un utilisateur avec prenom, nom et image
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
          )
        })}
      </ul>
    </div>
  )
}



