// middleware.ts
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret })
  const { pathname } = request.nextUrl

  // Redirection vers /login si l'utilisateur n'est pas connecté
  if (!token) {
    if (pathname.startsWith("/admin") || pathname.startsWith("/interfaceUtilisateur")) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  const role = token?.role

  // Protection des routes /admin/**
  if (pathname.startsWith("/admin")) {
    if (!role || (role !== "ADMIN" && role !== "SUPER_ADMIN")) {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }

    // (Optionnel) Bloquer /admin/utilisateurs/new pour les ADMIN
    if (pathname === "/admin/utilisateurs/new" && role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
  }

  // Protection des routes /interfaceUtilisateur/**
  if (pathname.startsWith("/interfaceUtilisateur")) {
    if (role !== "UTILISATEUR") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
  }

  return NextResponse.next()
}

// Définir les routes protégées
export const config = {
  matcher: ["/admin/:path*", "/interfaceUtilisateur/:path*"],
}
