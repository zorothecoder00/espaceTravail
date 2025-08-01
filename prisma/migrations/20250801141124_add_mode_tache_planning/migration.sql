/*
  Warnings:

  - You are about to drop the column `commentaires` on the `Planning` table. All the data in the column will be lost.
  - You are about to drop the column `objectif` on the `Planning` table. All the data in the column will be lost.
  - You are about to drop the column `resultatAttendu` on the `Planning` table. All the data in the column will be lost.
  - You are about to drop the column `taches` on the `Planning` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Planning" DROP COLUMN "commentaires",
DROP COLUMN "objectif",
DROP COLUMN "resultatAttendu",
DROP COLUMN "taches";

-- CreateTable
CREATE TABLE "TachePlanning" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "etat" BOOLEAN NOT NULL DEFAULT false,
    "commentaires" TEXT,
    "resultatAttendu" TEXT,
    "objectif" TEXT,
    "planningId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TachePlanning_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TachePlanning" ADD CONSTRAINT "TachePlanning_planningId_fkey" FOREIGN KEY ("planningId") REFERENCES "Planning"("id") ON DELETE CASCADE ON UPDATE CASCADE;
