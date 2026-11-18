'use client';
import { useState } from 'react';
import { dictionary } from '../lib/dictionary';
import type { Language } from '../lib/dictionary';

export default function FAQ({ lang }: { lang: Language }) {
  const faqs = dictionary[lang].faqList;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((active) => active === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border ${activeIndex === index ? 'border-blue-300 bg-slate-50' : 'border-slate-200 bg-white'} rounded-lg overflow-hidden transition-colors duration-200`}
          >
            <button
              type="button"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              className="w-full px-5 py-5 flex items-center justify-between text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className={`font-semibold md:text-lg pr-4 ${activeIndex === index ? 'text-blue-800' : 'text-slate-800'}`}>
                {faq.question}
              </span>
              <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded transition-transform duration-200 ${activeIndex === index ? 'bg-blue-100 text-blue-700 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
            </button>
            <div 
              id={`faq-answer-${index}`}
              className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}