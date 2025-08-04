'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface DocumentPartage {
  id: number
  document: {
    titre: string
    description: string
    fichier?: string  // <-- URL du fichier (chemin ou lien)
  }
  partageur: {
    nom: string
  }
  datePartage: string
}

export default function DocumentsRecusPage() {
  const [documents, setDocuments] = useState<DocumentPartage[]>([])

  useEffect(() => {
    fetch('/api/documents', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setDocuments(data.recus || [])
      })
      .catch(err => console.error("Erreur lors du chargement", err))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Mes documents reçus</h1>
      {documents.length === 0 ? (
        <p>Vous n&rsquo;avez reçu aucun document.</p>
      ) : (
        <ul className="space-y-3">
          {documents.map((p: DocumentPartage) => (
            <li key={p.id} className="border p-4 rounded bg-white shadow">
              <p className="font-semibold">{p.document.titre}</p>
              <p className="text-sm text-gray-500">{p.document.description}</p>
              <p className="text-xs text-gray-400">Partagé par : {p.partageur.nom}</p>
              <p className="text-xs text-gray-400">Le {new Date(p.datePartage).toLocaleString()}</p>

              {p.document.fichier && (
                <div className="mt-2">
                  <a
                    href={p.document.fichier}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    📄 Ouvrir le document
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <Link href="/interfaceUtilisateur/dashboard" className="text-blue-600 hover:underline">
          ← Retour au tableau de bord
        </Link>
      </div>
    </div>
  )
}
