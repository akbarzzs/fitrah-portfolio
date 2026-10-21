'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Scroll spy cuma aktif di landing page
    if (pathname !== "/") return; 
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Deteksi elemen pas di tengah layar
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight hover:text-blue-600 transition-colors">
          Fitrah Ali Akbar
        </Link>
        <div className="hidden md:flex gap-8 font-medium text-sm text-slate-500">
          <Link href="/" className={`${pathname === '/' && activeSection === '' ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors`}>Home</Link>
          <Link href="/#services" className={`${activeSection === 'services' ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors`}>Layanan</Link>
          <Link href="/#experience" className={`${activeSection === 'experience' ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors`}>Experience</Link>
          <Link href="/blog" className={`${pathname.includes('/blog') ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors`}>Blog</Link>
          <Link href="/#contact" className={`${activeSection === 'contact' ? 'text-blue-600' : 'hover:text-blue-600'} transition-colors`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}