import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import ProgressBar from '../../../components/progressbar';

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
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* Ini fitur progress bar eksklusifnya */}
      <ProgressBar />
      
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 group font-medium">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          Kembali ke daftar artikel
        </Link>
        
        <header className="mb-12 pb-10 border-b border-slate-100">
          <div className="flex items-center gap-4 text-slate-400 text-sm font-medium mb-6">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
            <span>Fitrah Ali Akbar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
            {frontmatter.title}
          </h1>
        </header>

        <article className="prose prose-lg md:prose-xl prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:decoration-blue-200 hover:prose-a:decoration-blue-600 prose-a:underline-offset-4 prose-img:rounded-2xl prose-img:border prose-img:border-slate-100 max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}