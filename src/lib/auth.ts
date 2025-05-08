// src/lib/auth.ts
import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"

export const getAuthSession = () => getServerSession(authOptions)
export { authOptions } // si besoin ailleurs
  