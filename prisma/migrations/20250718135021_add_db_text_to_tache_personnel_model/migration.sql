/*
  Warnings:

  - You are about to drop the column `description` on the `TachePersonnelle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TachePersonnelle" DROP COLUMN "description",
ADD COLUMN     "contenu" TEXT;
