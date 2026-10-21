import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';

export const metadata: Metadata = {
  title: 'Fitrah Ali Akbar | QA Automation Engineer',
  description: 'Portfolio of Fitrah Ali Akbar Setiawan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}