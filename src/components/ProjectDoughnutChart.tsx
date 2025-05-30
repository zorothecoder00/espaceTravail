'use client'

import { Doughnut } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ProjectDoughnutChart() {
  const [donnees, setDonnees] = useState({ termines: 0, restants: 0, colors: ['#10B981', '#F59E0B'] })
  const [year, setYear] = useState(new Date().getFullYear())
  const [availableYears, setAvailableYears] = useState<number[]>([])

  useEffect(() => {
    fetch(`/api/statistiques?year=${year}`)
      .then(res => res.json())
      .then(json => {
        setDonnees(json.doughnutData)
        setAvailableYears(json.availableYears || [])
      })
  }, [year])

  const data = {
    labels: ['Terminés', 'Restants'],
    datasets: [
      {
        data: [donnees.termines, donnees.restants],
        backgroundColor: donnees.colors || ['#10B981', '#F59E0B'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="bg-white p-6 rounded shadow flex-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Taux de progression</h3>
        <select
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          {availableYears.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <Doughnut data={data} />
    </div>
  )
}
