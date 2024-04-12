import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const public_path =  path === "/login" || path === "/Signup";

  const cookie = request.cookies.get("next-auth.session-token");

  if(!cookie && !(public_path || path === "/dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  } else if (cookie && public_path) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  } 
} 

export const config = {
  matcher: [
    '/dashboard',
    '/login',
    '/Signup',
    '/dashboard',
    '/properties/saved',
    '/properties/add'
  ],
}