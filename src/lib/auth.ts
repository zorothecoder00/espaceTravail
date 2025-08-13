// src/lib/auth.ts
import { getServerSession } from "next-auth";  
import { authOptions } from "./authOptions";
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "./prisma"; // oublie pas d'importer prisma si ce n'est pas fait    

export const getAuthSession = async (
  req?: NextApiRequest,
  res?: NextApiResponse
) => {
  const session = req && res  
    ? await getServerSession(req, res, authOptions)  // pages/api/
    : await getServerSession(authOptions)            // app router

  if (session?.user?.email) {
    const existingUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });  

    if (existingUser) {
      await prisma.user.update({
        where: { email: session.user.email },
        data: { lastActiveAt: new Date() },
      });
    } else {
      // Optionnel : créer l'utilisateur automatiquement
    }
  }

  return session;
}

export { authOptions };
