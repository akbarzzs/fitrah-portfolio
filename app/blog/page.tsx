import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogSearch from '../../components/blogsearch';

export default function BlogList() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir) : [];

  const posts = files
    .map(filename => {
      const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
      const { data: frontmatter } = matter(fileContent);
      return {
        slug: filename.replace('.md', ''),
        frontmatter,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Insight & Artikel</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Eksplorasi mendalam seputar Quality Assurance, otomatisasi pengujian, dan praktik terbaik dalam rekayasa perangkat lunak.
          </p>
        </div>
        
        {/* Panggil komponen pencarian interaktif di sini */}
        <BlogSearch posts={posts} />
      </div>
    </div>
  );
}