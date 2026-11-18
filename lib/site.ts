export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'https://fitrah-porto.netlify.app',
);

export function localizedUrl(pathname: string, lang: 'id' | 'en'): string {
  const url = new URL(pathname, siteUrl);
  url.searchParams.set('lang', lang);
  return url.toString();
}
