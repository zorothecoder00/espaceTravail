'use client'
import { useEffect, useState } from 'react'  
import Link from 'next/link'  

interface DocumentPartage {
  id: number
  document: {
    titre: string
    description: string
  }
  partageur: {
    name: string
  }
  datePartage: string
}

export default function DocumentsRecusPage() {
  const [documents, setDocuments] = useState<DocumentPartage[]>([])

  useEffect(() => {
    fetch('/api/documents')
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
              <p className="text-xs text-gray-400">Partagé par : {p.partageur.name}</p>
              <p className="text-xs text-gray-400">Le {new Date(p.datePartage).toLocaleString()}</p>
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
