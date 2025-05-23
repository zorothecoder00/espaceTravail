import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/authOptions"
import { Role } from "@prisma/client";    

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    // Pas connecté → redirection vers register
    redirect('/register') 
  }

  // Redirection en fonction du rôle
  const role = session.user.role

  if (role === Role.ADMIN) {
    redirect('/admin')
  } else {
    redirect('/interfaceUtilisateur')
  }
}
