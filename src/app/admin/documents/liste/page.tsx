'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'  

interface PartageDocument {  
  id: number
  datePartage: string
  document: {
    titre: string
    description: string
  }
  user?: { name: string }
  departement?: { nom: string }
  projet?: { nom: string }
}

export default function AdminDocumentsPage() {
  const [documents, setDocuments] = useState<PartageDocument[]>([])

  useEffect(() => {
    fetch('/api/documents')
      .then(res => res.json())
      .then(data => {
        setDocuments(data.partages || [])
      })
      .catch(err => console.error("Erreur lors du chargement", err))
  }, [])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Documents partagés</h1>
        <div className="space-x-4">
          <Link
            href="/admin/dashboard"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Retour au tableau de bord
          </Link>
          <Link
            href="/admin/documents/new"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            + Nouveau document
          </Link>
        </div>
      </div>

      {documents.length === 0 ? (
        <p>Aucun document partagé.</p>
      ) : (
        <ul className="space-y-3">
          {documents.map((p: PartageDocument) => (
            <li key={p.id} className="border p-4 rounded bg-white shadow">
              <p className="font-semibold">{p.document.titre}</p>
              <p className="text-sm text-gray-500">{p.document.description}</p>
              <p className="text-sm mt-1 text-gray-700">
                Partagé avec :{" "}
                {p.user?.name || p.departement?.nom || p.projet?.nom || "inconnu"}
              </p>
              <p className="text-xs text-gray-400">
                Le {new Date(p.datePartage).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
