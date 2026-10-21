import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogList() {
  // Ambil semua file dari folder content/blog
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir) : [];

  const posts = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data: frontmatter } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900">Catatan & Artikel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.frontmatter.title}</h2>
              <p className="text-gray-500 mb-5 text-sm font-medium">
                {new Date(post.frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <span className="text-blue-600 font-semibold hover:underline">Baca selengkapnya &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}