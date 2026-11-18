'use client';
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { dictionary } from "../lib/dictionary";

function NavbarContent() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang = searchParams.get("lang") === "en" ? "en" : "id";
  const t = dictionary[currentLang].nav;

  const toggleLanguage = () => {
    const newLang = currentLang === "id" ? "en" : "id";
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    const hash = pathname === "/" ? "" : window.location.hash;
    router.push(`${pathname}?${params.toString()}${hash}`, { scroll: false });
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  useEffect(() => {
    const sectionIds = ["services", "about", "experience", "contact"];

    const updateActiveSection = () => {
      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

      const activationPoint = window.innerHeight * 0.4;
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)
        .filter((section) => section.getBoundingClientRect().top <= activationPoint)
        .at(-1);

      setActiveSection(currentSection?.id ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [currentLang, pathname]);

  return (
    <nav aria-label={t.navigationLabel} className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <Link href={`/?lang=${currentLang}`} className="max-w-[calc(100vw-6rem)] truncate text-lg sm:text-xl font-semibold text-slate-900 tracking-tight hover:text-blue-700 transition-colors">
          {t.logoText}
        </Link>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-100"
          aria-label={menuOpen ? t.closeMenu : t.menu}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <div className="hidden lg:flex gap-7 items-center font-medium text-sm text-slate-600">
          <Link href={`/?lang=${currentLang}`} className={`${pathname === '/' && activeSection === '' ? 'text-blue-700' : 'hover:text-blue-700'} transition-colors`}>{t.home}</Link>
          <Link href={`/?lang=${currentLang}#services`} className={`${activeSection === 'services' ? 'text-blue-700' : 'hover:text-blue-700'} transition-colors`}>{t.services}</Link>
          <Link href={`/?lang=${currentLang}#about`} className={`${activeSection === 'about' ? 'text-blue-700' : 'hover:text-blue-700'} transition-colors`}>{t.about}</Link>
          <Link href={`/?lang=${currentLang}#experience`} className={`${activeSection === 'experience' ? 'text-blue-700' : 'hover:text-blue-700'} transition-colors`}>{t.experience}</Link>
          <Link href={`/blog?lang=${currentLang}`} className={`${pathname.includes('/blog') ? 'text-blue-700' : 'hover:text-blue-700'} transition-colors`}>{t.blog}</Link>
          <Link href={`/?lang=${currentLang}#contact`} className={`${activeSection === 'contact' ? 'text-blue-700' : 'hover:text-blue-700'} transition-colors`}>{t.contact}</Link>

          {/* Toggle Switch Button ID | EN */}
          <button
            onClick={toggleLanguage}
            type="button"
            className="relative inline-flex items-center bg-slate-100 border border-slate-200 rounded-md p-1 w-20 h-9 transition-colors hover:border-slate-300"
            aria-label={t.switchLanguage}
          >
            {/* Sliding Pill Indicator */}
            <span
              className={`absolute top-1 bottom-1 w-[34px] rounded bg-blue-700 transition-transform duration-200 ease-in-out ${
                currentLang === 'en' ? 'translate-x-[36px]' : 'translate-x-0'
              }`}
            />
            {/* Labels */}
            <span className={`relative z-10 w-1/2 text-center text-xs font-semibold transition-colors select-none ${currentLang === 'id' ? 'text-white' : 'text-slate-500'}`}>
              ID
            </span>
            <span className={`relative z-10 w-1/2 text-center text-xs font-semibold transition-colors select-none ${currentLang === 'en' ? 'text-white' : 'text-slate-500'}`}>
              EN
            </span>
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`${menuOpen ? 'block' : 'hidden'} lg:hidden border-t border-slate-200 px-6 py-4`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-1 font-medium text-sm text-slate-600">
          <Link onClick={() => setMenuOpen(false)} href={`/?lang=${currentLang}`} className="py-2 hover:text-blue-700">{t.home}</Link>
          <Link onClick={() => setMenuOpen(false)} href={`/?lang=${currentLang}#services`} className="py-2 hover:text-blue-700">{t.services}</Link>
          <Link onClick={() => setMenuOpen(false)} href={`/?lang=${currentLang}#about`} className="py-2 hover:text-blue-700">{t.about}</Link>
          <Link onClick={() => setMenuOpen(false)} href={`/?lang=${currentLang}#experience`} className="py-2 hover:text-blue-700">{t.experience}</Link>
          <Link onClick={() => setMenuOpen(false)} href={`/blog?lang=${currentLang}`} className="py-2 hover:text-blue-700">{t.blog}</Link>
          <Link onClick={() => setMenuOpen(false)} href={`/?lang=${currentLang}#contact`} className="py-2 hover:text-blue-700">{t.contact}</Link>
          <button
            type="button"
            onClick={toggleLanguage}
            className="self-start mt-2 px-4 py-2 rounded-md bg-slate-100 border border-slate-200 text-slate-700 hover:border-slate-300"
            aria-label={t.switchLanguage}
          >
            {currentLang === 'id' ? 'ID | EN' : 'EN | ID'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={<nav className="h-[65px] bg-white border-b border-slate-200 sticky top-0 z-50"></nav>}>
      <NavbarContent />
    </Suspense>
  );
}