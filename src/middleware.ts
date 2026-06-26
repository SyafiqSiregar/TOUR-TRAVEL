import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Proteksi semua route yang dimulai dengan /admin
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const sessionCookie = request.cookies.get('admin_session')
    
    // Jika tidak ada session cookie, redirect ke /admin/login
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Jika user sudah login dan mencoba mengakses /admin/login, redirect ke /admin
  if (path === '/admin/login') {
    const sessionCookie = request.cookies.get('admin_session')
    if (sessionCookie) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
