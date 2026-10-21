'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="bg-slate-800/50 border border-slate-700 p-8 md:p-10 rounded-2xl relative overflow-hidden">
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Overlay Animasi Sukses */}
      {status === 'success' && (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 z-10 transition-all duration-500">
          <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-4 animate-bounce">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Pesan Terkirim!</h3>
          <p className="text-slate-300 mb-6">Terima kasih telah menghubungi. Saya akan segera membalas email Anda.</p>
          <button type="button" onClick={() => setStatus('idle')} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">Kirim Pesan Lain</button>
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nama / Perusahaan</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" disabled={status === 'submitting'} />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Bisnis</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="hello@company.com" disabled={status === 'submitting'} />
      </div>
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Pesan / Kebutuhan</label>
        <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Ceritakan detail proyek Anda..." disabled={status === 'submitting'}></textarea>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 group">
        {status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
        {status !== 'submitting' && <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
      </button>
    </form>
  );
}