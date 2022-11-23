import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/tu-van')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/bkT8ggUr'))
  }
}
