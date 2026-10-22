import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import BackToTop from '../components/backtotop';
import CustomCursor from '../components/customcursor';

export const metadata: Metadata = {
  title: 'Fitrah Ali Akbar | QA Automation Engineer',
  description: 'Portfolio profesional Fitrah Ali Akbar. Membantu perusahaan memastikan kualitas aplikasi bebas bug melalui otomatisasi pengujian.',
  openGraph: {
    title: 'Fitrah Ali Akbar | QA Automation Engineer',
    description: 'Spesialis Quality Assurance dan Automation Testing. Mari tingkatkan kualitas software Anda.',
    url: 'https://fitrah-porto.netlify.app',
    siteName: 'Fitrah Ali Akbar Portfolio',
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
      <body className="font-sans bg-white text-slate-900 antialiased selection:bg-blue-200 flex flex-col min-h-screen cursor-auto lg:cursor-none">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <BackToTop />
      </body>
    </html>
  );
}