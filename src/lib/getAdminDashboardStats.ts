import { prisma } from '@/lib/prisma';
import { Statut } from '@prisma/client';  

export async function getDashboardData() {
  const [
    { totalTaches },
    { projetsAttente },
    { projetsEnCours },
    tachesRecentes,
    usersOnline
  ] = await Promise.all([
    prisma.tache.count().then(count => ({ totalTaches: count })),
    prisma.projet.count({ where: { statut: Statut.ATTENTE } }).then(count => ({ projetsAttente: count })),
    prisma.projet.count({ where: { statut: Statut.EN_COURS } }).then(count => ({ projetsEnCours: count })),
    prisma.tache.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
      include: {
        TacheUtilisateur: {
          take: 3,
          orderBy: { createdAt: 'desc' },
          include: {
            user: {
              select: {
                nom: true,
                image: true,
              },
            },
          },
        },
      }
    }),
    prisma.user.findMany({
      where: {
        lastActiveAt: {
          gte: new Date(Date.now() - 5 * 60 * 1000),
        },
      },
      select: {
        prenom: true,
        nom: true,
        image: true,
      },
    }),
  ]);

  const formattedTaches = tachesRecentes.map(t => ({
    titre: t.titre,
    utilisateurs: t.TacheUtilisateur.map(tu => ({
      nom: tu.user.nom,
      image: tu.user.image
    }))
  }));

  return {
    totalTaches,
    projetsAttente,
    projetsEnCours,
    tachesRecentes: formattedTaches,
    usersOnline
  };
}
