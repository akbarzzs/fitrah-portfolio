'use client';
import { useRef, useState, type ComponentProps } from 'react';
import { dictionary, type Language } from '../lib/dictionary';

type CodeBlockProps = ComponentProps<'pre'> & { lang: Language };

export default function CodeBlock({ children, lang, ...props }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const t = dictionary[lang].blogDetail;

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? '';

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API is not available');
      }

      await navigator.clipboard.writeText(text);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2000);
    } catch (error) {
      console.error('Unable to copy code block', error);
      setCopyState('error');
    }
  };

  return (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden my-8 border border-slate-800 group text-left">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/60 border-b border-slate-700">
        <span className="flex items-center gap-2 text-xs text-slate-300" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Code
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
          aria-label={t.codeCopy}
        >
          {copyState === 'copied'
            ? t.codeCopied
            : copyState === 'error'
              ? t.codeCopyFailed
              : t.codeCopy}
        </button>
      </div>
      <pre ref={preRef} className="p-5 overflow-x-auto text-sm md:text-base text-slate-300 bg-transparent m-0 font-mono leading-relaxed" {...props}>
        {children}
      </pre>
    </div>
  );
}
