'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface PartageDocument {  
  id: number
  datePartage: string
  document: {
    id: number
    titre: string
    description: string
    fichier?: string | null
  }
  partageur: {
    nom: string
  }  
  departement?: { nom: string }
  projet?: { nom: string }
}

export default function AdminDocumentsPage() {
  const router = useRouter()
  const [documents, setDocuments] = useState<PartageDocument[]>([])

  useEffect(() => {
    fetch('/api/documents')
      .then(res => res.json())
      .then(data => {
        setDocuments(data.recus || [])
      })
      .catch(err => console.error("Erreur lors du chargement", err))
  }, [])

   return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* En‑tête */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-center sm:text-left">
          📁 Documents reçus
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/admin/dashboard"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Retour au tableau de bord
          </Link>
          <Link
            href="/admin/documents/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm text-center"
          >
            + Nouveau document
          </Link>
        </div>
      </div>

      {/* Liste ou message d’absence */}
      {documents.length === 0 ? (
        <p className="text-gray-500 italic text-center">
          Aucun document partagé pour le moment.
        </p>
      ) : (
        <ul className="space-y-4">
          {documents.map((p) => (
            <li
              key={p.id}
              className="border rounded-lg bg-white shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() =>
                router.push(`/admin/documents/liste/${p.document.id}`)
              }
            >
              <div className="p-4 hover:bg-gray-50 rounded-lg transition">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 underline">
                    🔍 {p.document.titre}
                  </h2>
                  <span className="text-xs text-gray-400">
                    {new Date(p.datePartage).toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  {p.document.description || 'Pas de description'}
                </p>

                {p.document.fichier ? (
                  <a
                    href={p.document.fichier}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 underline text-sm"
                    onClick={(e) => e.stopPropagation()} // empêche l’ouverture du détail
                  >
                    📎 Voir le fichier
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-gray-400 italic">
                    Aucun fichier joint
                  </p>
                )}

                <p className="text-sm mt-4 text-gray-700">
                  Partagé par :{' '}
                  <span className="font-medium text-gray-800">
                    {p.partageur?.nom ||
                      p.departement?.nom ||
                      p.projet?.nom ||
                      'Inconnu'}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

}
