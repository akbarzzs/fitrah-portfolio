import { dictionary, type Language } from '../../lib/dictionary';
import FadeUp from '../fadeup';
import FAQ from '../faq';

export default function FAQSection({ lang }: { lang: Language }) {
  const { faq } = dictionary[lang];

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{faq.title}</h2>
            <p className="text-slate-500 text-lg">{faq.desc}</p>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <FAQ lang={lang} />
        </FadeUp>
      </div>
    </section>
  );
}
