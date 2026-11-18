'use client';
import { useState, type FormEvent } from 'react';
import { dictionary } from '../lib/dictionary';
import type { Language } from '../lib/dictionary';

export default function ContactForm({ lang }: { lang: Language }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const t = dictionary[lang].contactForm;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();
    formData.forEach((value, key) => encodedData.append(key, value.toString()));
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData.toString(),
        signal: controller.signal,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        console.error('Contact form submission failed with status', res.status);
        setStatus('error');
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Contact form submission timed out');
      } else {
        console.error('Contact form submission failed', error);
      }
      setStatus('error');
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-white border border-slate-200 p-6 md:p-8 rounded-lg relative overflow-hidden"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="hidden">
        <label>
          {t.honeypotLabel} <input name="bot-field" tabIndex={-1} />
        </label>
      </div>

      {status === 'success' && (
        <div role="status" className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center p-8 z-10 transition-all duration-300">
          <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.successTitle}</h3>
          <p className="text-slate-600 mb-6">{t.successMessage}</p>
          <button type="button" onClick={() => setStatus('idle')} className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors">{t.sendAnother}</button>
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{t.name}</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder={t.namePlaceholder} disabled={status === 'submitting'} />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{t.email}</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder={t.emailPlaceholder} disabled={status === 'submitting'} />
      </div>
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{t.message}</label>
        <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-md bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder={t.messagePlaceholder} disabled={status === 'submitting'}></textarea>
      </div>
      {status === 'error' && <p role="alert" className="text-sm text-red-700 mb-4">{t.error}</p>}
      <button type="submit" disabled={status === 'submitting'} className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 disabled:bg-slate-400 text-white font-semibold rounded-md transition-colors flex items-center justify-center gap-2 group">
        {status === 'submitting' ? t.submitting : t.submit}
        {status !== 'submitting' && <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
      </button>
    </form>
  );
}