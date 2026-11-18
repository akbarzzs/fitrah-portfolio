'use client';
import Image from 'next/image';
import { useEffect, useRef, useState, type ComponentProps } from 'react';
import { createPortal } from 'react-dom';
import { dictionary, type Language } from '../lib/dictionary';

type ZoomImageProps = Omit<ComponentProps<'img'>, 'src' | 'width' | 'height'> & {
  src?: string;
  lang: Language;
};

export default function ZoomImage({ src, alt, lang, ...props }: ZoomImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const t = dictionary[lang].blogDetail;

  useEffect(() => {
    if (!isZoomed) return;

    const trigger = triggerRef.current;
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsZoomed(false);
      } else if (event.key === 'Tab') {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      trigger?.focus();
    };
  }, [isZoomed]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="block relative w-full h-auto mt-8 mb-8 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-zoom-in group text-left"
        onClick={() => setIsZoomed(true)}
        aria-label={`${t.enlargeImage}: ${alt || ''}`}
      >
        <Image
          src={src || ''}
          alt={alt || t.imageAlt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 75vw"
          unoptimized
          loading="lazy"
          className="w-full object-cover m-0 transition-transform duration-300 group-hover:scale-[1.01]"
          {...props}
        />
        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-opacity duration-200">
            {t.enlargeImage}
          </span>
        </span>
      </button>

      {isZoomed && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.enlargeImage}
          className="fixed inset-0 z-[99999] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <Image
            src={src || ''}
            alt={alt || t.enlargedImageAlt}
            width={1600}
            height={1200}
            sizes="100vw"
            unoptimized
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <button
            ref={closeRef}
            type="button"
            aria-label={t.closeImage}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
