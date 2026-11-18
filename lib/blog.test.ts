import { describe, expect, it } from 'vitest';
import { getAllPosts, getPostBySlug } from './blog';

describe('blog content helpers', () => {
  it('returns post summaries sorted by publication date, newest first', () => {
    const posts = getAllPosts();

    expect(posts.length).toBeGreaterThan(0);
    expect(posts.every((post) => post.slug && post.frontmatter.title)).toBe(true);

    const dates = posts.map((post) => Date.parse(post.frontmatter.date) || 0);
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });

  it('loads article content and normalized frontmatter by slug', () => {
    const post = getPostBySlug('pemetaan-proses-bisnis-untuk-sop');

    expect(post).not.toBeNull();
    expect(post?.frontmatter.title).toBe('Memetakan Proses Bisnis Sebelum Menulis SOP');
    expect(post?.frontmatter.date).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(post?.content.length).toBeGreaterThan(0);
  });

  it.each(['../README', 'missing-post', 'nested/post'])(
    'rejects invalid or unknown slug "%s"',
    (slug) => {
      expect(getPostBySlug(slug)).toBeNull();
    },
  );
});
