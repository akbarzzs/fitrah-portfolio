import type { MetadataRoute } from 'next';
import { getAllPosts } from '../lib/blog';
import { localizedUrl } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = {
    id: localizedUrl('/', 'id'),
    en: localizedUrl('/', 'en'),
  };
  const blogLanguages = {
    id: localizedUrl('/blog', 'id'),
    en: localizedUrl('/blog', 'en'),
  };

  return [
    { url: homeLanguages.id, alternates: { languages: homeLanguages } },
    { url: homeLanguages.en, alternates: { languages: homeLanguages } },
    { url: blogLanguages.id, alternates: { languages: blogLanguages } },
    { url: blogLanguages.en, alternates: { languages: blogLanguages } },
    ...getAllPosts().flatMap(({ slug, frontmatter }) => {
      const languages = {
        id: localizedUrl(`/blog/${slug}`, 'id'),
        en: localizedUrl(`/blog/${slug}`, 'en'),
      };
      return [
        {
          url: languages.id,
          alternates: { languages },
          ...(frontmatter.date ? { lastModified: new Date(frontmatter.date) } : {}),
        },
        {
          url: languages.en,
          alternates: { languages },
          ...(frontmatter.date ? { lastModified: new Date(frontmatter.date) } : {}),
        },
      ];
    }),
  ];
}
