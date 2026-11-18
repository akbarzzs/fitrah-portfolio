import { existsSync } from 'node:fs';
import path from 'node:path';
import { NextResponse, type NextRequest } from 'next/server';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');
const legacySlugs: Record<string, string> = {
  'cara-menjadi-tampan-ala-fitrah': 'pemetaan-proses-bisnis-untuk-sop',
  'first-post': 'manfaat-sop-operasional',
};

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split('/')[2];
  const replacementSlug = slug ? legacySlugs[slug] : undefined;

  if (replacementSlug) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/blog/${replacementSlug}`;
    return NextResponse.redirect(redirectUrl, 308);
  }

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
