import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/tu-van')) {
    return NextResponse.rewrite(new URL('https://mb.mfast.vn?saleCode=510863'))    
  }

  if (request.nextUrl.pathname.startsWith('/dtd')) {
    return NextResponse.rewrite(new URL('https://google.com'))    
  }
}
