'use client'  // important, c'est un composant client

import dynamic from 'next/dynamic'

// Import dynamique avec SSR désactivé (chargement uniquement côté client)
const ProjectDoughnutChart = dynamic(() => import('./ProjectDoughnutChart'), {
  ssr: false,
  loading: () => <p>Chargement graphique...</p>,
})

// Pareil pour ProjectActivityChart si besoin
const ProjectActivityChart = dynamic(() => import('./ProjectActivityChart'), {
  ssr: false,
  loading: () => <p>Chargement graphique...</p>,
})

export default function ChartSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <ProjectActivityChart />
      <ProjectDoughnutChart />
    </div>
  )
}
