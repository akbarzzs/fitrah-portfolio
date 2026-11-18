import BlogSearch from '../../components/blogsearch';
import { dictionary } from '../../lib/dictionary';
import { getAllPosts } from '../../lib/blog';
import { localizedUrl } from '../../lib/site';

export const instant = false;

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const currentLang = resolvedParams?.lang === 'en' ? 'en' : 'id';
  const { title, desc } = dictionary[currentLang].blogPage;
  const url = localizedUrl('/blog', currentLang);

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
      languages: {
        id: localizedUrl('/blog', 'id'),
        en: localizedUrl('/blog', 'en'),
      },
    },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: 'Konsultan SOP & Job Description',
      locale: currentLang === 'en' ? 'en_US' : 'id_ID',
      type: 'website' as const,
    },
  };
}

export default async function BlogList({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const currentLang = resolvedParams?.lang === 'en' ? 'en' : 'id';
  const t = dictionary[currentLang].blogPage;

  const posts = getAllPosts();

  return (
    <div className="bg-slate-50 min-h-screen pt-20 md:pt-24 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{t.title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>
        
        <BlogSearch posts={posts} lang={currentLang} />
      </div>
    </div>
  );
}