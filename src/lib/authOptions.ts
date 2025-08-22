// src/lib/authOptions.ts     
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"  
import { prisma } from '@/lib/prisma' 
import { NextAuthOptions } from "next-auth"    
import { Role } from "@prisma/client";  // <-- import manquant    

export const authOptions: NextAuthOptions = {
  providers: [  
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })

        if (!user || !credentials?.password) return null

        const passwordValid = await bcrypt.compare(credentials.password, user.password)  

        if (!passwordValid) return null  

        return {
          id: user.id.toString(), // convertir en string
          nom: user.nom,
          prenom: user.prenom,
          name: `${user.prenom} ${user.nom}`, // construire le champ 'name' souvent obligatoire avec CredentialsProvider      
          email: user.email,  
          role: user.role,
          image: user.image ?? undefined, // <- plus de null
        }

      },
    }),

  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) { 
        token.role = user.role
        token.id = user.id
        token.nom = user.nom
        token.prenom = user.prenom
        token.image = user.image ?? null  
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as Role;
        session.user.id = token.id as string;
        session.user.nom = token.nom as string;
        session.user.prenom = token.prenom as string;        
        session.user.image = (token.image as string) ?? null
      }
      return session;     
    },

  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 heure (en secondes)
  },

  jwt: {
  maxAge: 60 * 60, // 1 heure aussi
  },
  
  pages: {
    signIn: "/login",
  },
}
