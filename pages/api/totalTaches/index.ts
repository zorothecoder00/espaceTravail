import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Statut, Prisma } from '@prisma/client'

export default async function handler(req: NextApiRequest , res: NextApiResponse)
{
	if(req.method !== 'GET'){
		return res.status(405).json({ message: `La méthode ${req.method} n'est pas autorisée` })
	}

	const { search='', page='1', limit='10', sortField='createdAt', sortOrder='desc' } = req.query as {
	    search?: string
	    page?: string
	    limit?: string
	    sortField?: string
	    sortOrder?: 'asc' | 'desc'
	  }

	const pageNum = parseInt(page, 10) || 1
	const limitNum = parseInt(limit, 10) || 10

	const skip = (pageNum - 1) * limitNum

	let orderBy: Prisma.TacheOrderByWithRelationInput = {}
	if(sortField === 'projet'){
		orderBy = { projet :{ nom: sortOrder } }
	}else{
		orderBy = { [sortField]: sortOrder }
	}

	const whereClause: Prisma.TacheWhereInput= search
		?{
			OR :[
				{ titre: { contains: search , mode: 'insensitive'} },
				{ projet: { nom: { contains: search, mode: 'insensitive'} } },
				{ statut: { in: Object.values(Statut).filter(s => s.toLowerCase().includes(search.toLowerCase() )
					)as Statut[]
				  }
				},
			],
		}
		: {}

	try{
		const [taches, total] = await Promise.all([
			prisma.tache.findMany({
				where: whereClause,
				include: {
					projet: {
						select: {
						  id: true,
						  nom: true,
						},
					},
				},
				skip,
				take: limitNum,
				orderBy
			}),

			prisma.tache.count({
				where: whereClause,
			})

		])

		return res.status(200).json({
			data: taches,
			total,
			totalPage: Math.ceil(total / limitNum)
		})
	}catch(error){
		console.error("Erreur interne", error)
		return res.status(500).json({ message: "Erreur interne"})
	}
}  