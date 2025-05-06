'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Supposons connecté
  const [notificationsCount] = useState(3); // Remplace ça par un fetch réel

  return (
    <div className="flex h-screen"> 
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-6">
        <div className="text-2xl font-bold mb-10">
          LOGO
        </div>
        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="hover:bg-blue-700 p-2 rounded">Dashboard
          </a>
          <a href="/departements" className="hover:bg-blue-700 p-2 rounded">Départements
          </a>
          <a href="/projets" className="hover:bg-blue-700 p-2 rounded">Projets
          </a>
          <a href="/taches" className="hover:bg-blue-700 p-2 rounded">Tâches
          </a>
          <a href="/documents" className="hover:bg-blue-700 p-2 rounded">Documents
          </a> 
          <a href="/calendrier" className="hover:bg-blue-700 p-2 rounded">Calendrier
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <input type="text" placeholder="Rechercher..." className="p-2 border rounded w-1/2" />

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <a href="/notifications" className="relative text-sm text-blue-800 font-semibold hover:underline">
                  Notifications
                  {notificationsCount > 0 && (
                    <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notificationsCount}
                    </span>
                  )}
                </a>
                <img src="/profile.jpg" alt="Profil" className="w-10 h-10 rounded-full" />
                <button onClick={() => setIsAuthenticated(false)} className="bg-red-500 text-white px-4 py-2 rounded">
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Se connecter</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">S'inscrire</button>
              </>
            )}
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Total Tâches</h3>
            <p className="text-2xl">128</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Projets Finis</h3>
            <p className="text-2xl">45</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Projets en attente</h3>
            <p className="text-2xl">23</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold">Projets en cours</h3>
            <p className="text-2xl">60</p>
          </div>
        </div>

        {/* Liste Tâches & Membres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Mini liste tâches */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Tâches Récentes</h3>
            <ul className="space-y-2">
              <li className="border-b pb-2">Créer une présentation</li>
              <li className="border-b pb-2">Mettre à jour le site</li>
              <li className="border-b pb-2">Envoyer la newsletter</li>
            </ul>
          </div>

          {/* Mini liste membres */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Membres de l'équipe</h3>
            <ul className="space-y-2">
              <li className="border-b pb-2">Alice</li>
              <li className="border-b pb-2">Bob</li>
              <li className="border-b pb-2">Charlie</li>
            </ul>
          </div>
        </div>

        {/* Graphique */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Avancement des Projets</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">
            [ Graphique ici bientôt 📊 ]
          </div>
        </div>
      </main>
    </div>
  );
}
