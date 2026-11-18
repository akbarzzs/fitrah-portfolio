import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../components/contactform';
import FadeUp from '../components/fadeup';
import FeaturedBlogGrid from '../components/featuredbloggrid';
import FAQ from '../components/faq';
import { dictionary } from '../lib/dictionary';
import { getAllPosts } from '../lib/blog';
import { contactDetails } from '../lib/contact';
import { localizedUrl } from '../lib/site';

export const instant = false;

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const currentLang = resolvedParams?.lang === 'en' ? 'en' : 'id';
  const isEnglish = currentLang === 'en';
  const title = isEnglish
    ? 'SOP & Operations Consulting for Growing Businesses'
    : 'Konsultan SOP & Job Description Perusahaan';
  const description = isEnglish
    ? 'Build practical SOPs, clear workflows, and reliable operating systems that help your team work consistently.'
    : 'Susun SOP praktis, alur kerja yang jelas, dan sistem operasional yang membantu tim bekerja konsisten.';
  const url = localizedUrl('/', currentLang);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        id: localizedUrl('/', 'id'),
        en: localizedUrl('/', 'en'),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Konsultan SOP & Job Description',
      locale: isEnglish ? 'en_US' : 'id_ID',
      alternateLocale: isEnglish ? 'id_ID' : 'en_US',
      type: 'website' as const,
    },
  };
}

export default async function Home({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const currentLang = resolvedParams?.lang === 'en' ? 'en' : 'id';
  const t = dictionary[currentLang];
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <div className="text-slate-900 bg-white overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-50 py-20 md:py-28 px-6 flex items-center">

        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <FadeUp>
              <div className="inline-block mb-6 px-3 py-1 border-l-2 border-blue-600 text-blue-700 font-semibold text-sm tracking-wide">
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.12]">
                {t.hero.titleMain} <br />
                <span className="text-blue-700">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href={`/?lang=${currentLang}#services`} className="px-7 py-3.5 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center gap-2 group">
                  {t.hero.cta}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </FadeUp>
          </div>

          <div className="md:col-span-5 hidden md:block">
            <FadeUp delay={100}>
              <div className="bg-white border border-slate-200 p-7 md:p-9 rounded-lg">
              <div className="mb-5 pb-4 border-b border-slate-200">
                <p className="font-semibold text-slate-800">{t.hero.widgetStatus}</p>
              </div>
              <ol className="space-y-0">
                {[t.hero.widgetAudit, t.hero.widgetDraft, t.hero.widgetTrain].map((step, index) => (
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

      {/* 2. SERVICES SECTION */}
      <section id="services" className="scroll-mt-24 py-20 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp delay={100}>
            <div className="mb-12 md:flex md:justify-between md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.services.title}</h2>
                <p className="text-slate-500 text-lg">{t.services.desc}</p>
              </div>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {t.services.items.map((service, idx) => (
              <FadeUp key={idx} delay={idx * 150}>
                <div className="bg-white h-full p-8 rounded-lg border border-slate-200 transition-colors duration-200 group">
                  <div className="w-11 h-11 bg-slate-100 text-blue-700 rounded-md flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US / PROFIL KONSULTAN */}
      <section id="about" className="scroll-mt-24 py-20 md:py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="relative">
              <FadeUp>
                <div className="relative border border-slate-200 p-2 rounded-lg bg-white">
                  <div className="aspect-[4/5] md:aspect-square bg-slate-200 rounded overflow-hidden relative">
                    <Image
                      src="/images/profil.jpg"
                      alt={t.about.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 rounded-md border border-slate-200">
                      <p className="font-semibold text-base text-slate-900">{t.about.imageTitle}</p>
                      <p className="text-blue-700 text-sm">{t.about.imageDesc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div>
              <FadeUp delay={150}>
                <div className="inline-block mb-4 px-3 py-1 border-l-2 border-blue-600 text-blue-700 font-semibold text-sm tracking-wide">
                  {t.about.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900">
                  {t.about.titlePart1} <span className="text-blue-700">{t.about.titlePart2}</span>
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {t.about.desc}
                </p>

                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-md text-blue-700 shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold text-lg mb-1">{t.about.point1Title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{t.about.point1Desc}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-md text-blue-700 shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-semibold text-lg mb-1">{t.about.point2Title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{t.about.point2Desc}</p>
                    </div>
                  </li>
                </ul>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TAHAPAN KERJA SECTION */}
      <section id="experience" className="scroll-mt-24 py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.experience.title}</h2>
              <p className="text-slate-500 text-lg">{t.experience.desc}</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.experience.items.map((exp, idx) => (
              <FadeUp key={idx} delay={idx * 150}>
                <div className="relative h-full flex flex-col bg-slate-50 p-7 rounded-lg border border-slate-200 transition-colors duration-200 group">
                  <div className="w-12 h-12 bg-white border border-slate-200 text-blue-700 font-semibold text-xl rounded-md flex items-center justify-center mb-6">
                    {exp.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-800">{exp.role}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] font-medium rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST BLOG SECTION */}
      <section id="latest-blog" className="scroll-mt-24 py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.blog.title}</h2>
                <p className="text-slate-500 text-lg">{t.blog.desc}</p>
              </div>
              <Link href={`/blog?lang=${currentLang}`} className="hidden md:inline-flex text-slate-900 font-medium hover:text-blue-600 transition-colors items-center gap-2 group">
                {t.blog.viewAll}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </FadeUp>
          <FeaturedBlogGrid posts={recentPosts} lang={currentLang} />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="scroll-mt-24 py-20 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{t.faq.title}</h2>
              <p className="text-slate-500 text-lg">{t.faq.desc}</p>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <FAQ lang={currentLang} />
          </FadeUp>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 py-20 md:py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-slate-900">{t.contact.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-md">
                  {t.contact.desc}
                </p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="inline-flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-colors group"
                >
                  <span className="p-3 bg-white border border-slate-200 rounded-md group-hover:border-blue-300 transition-colors" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </span>
                  <span className="font-medium">{t.contact.emailBtn}</span>
                </a>
              </div>

              <div>
                <ContactForm lang={currentLang} />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t.footer}</p>
          <a
            href={contactDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {t.contact.linkedin}
          </a>
        </div>
      </footer>
    </div>
  );
}