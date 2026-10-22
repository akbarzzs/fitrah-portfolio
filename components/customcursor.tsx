'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Fungsi untuk melacak kursor
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Fungsi untuk mendeteksi apakah kursor ada di atas tombol/link
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('textarea') || 
        target.tagName.toLowerCase() === 'svg' || 
        target.closest('.group');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      {/* Lingkaran Luar (Ring) */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] transition-all duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 hidden lg:block ${
          isHovering ? 'scale-[1.8] bg-blue-600/10 border-blue-600' : 'scale-100 border-slate-400'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Titik Tengah (Dot) */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[10000] transition-all duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 hidden lg:block ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}