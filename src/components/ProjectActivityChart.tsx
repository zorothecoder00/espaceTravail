'use client'

import { useEffect, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

export default function ProjectActivityChart() {
  const [data, setData] = useState([])
  const [year, setYear] = useState(new Date().getFullYear())
  const [availableYears, setAvailableYears] = useState<number[]>([])

  useEffect(() => {
    fetch(`/api/statistiques?year=${year}`)
      .then(res => res.json())
      .then(json => {
        setData(json.lineData)
        setAvailableYears(json.availableYears || [])
      })
  }, [year])

  return (
    <div className="bg-white p-6 rounded shadow flex-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Projets terminés (par mois)</h3>
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
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="terminés" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
