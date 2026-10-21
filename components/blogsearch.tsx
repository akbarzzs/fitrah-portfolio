'use client';
import { useState } from 'react';
import Link from 'next/link';
import FeaturedBlogGrid from './featuredbloggrid';
import FadeUp from './fadeup';

export default function BlogSearch({ posts }: { posts: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post =>
    post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Kolom Input Search */}
      <div className="mb-12 relative max-w-xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 shadow-sm"
          placeholder="Cari artikel (contoh: Postman)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Logika UI: Kalau lagi nyari nampilin Grid biasa, kalau kosong nampilin Headline Gede */}
      {searchQuery !== '' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, idx) => (
            <FadeUp key={post.slug} delay={idx * 50}>
              <Link href={`/blog/${post.slug}`} className="group block h-full bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300">
                <p className="text-slate-400 text-sm mb-4 tracking-wide font-medium">
                  {new Date(post.frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
                <h2 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.frontmatter.title}
                </h2>
                <div className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                  Baca Selengkapnya <span className="text-lg leading-none">&rarr;</span>
                </div>
              </Link>
            </FadeUp>
          ))}

          {filteredPosts.length === 0 && (
            <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
              <p className="text-slate-500">Tidak ada artikel yang cocok dengan pencarian "{searchQuery}".</p>
            </div>
          )}
        </div>
      ) : (
        <FeaturedBlogGrid posts={posts} />
      )}
    </div>
  );
}