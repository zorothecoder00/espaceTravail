import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Statut } from '@prisma/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const yearParam = searchParams.get('year')
  const currentYear = yearParam ? parseInt(yearParam) : new Date().getFullYear()

  const startDate = new Date(`${currentYear}-01-01T00:00:00.000Z`)
  const endDate = new Date(`${currentYear + 1}-01-01T00:00:00.000Z`)

  const projetsTermines = await prisma.projet.findMany({
    where: {
      statut: Statut.TERMINE,
      createdAt: { gte: startDate, lt: endDate },
    },
  })

  const projetsTotal = await prisma.projet.findMany({
    where: {
      createdAt: { gte: startDate, lt: endDate },
    },
  })

  const toutesLesAnnees = await prisma.projet.findMany({
    select: { createdAt: true },
    orderBy: { createdAt: 'asc' },
  })

  const anneesDisponibles = [
    ...new Set(toutesLesAnnees.map(p => new Date(p.createdAt).getFullYear()))
  ]

    // Toujours inclure l’année en cours si rien n’est en base
  if (anneesDisponibles.length === 0) {
    anneesDisponibles.push(currentYear)
  }

  const moisLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc']
  const statsParMois = Array(12).fill(0)   

  projetsTermines.forEach(p => {
    const mois = new Date(p.createdAt).getMonth()
    statsParMois[mois]++
  })

  const total = projetsTotal.length
  const termines = projetsTermines.length

  return NextResponse.json({
    year: currentYear,
    availableYears: anneesDisponibles,
    lineData: moisLabels.map((label, i) => ({
      month: label,
      terminés: statsParMois[i],
    })),
    doughnutData: {
      termines,
      restants: total - termines,
      colors: termines > (total - termines)
        ? ['#22c55e', '#f87171']
        : ['#f87171', '#22c55e'],
    },
  })
}
