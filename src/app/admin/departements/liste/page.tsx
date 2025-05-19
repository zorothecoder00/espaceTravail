import { Departement } from '@prisma/client'

async function getDepartements(): Promise<Departement[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/departements`, {
    cache: 'no-store',         
  })

  if (!res.ok) throw new Error('Erreur lors du chargement des départements')
  return res.json()
}

export default async function ListeDepartements() {
  const departements = await getDepartements()

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Liste des Départements</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead> 
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Nom</th>
          </tr>
        </thead>
        <tbody>
          {departements.map((dept, index) => (
            <tr key={dept.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{dept.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
