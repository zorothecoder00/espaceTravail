import { redirect } from 'next/navigation'
import { getAuthSession } from "@/lib/auth"; // helper
import { prisma } from "@/lib/prisma" // ⬅️ adapte ce chemin si besoin
import { Role } from "@prisma/client";          

export default async function Home() {  
  const session = await getAuthSession()       

  if (!session) {
    // Pas connecté → redirection vers register
    redirect('/register') 
  }

  // Redirection en fonction du rôle
  const role = session.user.role

  if (role === Role.ADMIN) {
    redirect('/admin/dashboard')
  } else {
    redirect('/interfaceUtilisateur/dashboard')
  }
}
