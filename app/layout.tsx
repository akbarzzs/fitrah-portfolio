import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import FloatingWA from '../components/floatingwa';
import { siteUrl } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Konsultan SOP & Job Description Perusahaan',
    template: '%s | Fitrah Ali Akbar',
  },
  description: 'Hentikan ketergantungan operasional bisnis pada figur tertentu. Layanan jasa pembuatan SOP, audit proses bisnis, dan sistem operasional oleh eks-Director HR Hotel Bintang 5.',
  openGraph: {
    title: 'Jasa Pembuatan SOP & Sistem Manajemen Perusahaan',
    description: 'Kami bantu susun SOP terstruktur, praktis, dan siap dieksekusi tim tanpa perlu Anda awasi 24/7.',
    siteName: 'Konsultan SOP & Job Description',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-sans bg-slate-50 text-slate-800 antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <FloatingWA />
      </body>
    </html>
  );
}