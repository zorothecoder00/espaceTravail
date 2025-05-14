-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "deadline" DATETIME,
    "statut" TEXT NOT NULL DEFAULT 'ATTENTE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "departementId" INTEGER NOT NULL,
    CONSTRAINT "Projet_departementId_fkey" FOREIGN KEY ("departementId") REFERENCES "Departement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projet" ("createdAt", "deadline", "departementId", "description", "id", "nom", "statut", "updatedAt") SELECT "createdAt", "deadline", "departementId", "description", "id", "nom", "statut", "updatedAt" FROM "Projet";
DROP TABLE "Projet";
ALTER TABLE "new_Projet" RENAME TO "Projet";
CREATE TABLE "new_Tache" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "projetId" INTEGER NOT NULL,
    "deadline" DATETIME,
    "statut" TEXT NOT NULL DEFAULT 'ATTENTE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Tache_projetId_fkey" FOREIGN KEY ("projetId") REFERENCES "Projet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tache" ("createdAt", "deadline", "description", "id", "projetId", "statut", "titre", "updatedAt") SELECT "createdAt", "deadline", "description", "id", "projetId", "statut", "titre", "updatedAt" FROM "Tache";
DROP TABLE "Tache";
ALTER TABLE "new_Tache" RENAME TO "Tache";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
