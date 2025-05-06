// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.utilisateur.findUnique({
          where: { email: credentials?.email },
        })

        if (user && credentials?.password === user.motDePasse) {
          return user
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // ta route de login en App Router
  },
}

export default NextAuth(authOptions)
