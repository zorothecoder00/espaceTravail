/*
  Warnings:

  - Added the required column `statut` to the `Projet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "deadline" DATETIME,
    "statut" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "departementId" INTEGER NOT NULL,
    CONSTRAINT "Projet_departementId_fkey" FOREIGN KEY ("departementId") REFERENCES "Departement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projet" ("createdAt", "departementId", "description", "id", "nom", "updatedAt") SELECT "createdAt", "departementId", "description", "id", "nom", "updatedAt" FROM "Projet";
DROP TABLE "Projet";
ALTER TABLE "new_Projet" RENAME TO "Projet";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
