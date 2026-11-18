'use client';
import Link from 'next/link';
import type { BlogPostSummary } from '../lib/blog';
import { formatDate } from '../lib/date';
import { dictionary } from '../lib/dictionary';
import type { Language } from '../lib/dictionary';

export default function FeaturedBlogGrid({ posts, lang }: { posts: BlogPostSummary[]; lang: Language }) {
  if (!posts || posts.length === 0) return null;

  const featuredPost = posts[0];
  const smallPosts = posts.slice(1);
  const t = dictionary[lang].blog;

  return (
    <div className="space-y-8">
      {featuredPost && (
        <div className="bg-slate-900 text-white rounded-lg p-7 md:p-10 relative overflow-hidden border border-slate-800">
          <div className="flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="inline-block px-2.5 py-1 bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded mb-5">
                {t.featured}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-7 hover:text-blue-200 transition-colors">
                <Link href={`/blog/${featuredPost.slug}?lang=${lang}`}>
                  {featuredPost.frontmatter.title}
                </Link>
              </h3>
            </div>

            <div className="pt-5 border-t border-slate-700 flex items-center justify-between text-sm text-slate-300">
              <span>{formatDate(featuredPost.frontmatter.date, lang)}</span>
              <Link
                href={`/blog/${featuredPost.slug}?lang=${lang}`}
                className="text-blue-200 font-semibold hover:text-white hover:underline flex items-center gap-1 transition-colors"
              >
                {t.readFull}
              </Link>
            </div>
          </div>
        </div>
      )}

      {smallPosts.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {smallPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col hover:border-slate-300 transition-colors"
            >
              <div className="text-xs text-blue-700 font-semibold uppercase tracking-wider mb-2">
                {post.frontmatter.category || t.category}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3 hover:text-blue-700 transition-colors">
                <Link href={`/blog/${post.slug}?lang=${lang}`}>
                  {post.frontmatter.title}
                </Link>
              </h3>
              {post.frontmatter.excerpt && (
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.frontmatter.excerpt}
                </p>
              )}
              <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>{formatDate(post.frontmatter.date, lang)}</span>
                <Link
                  href={`/blog/${post.slug}?lang=${lang}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {t.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}