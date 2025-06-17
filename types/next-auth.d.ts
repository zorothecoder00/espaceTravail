// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth"
import { Role } from "@prisma/client" // ou adapte à ta définition de rôle

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