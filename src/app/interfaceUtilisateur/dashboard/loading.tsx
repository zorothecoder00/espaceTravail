"use client"

import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <Loader2 className="w-10 h-10 animate-spin text-green-500" />
      <span className="text-lg font-medium text-gray-700">
        Chargement du tableau de bord...
      </span>
    </div>
  )
}