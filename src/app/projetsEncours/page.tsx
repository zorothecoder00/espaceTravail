// /pages/projetsEncours.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Projet {
  id: number;
  nom: string;
  deadline: string | null;
  createdAt: string;
}

export default function ProjetsEnCoursPage() {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projetsEncours")
      .then((res) => res.json())
      .then((data) => {
        setProjets(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement :", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          🚀 Projets en cours  
        </h1>

        <Link
          href="/admin/dashboard"
          className="text-blue-600 hover:text-blue-800 transition text-sm font-medium"
        >
          ← Retour au tableau de bord
        </Link>
      </div>

      {/* Contenu */}
      {loading ? (
        <p className="text-gray-500 animate-pulse">Chargement...</p>
      ) : projets.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          Aucun projet en cours.
        </p>
      ) : (
        <div className="space-y-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="border border-gray-200 rounded-lg p-5 bg-white hover:border-blue-200 hover:shadow-sm transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {projet.nom}
              </h2>

              <div className="mt-2 text-sm text-gray-500">
                📅 Créé le{" "}
                {new Date(projet.createdAt).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>

              <div className="text-sm text-gray-500">
                ⏰ Deadline :{" "}
                {projet.deadline
                  ? new Date(projet.deadline).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Aucune date définie"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
