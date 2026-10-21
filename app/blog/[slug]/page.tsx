import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export const instant = false;

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir) : [];

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'content/blog', `${slug}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 lg:py-20">
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-flex items-center font-medium">
        &larr; <span className="ml-2 hover:underline">Kembali ke daftar artikel</span>
      </Link>
      
      <header className="mb-10 pb-8 border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
          {frontmatter.title}
        </h1>
        <div className="flex items-center text-slate-500 font-medium">
          {new Date(frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </header>

      <article className="prose prose-lg prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}