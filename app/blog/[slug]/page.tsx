import { getPostBySlug } from "@/lib/blog";

// Tambahkan baris ini buat benerin error "Blocking Route"
export const instant = false;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Ambil slug dari URL
  const { slug } = await params;
  
  // KITA TAMBAHKAN AWAIT DI SINI KARENA FUNGSINYA SEKARANG ASYNC
  const post = await getPostBySlug(slug);

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      
      {/* SEKARANG KITA RENDER HTML-NYA MENGGUNAKAN dangerouslySetInnerHTML */}
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}