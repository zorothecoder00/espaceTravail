// /pages/projetsAttente.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Projet {
  id: number;
  nom: string;
  deadline: string | null;
  createdAt: string;
}

export default function ProjetsAttentePage() {
  const [projets, setProjets] = useState<Projet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projetsAttente")
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
    <div className="p-6 max-w-5xl mx-auto">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          ⏳ Projets en attente
        </h1>

        <Link
          href="/admin/dashboard"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          ← Retour au tableau de bord
        </Link>
      </div>

      {/* Contenu */}
      {loading ? (
        <p className="text-gray-500 animate-pulse">Chargement...</p>
      ) : projets.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          Aucun projet en attente.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="bg-white border border-gray-100 rounded-xl shadow hover:shadow-md transition p-5 flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold text-blue-700 mb-2">
                {projet.nom}
              </h2>

              <p className="text-sm text-gray-500 mb-1">
                📅 Créé le{" "}
                {new Date(projet.createdAt).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              <p className="text-sm text-gray-500">
                ⏰ Deadline :{" "}
                {projet.deadline
                  ? new Date(projet.deadline).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Aucune date définie"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
