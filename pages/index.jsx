import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/tu-van')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/k8WU65JR'))    
  }

  if (request.nextUrl.pathname.startsWith('/cre')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/bkT8ggUr'))    
  }

  if (request.nextUrl.pathname.startsWith('/sen')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/FGkQtTdv'))    
  }

  if (request.nextUrl.pathname.startsWith('/rob')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/3XaAt7D3'))    
  }

  if (request.nextUrl.pathname.startsWith('/tie')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/cn62Wj3R'))    
  }

  if (request.nextUrl.pathname.startsWith('/tam')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/TK9P1DfQ'))    
  }

  if (request.nextUrl.pathname.startsWith('/ava')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/3hcseg7c'))    
  }

  if (request.nextUrl.pathname.startsWith('/jef')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/DQ2p496d'))    
  }

  if (request.nextUrl.pathname.startsWith('/fin')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/fYDUxmxc'))    
  }

  if (request.nextUrl.pathname.startsWith('/fin')) {
    return NextResponse.rewrite(new URL('https://shorten.asia/fYDUxmxc'))    
  }

  if (request.nextUrl.pathname.startsWith('/tnex')) {
    return NextResponse.rewrite(new URL('https://mfast.vn/tnex/510863'))    
  }

  if (request.nextUrl.pathname.startsWith('/cake')) {
    return NextResponse.rewrite(new URL('https://mfast.vn/cake/510863'))    
  }

  if (request.nextUrl.pathname.startsWith('/mb')) {
    return NextResponse.rewrite(new URL('https://mfast.vn/cai-dat/510863'))    
  }

  if (request.nextUrl.pathname.startsWith('/cham-diem-tin-dung')) {
    return NextResponse.rewrite(new URL('https://sites.google.com/view/crezu-new'))    
  }

  if (request.nextUrl.pathname.startsWith('/vay-tien')) {
    return NextResponse.rewrite(new URL('https://linkfly.to/tuvan-vaytien'))    
  }
}