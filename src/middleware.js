import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  if (request.nextUrl.pathname.startsWith('/posts') && !token) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/';
    return NextResponse.redirect(loginUrl);
  }


}

export const config = {
  matcher: ['/posts/:path*'],
};
