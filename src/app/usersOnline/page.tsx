// /pages/usersOnline.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface UserOnline {
  prenom: string;
  nom: string;
  image: string;
}

export default function UsersOnlinePage() {
  const [users, setUsers] = useState<UserOnline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/usersOnline")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement :", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🟢 Utilisateurs en ligne
        </h1>

        <Link
          href="/admin/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          ← Retour au tableau de bord
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Chargement...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-500 italic">Aucun utilisateur en ligne pour le moment.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-white rounded-lg shadow p-4 hover:shadow-md transition border border-gray-100"
            >
              <div className="relative w-14 h-14">
                <Image
                  src={user.image}
                  alt={`${user.prenom} ${user.nom}`}
                  fill
                  className="rounded-full object-cover border border-gray-200"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
              </div>
              <div>
                <p className="font-medium text-gray-800">
                  {user.prenom} {user.nom}
                </p>
                <p className="text-xs text-gray-500">Connecté récemment</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
