'use client';
import { useState } from 'react';
import Link from 'next/link';
import FeaturedBlogGrid from './featuredbloggrid';
import FadeUp from './fadeup';

export default function BlogSearch({ posts }: { posts: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Ambil semua kategori unik dari data artikel lu (kalau gak ada, default "Artikel")
  const categories = ['Semua', ...Array.from(new Set(posts.map(post => post.frontmatter.category || 'Artikel')))];

  // Filter ganda (Berdasarkan Search Text DAN Kategori yang dipilih)
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || (post.frontmatter.category || 'Artikel') === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Action Bar: Search & Category Filter */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat as string}
              onClick={() => setActiveCategory(cat as string)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat as string}
            </button>
          ))}
        </div>

        {/* Kolom Input Search */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow text-slate-900 shadow-sm text-sm"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tampilan Konten */}
      {searchQuery !== '' || activeCategory !== 'Semua' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, idx) => (
            <FadeUp key={post.slug} delay={idx * 50}>
              <Link href={`/blog/${post.slug}`} className="group block h-full bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    {post.frontmatter.category || 'Artikel'}
                  </span>
                  <p className="text-slate-400 text-xs font-medium">
                    {new Date(post.frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                </div>
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
            <div className="col-span-full py-16 text-center border-2 border-dashed border-slate-200 rounded-3xl">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Artikel Tidak Ditemukan</h3>
              <p className="text-slate-500 max-w-md mx-auto">Kami tidak dapat menemukan artikel yang sesuai dengan filter atau kata kunci yang Anda masukkan.</p>
            </div>
          )}
        </div>
      ) : (
        <FeaturedBlogGrid posts={posts} />
      )}
    </div>
  );
}