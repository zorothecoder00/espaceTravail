// pages/api/planning/tache/[tacheId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // ton instance Prisma
import { getAuthSession } from '@/lib/auth'; // si tu veux sécuriser

type TachePlanning = {
  id: number
  titre: string
  heure: string
  objectif?: string
  resultatAttendu?: string
  etat?: boolean
  commentaires?: string
  priorite?: boolean
}    

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tacheId } = req.query;

  if (!tacheId || Array.isArray(tacheId)) {
    return res.status(400).json({ error: 'TacheId invalide' });
  }

  // Vérifier la session si besoin
  const session = await getAuthSession(req, res);
  if (!session) return res.status(401).json({ error: 'Non authentifié' });

  if (req.method === 'PATCH') {
    try {
      const { etat, priorite, commentaires } = req.body;

      // Construire l'objet de mise à jour dynamiquement
      const dataToUpdate: Partial<TachePlanning> = {};
      if (etat !== undefined) dataToUpdate.etat = etat;
      if (priorite !== undefined) dataToUpdate.priorite = priorite;
      if (commentaires !== undefined) dataToUpdate.commentaires = commentaires;

      // Vérifier qu'il y a quelque chose à mettre à jour
      if (Object.keys(dataToUpdate).length === 0) {
        return res.status(400).json({ error: 'Aucun champ valide à mettre à jour' });
      }

      const updatedTache = await prisma.tachePlanning.update({
        where: { id: parseInt(tacheId) },
        data: dataToUpdate,  
      });

      return res.status(200).json({ data: updatedTache });
    } catch (error) {
      console.error('Erreur PATCH /planning/tache/[tacheId]:', error);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
  }

  res.setHeader('Allow', ['PATCH']);
  return res.status(405).json({ error: `Méthode ${req.method} non autorisée` });
}
