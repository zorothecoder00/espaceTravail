-- CreateTable
CREATE TABLE "SousTache" (
    "id" SERIAL NOT NULL,
    "contenu" TEXT NOT NULL,
    "statut" "Statut" NOT NULL DEFAULT 'ATTENTE',
    "tachePersonnelleId" INTEGER NOT NULL,

    CONSTRAINT "SousTache_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SousTache" ADD CONSTRAINT "SousTache_tachePersonnelleId_fkey" FOREIGN KEY ("tachePersonnelleId") REFERENCES "TachePersonnelle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
