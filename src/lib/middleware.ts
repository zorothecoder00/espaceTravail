// lib/middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'     

// Clé secrète pour décoder le token (doit correspondre à [...nextauth].ts)
const secret = process.env.NEXTAUTH_SECRET 

export async function isAdminMiddleware(req: NextRequest) {
  const token = await getToken({ req, secret })

  if (!token) {
    // Pas connecté => vers /login  
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (token.role !== 'ADMIN') {
    // Connecté mais pas admin => vers /unauthorized
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }


  // Si le rôle est bon, on laisse passer
  return NextResponse.next()
}  
 