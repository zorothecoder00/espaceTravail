-- AlterTable
ALTER TABLE "Planning" ADD COLUMN     "commentaires" TEXT,
ADD COLUMN     "etat" BOOLEAN DEFAULT false,
ADD COLUMN     "objectif" TEXT[],
ADD COLUMN     "responsableId" INTEGER,
ADD COLUMN     "resultatAttendu" TEXT;

-- AddForeignKey
ALTER TABLE "Planning" ADD CONSTRAINT "Planning_responsableId_fkey" FOREIGN KEY ("responsableId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
