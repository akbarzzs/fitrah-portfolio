import Image from 'next/image';
import FadeUp from '../fadeup';
import { dictionary, type Language } from '../../lib/dictionary';

export default function AboutSection({ lang }: { lang: Language }) {
  const { about } = dictionary[lang];

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <FadeUp>
              <div className="relative border border-slate-200 p-2 rounded-lg bg-white">
                <div className="aspect-[4/5] md:aspect-square bg-slate-200 rounded overflow-hidden relative">
                  <Image
                    src="/images/profil.jpg"
                    alt={about.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 rounded-md border border-slate-200">
                    <p className="font-semibold text-base text-slate-900">{about.imageTitle}</p>
                    <p className="text-blue-700 text-sm">{about.imageDesc}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div>
            <FadeUp delay={150}>
              <div className="inline-block mb-4 px-3 py-1 border-l-2 border-blue-600 text-blue-700 font-semibold text-sm tracking-wide">
                {about.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                {about.titlePart1} <span className="text-blue-700">{about.titlePart2}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{about.desc}</p>

              <ul className="space-y-5 mb-10">
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-md text-blue-700 shrink-0 mt-1" aria-hidden="true">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">{about.point1Title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{about.point1Desc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-md text-blue-700 shrink-0 mt-1" aria-hidden="true">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold text-lg mb-1">{about.point2Title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{about.point2Desc}</p>
                  </div>
                </li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
