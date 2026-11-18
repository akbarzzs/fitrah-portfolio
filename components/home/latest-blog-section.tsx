import Link from 'next/link';
import type { BlogPostSummary } from '../../lib/blog';
import { dictionary, type Language } from '../../lib/dictionary';
import FadeUp from '../fadeup';
import FeaturedBlogGrid from '../featuredbloggrid';

export default function LatestBlogSection({ posts, lang }: { posts: BlogPostSummary[]; lang: Language }) {
  const { blog } = dictionary[lang];

  return (
    <section id="latest-blog" className="scroll-mt-24 py-20 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{blog.title}</h2>
              <p className="text-slate-500 text-lg">{blog.desc}</p>
            </div>
            <Link href={`/blog?lang=${lang}`} className="hidden md:inline-flex text-slate-900 font-medium hover:text-blue-600 transition-colors items-center gap-2 group">
              {blog.viewAll}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </FadeUp>
        <FeaturedBlogGrid posts={posts} lang={lang} />
      </div>
    </section>
  );
}
