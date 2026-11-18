'use client';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { dictionary } from '../lib/dictionary';

function NotFoundContent() {
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') === 'en' ? 'en' : 'id';
  const t = dictionary[currentLang].notFound;

  return (
    <div className="min-h-[75vh] flex flex-col justify-center items-center text-center px-6 bg-slate-50">
      <h1 className="text-8xl md:text-9xl font-bold text-slate-200 mb-6 tracking-tight">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">{t.description}</p>
      <Link href={`/?lang=${currentLang}`} className="px-7 py-3.5 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors">
        {t.home}
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div className="min-h-[75vh] flex items-center justify-center bg-slate-50 text-8xl font-bold text-slate-200">404</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
