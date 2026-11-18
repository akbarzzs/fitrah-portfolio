import { contactDetails } from '../../lib/contact';
import { dictionary, type Language } from '../../lib/dictionary';
import FadeUp from '../fadeup';
import ContactForm from '../contactform';

export default function ContactSection({ lang }: { lang: Language }) {
  const { contact } = dictionary[lang];

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-24 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-slate-900">{contact.title}</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-md">{contact.desc}</p>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors group">
                <span className="p-3 bg-white border border-slate-200 rounded-md group-hover:border-blue-300 transition-colors" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                <span className="font-medium">{contact.emailBtn}</span>
              </a>
            </div>
            <ContactForm lang={lang} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
