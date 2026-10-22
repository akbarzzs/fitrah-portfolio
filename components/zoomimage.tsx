'use client';
import { useState } from 'react';

export default function ZoomImage({ src, alt, ...props }: any) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      {/* Gambar Normal di Artikel */}
      <span 
        className="block relative w-full h-auto mt-8 mb-8 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 cursor-zoom-in group"
        onClick={() => setIsZoomed(true)}
      >
        <img 
          src={src} 
          alt={alt || "Ilustrasi artikel"} 
          loading="lazy"
          className="w-full object-cover m-0 transition-transform duration-500 group-hover:scale-[1.02]" 
          {...props} 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-slate-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm transition-opacity duration-300">
            Perbesar
          </span>
        </div>
      </span>

      {/* Overlay Saat Di-zoom */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[99999] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <img 
            src={src} 
            alt={alt || "Ilustrasi diperbesar"} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
          />
          <button 
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      )}
    </>
  );
}