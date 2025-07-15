import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Statut } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: `Méthode ${req.method} non autorisée` })
  }

  try {
    /* 1 • année ciblée ---------------------------------------------------- */
    const yearParam = req.query.year
    const currentYear = yearParam ? parseInt(yearParam as string) : new Date().getFullYear()

    const startDate = new Date(Date.UTC(currentYear, 0, 1))   // 1 janvier 00:00 UTC
    const endDate   = new Date(Date.UTC(currentYear + 1, 0, 1)) // 1 janvier année+1

    /* 2 • compter les projets -------------------------------------------- */
    const [termines, total] = await Promise.all([
      prisma.projet.count({
        where: { statut: Statut.TERMINE, createdAt: { gte: startDate, lt: endDate } },
      }),
      prisma.projet.count({
        where: { createdAt: { gte: startDate, lt: endDate } },
      }),
    ])

    /* 3 • statistiques mensuelles ---------------------------------------- */
    const projetsTermines = await prisma.projet.findMany({
      where: { statut: Statut.TERMINE, createdAt: { gte: startDate, lt: endDate } },
      select: { createdAt: true },
    })

    const statsParMois = Array(12).fill(0)
    projetsTermines.forEach(p => {
      const mois = p.createdAt.getUTCMonth()
      statsParMois[mois]++
    })

    const moisLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc']

    /* 4 • années disponibles -------------------------------------------- */
    const toutesLesAnnees = await prisma.projet.findMany({
      select: { createdAt: true },
      orderBy: { createdAt: 'asc' },
    })

    const anneesDisponibles = Array.from(
      new Set(toutesLesAnnees.map(p => p.createdAt.getUTCFullYear()))
    )
    if (anneesDisponibles.length === 0) anneesDisponibles.push(currentYear)

    /* 5 • réponse -------------------------------------------------------- */
    return res.status(200).json({
      year: currentYear,
      availableYears: anneesDisponibles,
      lineData: moisLabels.map((label, i) => ({ month: label, termines: statsParMois[i] })),
      doughnutData: {
        termines,
        restants: total - termines,
        colors:
          termines > total - termines
            ? ['#22c55e', '#f87171']
            : ['#f87171', '#22c55e'],
      },
    })
  } catch (error) {
    console.error('Erreur GET statistiques projets :', error)
    return res.status(500).json({ message: 'Erreur interne' })
  }
}
