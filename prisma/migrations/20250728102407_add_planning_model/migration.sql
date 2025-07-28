/*
  Warnings:

  - You are about to drop the column `tachePersonnelleId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the `SousTache` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TachePersonnelle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_tachePersonnelleId_fkey";

-- DropForeignKey
ALTER TABLE "SousTache" DROP CONSTRAINT "SousTache_tachePersonnelleId_fkey";

-- DropForeignKey
ALTER TABLE "TachePersonnelle" DROP CONSTRAINT "TachePersonnelle_auteurId_fkey";

-- DropForeignKey
ALTER TABLE "TachePersonnelle" DROP CONSTRAINT "TachePersonnelle_superviseurId_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "tachePersonnelleId";

-- DropTable
DROP TABLE "SousTache";

-- DropTable
DROP TABLE "TachePersonnelle";

-- CreateTable
CREATE TABLE "Planning" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(191) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "slug" TEXT NOT NULL,
    "taches" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Planning_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Planning_slug_key" ON "Planning"("slug");
