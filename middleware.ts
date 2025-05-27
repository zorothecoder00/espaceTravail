// middleware.ts
import { isAdminMiddleware } from './src/lib/middleware'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/admin')) {
    return await isAdminMiddleware(request)
  }
 
   // Important : retourner NextResponse.next() pour les routes non concernées
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'], // Protège toutes les pages dans /admin
}
