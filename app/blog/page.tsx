import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-lg border border-slate-800 p-6"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="mt-2 text-slate-400">
              {post.excerpt}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              {post.date}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}