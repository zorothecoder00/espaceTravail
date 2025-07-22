-- CreateEnum
CREATE TYPE "Priorite" AS ENUM ('BASSE', 'MOYENNE', 'ELEVEE');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "sousTacheProjetId" INTEGER;

-- CreateTable
CREATE TABLE "SousTacheProjet" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "tacheId" INTEGER NOT NULL,
    "statut" "Statut" NOT NULL DEFAULT 'ATTENTE',
    "deadline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "responsableId" INTEGER,
    "priorite" "Priorite" DEFAULT 'MOYENNE',

    CONSTRAINT "SousTacheProjet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SousTacheUtilisateur" (
    "sousTacheProjetId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "statutPersonnel" "Statut",
    "dateDebut" TIMESTAMP(3),
    "dateFin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SousTacheUtilisateur_pkey" PRIMARY KEY ("sousTacheProjetId","userId")
);

-- CreateTable
CREATE TABLE "Commentaire" (
    "id" SERIAL NOT NULL,
    "titre" TEXT,
    "contenu" TEXT NOT NULL,
    "estApprobation" BOOLEAN NOT NULL DEFAULT false,
    "auteurId" INTEGER NOT NULL,
    "sousTacheProjetId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PiecesJointesSousTache" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PiecesJointesSousTache_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PiecesJointesSousTache_B_index" ON "_PiecesJointesSousTache"("B");

-- AddForeignKey
ALTER TABLE "SousTacheProjet" ADD CONSTRAINT "SousTacheProjet_tacheId_fkey" FOREIGN KEY ("tacheId") REFERENCES "Tache"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SousTacheProjet" ADD CONSTRAINT "SousTacheProjet_responsableId_fkey" FOREIGN KEY ("responsableId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SousTacheUtilisateur" ADD CONSTRAINT "SousTacheUtilisateur_sousTacheProjetId_fkey" FOREIGN KEY ("sousTacheProjetId") REFERENCES "SousTacheProjet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SousTacheUtilisateur" ADD CONSTRAINT "SousTacheUtilisateur_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_sousTacheProjetId_fkey" FOREIGN KEY ("sousTacheProjetId") REFERENCES "SousTacheProjet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_sousTacheProjetId_fkey" FOREIGN KEY ("sousTacheProjetId") REFERENCES "SousTacheProjet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PiecesJointesSousTache" ADD CONSTRAINT "_PiecesJointesSousTache_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PiecesJointesSousTache" ADD CONSTRAINT "_PiecesJointesSousTache_B_fkey" FOREIGN KEY ("B") REFERENCES "SousTacheProjet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
