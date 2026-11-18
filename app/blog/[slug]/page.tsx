import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BackToTop from '../../../components/backtotop';
import CodeBlock from '../../../components/codeblock';
import ZoomImage from '../../../components/zoomimage';
import { dictionary, type Language } from '../../../lib/dictionary';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { formatDate } from '../../../lib/date';
import { localizedUrl } from '../../../lib/site';

export const instant = false;

export async function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

type Props = {
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const resolvedParams = await searchParams;
  const currentLang: Language = resolvedParams?.lang === 'en' ? 'en' : 'id';
  const title = post.frontmatter.title;
  const description = post.frontmatter.excerpt
    || `${title} — panduan praktis tentang SOP dan sistem operasional bisnis.`;
  const articlePath = `/blog/${slug}`;
  const url = localizedUrl(articlePath, currentLang);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        id: localizedUrl(articlePath, 'id'),
        en: localizedUrl(articlePath, 'en'),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Konsultan SOP & Job Description',
      locale: currentLang === 'en' ? 'en_US' : 'id_ID',
      type: 'article' as const,
      ...(post.frontmatter.date ? { publishedTime: post.frontmatter.date } : {}),
    },
  };
}

export default async function BlogPost({ params, searchParams }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const resolvedParams = await searchParams;
  const currentLang: Language = resolvedParams?.lang === 'en' ? 'en' : 'id';
  const t = dictionary[currentLang].blogDetail;
  
  const { frontmatter, content } = post;
  const publishedDate = formatDate(frontmatter.date, currentLang);
  const readingTime = calculateReadingTime(content);
  const articleUrl = localizedUrl(`/blog/${slug}`, currentLang);

  return (
    <div className="bg-white min-h-screen pt-12 md:pt-16 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href={`/blog?lang=${currentLang}`} className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors mb-9 group font-medium relative z-10">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          {t.back}
        </Link>
        
        <header className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm font-medium mb-6">
            <span className="px-2.5 py-1 bg-slate-100 text-blue-700 rounded font-semibold text-xs uppercase tracking-wider">
              {frontmatter.category || t.category}
            </span>
            {publishedDate && <time dateTime={frontmatter.date}>{publishedDate}</time>}
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {readingTime} {t.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
            {frontmatter.title}
          </h1>
        </header>

        <article className="prose prose-lg prose-slate prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-blue-700 prose-a:decoration-blue-200 hover:prose-a:decoration-blue-700 prose-a:underline-offset-4 max-w-none">
          <ReactMarkdown
            components={{
              pre({ node: _node, children, ...props }) {
                void _node;
                return <CodeBlock {...props} lang={currentLang}>{children}</CodeBlock>;
              },
              img({ node: _node, src, alt, ...props }) {
                void _node;
                return <ZoomImage {...props} src={typeof src === 'string' ? src : ''} alt={alt || ''} lang={currentLang} />;
              },
              h1({ node: _node, children, ...props }) {
                void _node;
                return <h2 {...props}>{children}</h2>;
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-blue-700 flex items-center justify-center font-semibold text-xl">
              F
            </div>
            <div>
              <p className="font-bold text-slate-900">Fitrah Ali Akbar</p>
              <p className="text-sm text-slate-500">{dictionary[currentLang].articleAuthorRole}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500 mr-2">{t.share}</span>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white border border-slate-300 text-slate-600 rounded-md hover:bg-slate-100 hover:text-blue-700 transition-colors"
              aria-label={t.shareLinkedIn}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}