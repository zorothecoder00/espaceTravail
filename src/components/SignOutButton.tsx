'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function SignOutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false }) // 👈 pas de redirection automatique
    router.push('/login?logout=success') // 👈 redirection manuelle
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
    >
      Déconnexion
    </button>
  )
}
