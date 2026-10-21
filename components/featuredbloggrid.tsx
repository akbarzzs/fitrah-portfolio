import Link from 'next/link';
import FadeUp from './fadeup';

export default function FeaturedBlogGrid({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) {
    return <p className="text-slate-500">Belum ada artikel terbaru.</p>;
  }

  // Pisahkan 1 artikel terbaru, dan sisa artikel lainnya
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="space-y-8">
      {/* Artikel Utama (Gede & Gelap ala Berita Premium) */}
      <FadeUp>
        <Link href={`/blog/${featuredPost.slug}`} className="group block bg-slate-900 text-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
          <div className="p-8 md:p-16 flex flex-col md:flex-row justify-between md:items-end gap-8 relative overflow-hidden">
            {/* Efek Cahaya di Pojok */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                Rilis Terbaru
              </span>
              <p className="text-slate-400 text-sm mb-4 font-medium">
                {new Date(featuredPost.frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 group-hover:text-blue-400 transition-colors leading-[1.2]">
                {featuredPost.frontmatter.title}
              </h3>
              <div className="text-blue-400 font-medium text-base inline-flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                Baca Artikel Utama <span className="text-xl leading-none">&rarr;</span>
              </div>
            </div>
          </div>
        </Link>
      </FadeUp>

      {/* Artikel Reguler (Grid Normal di bawahnya) */}
      {regularPosts.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularPosts.map((post, idx) => (
            <FadeUp key={post.slug} delay={(idx + 1) * 100}>
              <Link href={`/blog/${post.slug}`} className="group block h-full bg-white border border-slate-200 p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1.5 transition-all duration-300">
                <p className="text-slate-400 text-sm mb-4 tracking-wide font-medium">
                  {new Date(post.frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.frontmatter.title}
                </h3>
                <div className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                  Baca Selengkapnya <span className="text-lg leading-none">&rarr;</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      )}
    </div>
  );
}