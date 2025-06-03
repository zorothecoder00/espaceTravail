'use client'

import { signOut } from "next-auth/react"

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
    >
      Déconnexion
    </button>
  )   
}
