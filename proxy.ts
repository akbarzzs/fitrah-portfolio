import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split('/')[2];

  if (!slug || !/^[\w-]+$/.test(slug)) {
    const notFoundUrl = request.nextUrl.clone();
    notFoundUrl.pathname = '/_not-found';
    return NextResponse.rewrite(notFoundUrl, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/blog/:slug',
};
