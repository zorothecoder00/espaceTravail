// app/planning/[id]/page.tsx
'use client'

type Planning = {
  id: number   
  titre: string
  date: string
  taches: string[]
  objectif: string[]
  resultatAttendu: string
  etat: boolean
  commentaires: string
  responsable: {
    nom: string
    prenom: string
  }
}

export default function PlanningJournalier({ planning }: { planning: Planning }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Planning du {new Date(planning.date).toLocaleDateString()}</h1>
      <p className="mb-2"><span className="font-semibold">Titre :</span> {planning.titre}</p>
      <p className="mb-2"><span className="font-semibold">Responsable :</span> {planning.responsable.prenom} {planning.responsable.nom}</p>

      <table className="w-full text-sm border mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Tâche</th>
            <th className="border px-2 py-1">Objectif</th>
            <th className="border px-2 py-1">Résultat attendu</th>
            <th className="border px-2 py-1">État</th>
            <th className="border px-2 py-1">Commentaires</th>
          </tr>
        </thead>
        <tbody>
          {planning.taches.map((tache, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{tache}</td>
              <td className="border px-2 py-1">{planning.objectif[index] || '-'}</td>
              <td className="border px-2 py-1">{index === 0 ? planning.resultatAttendu : ''}</td>
              <td className="border px-2 py-1">
                {planning.etat ? '✅ Fait' : '🕗 En cours'}
              </td>
              <td className="border px-2 py-1">
                {index === 0 ? planning.commentaires : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
