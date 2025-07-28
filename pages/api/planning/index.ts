import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "@/lib/prisma"  
import getAuthSession from "@/lib/auth"

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
  const session = await getAuthSession(req, res)

  if(!session || !session?.user?.nom){
    return res.status(401).json({ message: "Vous n'êtes pas autorisés" })
  }

  if(req.method == 'GET'){

    try{
      const plannings = await prisma.planning.findMany({
        where: { id: parseInt(session.user.id) }
        orderBy: { date:'desc'},  
      })

      return res.status(200).json({ data: plannings })

    }catch(error){
      console.error("Erreur serveur", error)
      return res.status(500).json({ message: "Erreur serveur" })
    }

  }else if(req.method =='POST'){  

    const { titre, date, slug, taches } = req.body

    if(!titre || !date || !slug || !taches || !Array.isArray(taches)){
      return res.status(400).json({ message: "Tous les champs sont requis" })
    }   

    try{
    const planning = await prisma.planning.create({
      data: {
        titre,
        date: new Date(date),
        slug,
        taches, 
      }      
    })

    return res.status(201).json({ message: "Votre planning a été crée avec succès" ,data: planning })
    }catch(error){
      console.error("Erreur serveur", error)
      return res.status(500).json({ message: "Erreur serveur" })
    }
  }

  return res.status(405).json({ message: `Méthode ${req.method} non autorisée`})

}