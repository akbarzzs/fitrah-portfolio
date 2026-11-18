'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { dictionary } from '../lib/dictionary';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') === 'en' ? 'en' : 'id';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 p-3 rounded-md bg-blue-700 text-white shadow-md hover:bg-blue-800 transition-colors duration-200 z-50 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      aria-label={dictionary[currentLang].backToTop}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
    </button>
  );
}

export default function BackToTop() {
  return (
    <Suspense fallback={null}>
      <BackToTopButton />
    </Suspense>
  );
}