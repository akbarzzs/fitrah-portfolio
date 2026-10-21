'use client';
import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div
      className="fixed top-[60px] md:top-[68px] left-0 h-1 bg-blue-600 z-[60] transition-all duration-150 ease-out"
      style={{ width: `${readingProgress}%` }}
    />
  );
}