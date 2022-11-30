import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/tu-van')) {
    return NextResponse.rewrite(new URL('https://mfast.vn/cake/510863'))    
  }

  if (request.nextUrl.pathname.startsWith('/dtd')) {
    return NextResponse.rewrite(new URL('https://google.com'))    
  }
}
