import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/tu-van')) {
    return NextResponse.rewrite(new URL('https://m.me/100644866097188?ref=Welcome'))    
  }

  if (request.nextUrl.pathname.startsWith('/dtd')) {
    return NextResponse.rewrite(new URL('https://google.com'))    
  }
}
