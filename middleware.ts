// middleware.ts
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

const secret = process.env.NEXTAUTH_SECRET // Assure-toi que cette variable est bien définie

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret })

  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
