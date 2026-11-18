import FadeUp from '../fadeup';
import { dictionary, type Language } from '../../lib/dictionary';

export default function ServicesSection({ lang }: { lang: Language }) {
  const { services } = dictionary[lang];

  return (
    <section id="services" className="scroll-mt-24 py-20 md:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp delay={100}>
          <div className="mb-12 md:flex md:justify-between md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{services.title}</h2>
              <p className="text-slate-500 text-lg">{services.desc}</p>
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.items.map((service, index) => (
            <FadeUp key={service.title} delay={index * 150}>
              <div className="bg-white h-full p-8 rounded-lg border border-slate-200 transition-colors duration-200 group">
                <div className="w-11 h-11 bg-slate-100 text-blue-700 rounded-md flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
