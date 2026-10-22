import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import CodeBlock from '../../../components/codeblock';
import ZoomImage from '../../../components/zoomimage';

export const instant = false;

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir) : [];

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'content/blog', `${slug}.md`), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  
  const readingTime = calculateReadingTime(content);
  const articleUrl = `https://fitrah-porto.netlify.app/blog/${slug}`;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12 group font-medium relative z-10">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          Kembali ke daftar artikel
        </Link>
        
        <header className="mb-12 pb-10 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm font-medium mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-bold text-xs uppercase tracking-wider">
              {frontmatter.category || 'Artikel'}
            </span>
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {readingTime} menit baca
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
            {frontmatter.title}
          </h1>
        </header>

        <article className="prose prose-lg md:prose-xl prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:decoration-blue-200 hover:prose-a:decoration-blue-600 prose-a:underline-offset-4 max-w-none">
          <ReactMarkdown
            components={{
              // Mesin pencetak terminal Mac otomatis
              pre({ node, children, ...props }) {
                return <CodeBlock {...props}>{children}</CodeBlock>;
              },
              // Mesin zoom gambar otomatis
              img({ node, src, alt, ...props }) {
                return <ZoomImage src={src} alt={alt} {...props} />;
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">
              F
            </div>
            <div>
              <p className="font-bold text-slate-900">Fitrah Ali Akbar</p>
              <p className="text-sm text-slate-500">QA Automation Engineer</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500 mr-2">Bagikan:</span>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
              title="Share ke LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}