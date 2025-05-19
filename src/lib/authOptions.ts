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
          name: `${user.prenom} ${user.nom}`, // construire le champ 'name'       
          email: user.email,  
          role: user.role,
        }

      },
    }),

  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) { 
        token.role = user.role
        token.id = user.id
        token.prenom = user.prenom;
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as Role;
        session.user.id = token.id as string;
        session.user.prenom = token.prenom as string;
      }
      return session;
    },

  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
}
