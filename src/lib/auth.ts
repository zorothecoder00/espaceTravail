// src/lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { DefaultSession, DefaultUser } from "next-auth";
import { Role } from "@prisma/client";  
import prisma from "./prisma"; // oublie pas d'importer prisma si ce n'est pas fait

// Étendre le type Session de next-auth pour ajouter role dans user
declare module "next-auth" {
  interface Session {
    user: { 
      id: string;   
      role: Role;
      prenom: string;
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string;
    role: Role;
    prenom: string;
  }

  interface JWT {
    id: string;
    role: Role;
    prenom: string;
  }
}

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    await prisma.user.update({
      where: { email: session.user.email },
      data: { lastActiveAt: new Date() },
    });
  }

  return session;
};

export { authOptions };
