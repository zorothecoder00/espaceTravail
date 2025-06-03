import { prisma } from "@/lib/prisma"
import { Statut } from "@prisma/client"

export async function getUserDashboardStats(userId: string) {
  const parsedUserId = parseInt(userId)

  const [projetsRestants, tachesRestantes, documents] = await Promise.all([
    prisma.projet.count({
      where: {
        membres: { some: { userId: parsedUserId} },
        statut: { in: [Statut.ATTENTE, Statut.EN_COURS] }
      }
    }),
    prisma.tache.count({
      where: {
        TacheUtilisateur: { some: { userId: parsedUserId } },
        statut: { in: [Statut.ATTENTE, Statut.EN_COURS] }
      }
    }),
    prisma.partageDocument.count({
      where: { partageurId: parsedUserId }
    })
  ])

  return { projetsRestants, tachesRestantes, documents }
}
