import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  if (!params.id || Number.isNaN(id)) {
    return NextResponse.json({ message: 'ID invalide' }, { status: 400 })
  }

  try {
    /* -------------------------------------------------------------------- *
     * 1. On récupère l'utilisateur avec :
     *    - ses projets (via MembreProjet) → on ressort l'objet "projet"
     *    - les tâches de ces projets
     *    - les tâches directement assignées (TacheUtilisateur)
     * -------------------------------------------------------------------- */
    const utilisateur = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        nom: true,

        /* ---- Projets où il est membre ---- */
        projets: {
          /*  MembreProjet[]  */
          select: {
            projet: {
              select: {
                id: true,
                nom: true,
                /*  Les tâches du projet  */
                taches: {
                  select: {
                    id: true,
                    titre: true,
                    statut: true,
                    deadline: true,
                  },
                },
              },
            },
          },
        },

        /* ---- Tâches assignées hors projet ---- */
        taches: {
          /*  TacheUtilisateur[]  */
          select: {
            tache: {
              select: {
                id: true,
                titre: true,
                statut: true,
                deadline: true,
                projet: { select: { id: true, nom: true } },
              },
            },
          },
        },
      },
    })

    if (!utilisateur) {
      return NextResponse.json(
        { message: 'Utilisateur introuvable' },
        { status: 404 }
      )
    }

    /* -------------------------------------------------------------------- *
     * 2. Mise en forme :
     *    - on a      utilisateur.projets = [{ projet: { … } }, …]
     *      → on remonte directement l’objet projet pour le front
     *    - on a      utilisateur.taches   = [{ tache: { … } }, …]
     *      → même chose
     * -------------------------------------------------------------------- */
    const projets = utilisateur.projets.map((mp) => mp.projet)
    const taches  = utilisateur.taches.map((tu) => tu.tache)

    return NextResponse.json(
      {
        data: {
          id: utilisateur.id,
          nom: utilisateur.nom,
          projets,
          taches,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur API GET /assignations/[id] :', error)
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  }
}
