// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercept all routes starting with /admin
  if (pathname.startsWith('/admin')) {
    // 1. Retrieve the session token/cookie from request
    const token = request.cookies.get('session_token')?.value;

   // if (!token) {
      // Redirect to login if unauthenticated
      //const loginUrl = new URL('/login', request.url);
      //loginUrl.searchParams.set('redirect', pathname);
      //return NextResponse.redirect(loginUrl);
    //}

    // 2. Decode the token or verify the user's custom claims/role
    // (If token indicates role !== 'admin', redirect to 403 or home)
    //const isAdmin = request.cookies.get('user_role')?.value === 'admin';

    //if (!isAdmin) {
      //return NextResponse.redirect(new URL('/', request.url));
    //}
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};