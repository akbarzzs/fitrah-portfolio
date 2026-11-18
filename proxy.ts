import { existsSync } from 'node:fs';
import path from 'node:path';
import { NextResponse, type NextRequest } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split('/')[2];

  if (!slug || !/^[\w-]+$/.test(slug) || !existsSync(path.join(postsDirectory, `${slug}.md`))) {
    const notFoundUrl = request.nextUrl.clone();
    notFoundUrl.pathname = '/_not-found';
    return NextResponse.rewrite(notFoundUrl, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/blog/:slug',
};
