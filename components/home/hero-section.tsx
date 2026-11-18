import Link from 'next/link';
import FadeUp from '../fadeup';
import { dictionary, type Language } from '../../lib/dictionary';

export default function HeroSection({ lang }: { lang: Language }) {
  const { hero } = dictionary[lang];

  return (
    <section className="relative bg-slate-50 py-20 md:py-28 px-6 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7 flex flex-col items-start text-left">
          <FadeUp>
            <div className="inline-block mb-6 px-3 py-1 border-l-2 border-blue-600 text-blue-700 font-semibold text-sm tracking-wide">
              {hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.12]">
              {hero.titleMain} <br />
              <span className="text-blue-700">{hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              {hero.desc}
            </p>
            <Link href={`/?lang=${lang}#services`} className="px-7 py-3.5 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-2 group">
              {hero.cta}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </FadeUp>
        </div>

        <div className="md:col-span-5 hidden md:block">
          <FadeUp delay={100}>
            <div className="bg-white border border-slate-200 p-7 md:p-9 rounded-lg">
              <div className="mb-5 pb-4 border-b border-slate-200">
                <p className="font-semibold text-slate-800">{hero.widgetStatus}</p>
              </div>
              <ol className="space-y-0">
                {[hero.widgetAudit, hero.widgetDraft, hero.widgetTrain].map((step, index) => (
                  <li key={step} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
                    <span className="w-8 h-8 shrink-0 border border-slate-300 text-blue-700 text-sm font-semibold flex items-center justify-center rounded-full">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
