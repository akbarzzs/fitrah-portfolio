import type { Metadata } from 'next';
import AboutSection from '../components/home/about-section';
import ContactSection from '../components/home/contact-section';
import FAQSection from '../components/home/faq-section';
import HeroSection from '../components/home/hero-section';
import LatestBlogSection from '../components/home/latest-blog-section';
import ProcessSection from '../components/home/process-section';
import ServicesSection from '../components/home/services-section';
import SiteFooter from '../components/home/site-footer';
import { getAllPosts } from '../lib/blog';
import { localizedUrl } from '../lib/site';

export const instant = false;

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

function getLanguage(value: string | string[] | undefined): 'id' | 'en' {
  return value === 'en' ? 'en' : 'id';
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const lang = getLanguage((await searchParams).lang);
  const isEnglish = lang === 'en';
  const title = isEnglish
    ? 'SOP & Operations Consulting for Growing Businesses'
    : 'Konsultan SOP & Job Description Perusahaan';
  const description = isEnglish
    ? 'Build practical SOPs, clear workflows, and reliable operating systems that help your team work consistently.'
    : 'Susun SOP praktis, alur kerja yang jelas, dan sistem operasional yang membantu tim bekerja konsisten.';
  const url = localizedUrl('/', lang);

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
      type: 'website',
    },
  };
}

export default async function Home({ searchParams }: Props) {
  const lang = getLanguage((await searchParams).lang);
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <div className="text-slate-900 bg-white overflow-hidden">
      <HeroSection lang={lang} />
      <ServicesSection lang={lang} />
      <AboutSection lang={lang} />
      <ProcessSection lang={lang} />
      <LatestBlogSection posts={recentPosts} lang={lang} />
      <FAQSection lang={lang} />
      <ContactSection lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  );
}
