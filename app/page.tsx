import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ContactForm from '../components/contactform';
import FadeUp from '../components/fadeup';
import FeaturedBlogGrid from '../components/featuredbloggrid';
import TechMarquee from '../components/techmarquee';

export default async function Home() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.existsSync(blogDir) ? fs.readdirSync(blogDir) : [];

  const recentPosts = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
      const { data: frontmatter } = matter(fileContent);
      return {
        slug: filename.replace('.md', ''),
        frontmatter,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    .slice(0, 4);

  return (
    <div className="text-slate-900 bg-white overflow-hidden">
      
      {/* 1. HERO SECTION (Split Layout + Grid Pattern) */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-6 min-h-[90vh] flex items-center">
        {/* Background Grid Pattern Tipis */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Kiri: Teks */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <FadeUp>
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm tracking-wide bg-blue-50 shadow-sm">
                Menerima Kesempatan Proyek & Kolaborasi
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Kualitas Software Anda, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Prioritas Utama.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">
                Membantu perusahaan memastikan aplikasi bebas <span className="italic font-medium">bug</span>, aman, dan berkinerja tinggi melalui otomatisasi pengujian terstandarisasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#contact" className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Mulai Konsultasi
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <Link href="#services" className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center">
                  Pelajari Layanan
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Kanan: Visual Mockup (Ilusi UI) */}
          <div className="md:col-span-5 hidden md:block relative perspective-1000">
            <FadeUp delay={200}>
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-800 rounded w-full"></div>
                  <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-800 rounded w-full"></div>
                  <div className="flex gap-4 pt-4 mt-4 border-t border-slate-800">
                    <div className="h-8 bg-blue-600 rounded w-1/3"></div>
                    <div className="h-8 bg-slate-700 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* Infinite Tech Stack Marquee */}
      <TechMarquee />

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp delay={100}>
            <div className="mb-16 md:flex md:justify-between md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Layanan & Solusi</h2>
                <p className="text-slate-500 text-lg">Pendekatan komprehensif untuk memastikan produk digital Anda siap bersaing di pasar.</p>
              </div>
            </div>
          </FadeUp>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "End-to-End Automation", desc: "Membangun skrip otomatisasi dengan Playwright untuk mempercepat siklus rilis dan mengurangi beban pengujian manual berulang." },
              { title: "API & Integration Testing", desc: "Validasi performa, respons, dan keamanan integrasi data antar layanan menggunakan Postman sebelum ke antarmuka pengguna." },
              { title: "QA Audit & UAT", desc: "Audit sistem secara manual untuk skenario khusus dan memastikan aplikasi memenuhi kriteria bisnis pengguna akhir." }
            ].map((service, idx) => (
              <FadeUp key={idx} delay={idx * 150}>
                <div className="bg-white h-full p-10 rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-50 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 rounded-lg flex items-center justify-center mb-8 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <FadeUp>
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Jejak Rekam</h2>
                  <p className="text-slate-500 text-lg">Pengalaman profesional dalam menjaga standar kualitas industri perangkat lunak.</p>
                </div>
              </FadeUp>
            </div>
            
            <div className="md:col-span-8 md:pl-12 border-l border-slate-100 space-y-16">
              {[
                { company: "Nusantara Beta Studio (NBS)", role: "Software Quality Assurance", desc: "Bertanggung jawab atas kualitas fungsional aplikasi. Menyusun skenario pengujian komprehensif dan melaporkan defek secara terstruktur untuk perbaikan cepat.", tags: ["Manual Testing", "Bug Tracking", "Jira"] },
                { company: "PT Kartala Digital Indonesia", role: "Quality Assurance Tester", desc: "Melakukan eksekusi skenario pengujian secara berkala pada ekosistem perangkat lunak perusahaan untuk memastikan stabilitas rilis fitur baru.", tags: ["System Testing", "Trello", "Integration"] },
                { company: "PT Assemblr Teknologi Indonesia", role: "QA Internship Program", desc: "Mempelajari dan menerapkan Software Testing Life Cycle (STLC) secara langsung pada produk teknologi augmented reality (AR) berskala global.", tags: ["STLC", "Test Case", "GitLab"] },
                { company: "BWI E-Service", role: "User Acceptance Testing (UAT)", desc: "Memvalidasi kebutuhan pengguna akhir dan memastikan seluruh alur bisnis berjalan sesuai harapan sebelum distribusi massal.", tags: ["UAT", "Client Validation"] }
              ].map((exp, idx) => (
                <FadeUp key={idx} delay={idx * 150}>
                  <div className="relative group hover:-translate-y-1 transition-transform duration-300">
                    <div className="hidden md:block absolute w-3 h-3 bg-white border-2 border-slate-300 rounded-full -left-[54px] top-2 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-150"></div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-blue-600 font-medium mb-4">{exp.company}</p>
                    <p className="text-slate-500 leading-relaxed mb-6 max-w-2xl">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">{tag}</span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. LATEST BLOG SECTION */}
      <section id="latest-blog" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Insight & Pemikiran</h2>
                <p className="text-slate-500 text-lg">Catatan, tutorial, dan opini seputar dunia pengembangan & pengujian perangkat lunak.</p>
              </div>
              <Link href="/blog" className="hidden md:inline-flex text-slate-900 font-medium hover:text-blue-600 transition-colors items-center gap-2 group">
                Lihat Semua Artikel 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </FadeUp>

          <FeaturedBlogGrid posts={recentPosts} />
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">Siap Meningkatkan Kualitas Aplikasi Anda?</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                  Berbasis di Tangerang, siap berkolaborasi secara remote maupun on-site. Mari diskusikan detail proyek dan kebutuhan spesifik QA Anda.
                </p>
                <div className="flex gap-4">
                  <a href="mailto:email@anda.com" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="font-medium">Tanya via Email</span>
                  </a>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Fitrah Ali Akbar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/akbarzzs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}