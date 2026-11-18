import FadeUp from '../fadeup';
import { dictionary, type Language } from '../../lib/dictionary';

export default function ProcessSection({ lang }: { lang: Language }) {
  const { experience } = dictionary[lang];

  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{experience.title}</h2>
            <p className="text-slate-500 text-lg">{experience.desc}</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experience.items.map((step, index) => (
            <FadeUp key={step.step} delay={index * 150}>
              <div className="relative h-full flex flex-col bg-slate-50 p-7 rounded-lg border border-slate-200 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-white border border-slate-200 text-blue-700 font-semibold text-xl rounded-md flex items-center justify-center mb-6">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-slate-800">{step.role}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{step.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {step.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
