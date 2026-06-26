import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email dan password wajib diisi' }, { status: 400 })
    }

    const admin = await prisma.admin.findUnique({
      where: { email }
    })

    // In a real app, use bcrypt to compare password. For prototype, we use simple string comparison.
    if (!admin || admin.password !== password) {
      return NextResponse.json({ success: false, message: 'Email atau password salah' }, { status: 401 })
    }

    // Set a simple cookie
    const response = NextResponse.json({ success: true, message: 'Login berhasil' })
    response.cookies.set({
      name: 'admin_session',
      value: admin.id,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan sistem' }, { status: 500 })
  }
}
