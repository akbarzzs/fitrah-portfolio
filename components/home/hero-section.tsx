import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '../fadeup';
import { dictionary, type Language } from '../../lib/dictionary';

export default function HeroSection({ lang }: { lang: Language }) {
  const { hero } = dictionary[lang];

  return (
    <section className="relative isolate flex items-center overflow-hidden bg-slate-950 px-6 pt-6 pb-16 md:bg-slate-50 md:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-0 md:grid-cols-12 md:gap-12">
        <div className="relative z-10 flex flex-col items-start text-left md:col-span-6">
          <FadeUp>
            <div className="mb-6 inline-block border-l-2 border-blue-300 px-3 py-1 text-sm font-semibold tracking-wide text-blue-100 md:border-blue-600 md:text-blue-700">
              {hero.badge}
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl md:text-slate-900">
              {hero.titleMain} <br />
              <span className="text-blue-300 md:text-blue-700">{hero.titleHighlight}</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-200 md:text-slate-600">
              {hero.desc}
            </p>
            <Link
              href={`/?lang=${lang}#services`}
              className="group inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-md border border-blue-500 bg-blue-700 px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-blue-800"
            >
              {hero.cta}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </FadeUp>
        </div>

        <div className="absolute inset-0 z-0 md:relative md:col-span-6 md:col-start-7 md:aspect-[4/3] md:overflow-hidden md:rounded-lg md:border md:border-slate-200 md:bg-white md:shadow-sm">
          <Image
            src="/images/Gemini_Generated_Image_limd2nlimd2nlimd.png"
            alt={hero.widgetImageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1536px) 50vw, 40vw"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px] md:scale-100 md:blur-none"
            loading="eager"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-slate-950/75 md:hidden" />
        </div>
      </div>
    </section>
  );
}
