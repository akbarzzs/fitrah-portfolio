'use client';
import { useState } from 'react';

export default function CodeBlock({ children, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const text = children?.props?.children || '';

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="block relative bg-slate-900 rounded-xl shadow-2xl overflow-hidden my-8 border border-slate-800 group text-left">
      {/* Header Terminal Mac + Tombol Copy */}
      <span className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
        <span className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 opacity-0 group-hover:opacity-100 focus:opacity-100"
          title="Copy code"
        >
          {copied ? (
            <><svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Tersalin!</>
          ) : (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copy</>
          )}
        </button>
      </span>
      <pre className="p-5 overflow-x-auto text-sm md:text-base text-slate-300 bg-transparent m-0 font-mono leading-relaxed" {...props}>
        {children}
      </pre>
    </span>
  );
}