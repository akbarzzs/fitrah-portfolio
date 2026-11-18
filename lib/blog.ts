import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export type BlogPostSummary = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt?: string;
    category?: string;
  };
};

export type BlogPost = BlogPostSummary & {
  content: string;
};

function normalizeDate(value: unknown): string {
  if (!(value instanceof Date) && typeof value !== 'string') return '';

  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

function readPost(slug: string): BlogPost | null {
  if (!/^[\w-]+$/.test(slug)) return null;

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
  const metadata = data as Record<string, unknown>;
  const title = typeof metadata.title === 'string' ? metadata.title : slug;
  const excerpt = typeof metadata.excerpt === 'string' ? metadata.excerpt : undefined;
  const category = typeof metadata.category === 'string' ? metadata.category : undefined;

  return {
    slug,
    frontmatter: {
      title,
      date: normalizeDate(metadata.date),
      ...(excerpt ? { excerpt } : {}),
      ...(category ? { category } : {}),
    },
    content,
  };
}

export function getAllPosts(): BlogPostSummary[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => readPost(fileName.slice(0, -3)))
    .filter((post): post is BlogPost => post !== null)
    .map(({ slug, frontmatter }) => ({ slug, frontmatter }))
    .sort((a, b) => {
      const dateDifference =
        (Date.parse(b.frontmatter.date) || 0) - (Date.parse(a.frontmatter.date) || 0);
      return dateDifference || a.slug.localeCompare(b.slug);
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
  return readPost(slug);
}
