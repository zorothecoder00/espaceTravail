import { redirect } from "next/navigation"; 
import { getAuthSession } from "@/lib/auth"; // helper  
import prisma from "@/lib/prisma";     
import { Statut, Role } from "@prisma/client";  
import Image from 'next/image'   
import SignOutButton from "@/components/SignOutButton"; // 👈 le bouton à créer  

export default async function Dashboard() {   
  const session = await getAuthSession();    

  if (!session || !session.user || session.user.role !== Role.ADMIN) {
    redirect("/login");
  }

  const [totalTaches, projetsAttente, projetsEnCours] = await Promise.all([
    prisma.tache.count(),
    prisma.projet.count({ where: { statut: Statut.ATTENTE } }),
    prisma.projet.count({ where: { statut: Statut.EN_COURS } }),
  ]);

  const tachesRecentes = await prisma.tache.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  const usersOnline = await prisma.user.findMany({
    where: {
      lastActiveAt: {
        gte: new Date(Date.now() - 5 * 60 * 1000), // connectés récemment
      },
    },
    select: {
      prenom: true,
      nom: true,  
    },
  });

  return (
    <div className="flex h-screen">  
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-sky-500 to-violet-500 text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-10">LOGO</div> 
        <nav className="flex flex-col gap-4">
          <a href="/admin/dashboard" className="hover:bg-blue-700 p-2 rounded">Dashboard</a>
          <a href="/admin/departements/liste" className="hover:bg-blue-700 p-2 rounded">Départements</a>
          <a href="/admin/projets/liste" className="hover:bg-blue-700 p-2 rounded">Projets</a>
          <a href="/admin/taches/liste" className="hover:bg-blue-700 p-2 rounded">Tâches</a>
          <a href="/admin/documents" className="hover:bg-blue-700 p-2 rounded">Documents</a>
          <a href="/admin/calendrier" className="hover:bg-blue-700 p-2 rounded">Calendrier</a>
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
          <Stat title="Total Tâches" value={totalTaches} />
          <Stat title="Utilisateurs en ligne" value={usersOnline.length} />
          <Stat title="Projets en attente" value={projetsAttente} />
          <Stat title="Projets en cours" value={projetsEnCours} />
        </div> 

        {/* Listes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="Tâches Récentes" 
           items={tachesRecentes.map(t => t.titre)} 
          />
          <Card title="Utilisateurs connectés récemment"
           items={usersOnline.map(user => `${user.prenom} ${user.nom}`)} 
          />
        </div>  
  
        {/* Graphique */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Avancement des Projets</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">[ Graphique ici bientôt 📊 ]</div>
        </div>
      </main>
    </div>
  );
}

function Stat({ title, value }: { title: string, value: number }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
}

function Card({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-green p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="border-b pb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
}
