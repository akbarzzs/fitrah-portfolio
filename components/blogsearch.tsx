'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { BlogPostSummary } from '../lib/blog';
import { formatDate } from '../lib/date';
import { dictionary } from '../lib/dictionary';
import type { Language } from '../lib/dictionary';

export default function BlogSearch({ posts, lang }: { posts: BlogPostSummary[]; lang: Language }) {
  const [query, setQuery] = useState('');
  const t = dictionary[lang].blog;

  if (posts.length === 0) return null;
  const featuredPost = posts[0];
  const restPosts = posts.slice(1);
  const isSearching = query.trim().length > 0;

  // Jika sedang cari kata kunci, tampilkan semua hasil pencarian. Jika tidak, tampilkan sisa artikel di grid bawah
  const filteredPosts = isSearching
    ? posts.filter((post) => {
        const title = post.frontmatter.title?.toLowerCase() || '';
        const excerpt = post.frontmatter.excerpt?.toLowerCase() || '';
        const q = query.trim().toLowerCase();
        return title.includes(q) || excerpt.includes(q);
      })
    : restPosts;

  return (
    <div className="space-y-10">
      {!isSearching && featuredPost && (
        <div className="bg-slate-900 text-white rounded-lg p-7 md:p-10 relative overflow-hidden border border-slate-800 mb-10">
          <div className="flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="inline-block px-2.5 py-1 bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider rounded mb-5">
                {t.featured}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-7">
                <Link href={`/blog/${featuredPost.slug}?lang=${lang}`}>
                  {featuredPost.frontmatter.title}
                </Link>
              </h2>
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

      <div className="mb-8">
        <input
          type="text"
          aria-label={t.searchPlaceholder}
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-3 border border-slate-300 rounded-md focus:border-blue-600 transition-colors bg-white text-slate-800"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
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
        {isSearching && filteredPosts.length === 0 && (
          <p className="text-slate-500 md:col-span-2 lg:col-span-3" role="status">{t.noResults}</p>
        )}
      </div>
    </div>
  );
}