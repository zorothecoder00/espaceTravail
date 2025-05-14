// src/lib/authOptions.ts     
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { prisma } from '@/lib/prisma' 
import { NextAuthOptions } from "next-auth"    

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
          id: user.id,
          name: user.name,
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
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      session.user.id = token.id
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
}
