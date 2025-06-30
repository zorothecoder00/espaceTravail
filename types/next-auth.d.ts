// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth"
import { Role } from "@prisma/client" // ou adapte à ta définition de rôle

// Étendre le type Session de next-auth pour ajouter role dans user
declare module "next-auth" {
  interface Session {
    user: {   
      id: string;      
      role: Role;
      nom: string;
      prenom: string;
      image?: string // 👈 facultatif, si image existe
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string;
    role: Role;
    nom: string;
    prenom: string;
    image?: string // 👈 facultatif, si image existe
  }

  interface JWT {
    id: string;
    role: Role;
    nom: string;
    prenom: string;
    image?: string // 👈 facultatif, si image existe
  }
}