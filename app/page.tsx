import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-20">
      
      {/* HERO SECTION */}
      <section className="pt-32 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Fitrah Ali Akbar Setiawan</h1>
        <h2 className="text-2xl text-gray-400 mb-8 font-medium">QA Tester & Automation Engineer</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Spesialis dalam memastikan kualitas perangkat lunak melalui pengujian manual dan otomatis. Berdedikasi untuk memberikan pengalaman pengguna yang mulus dan bebas *bug*.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="#contact" className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            Hubungi Saya
          </Link>
          <Link href="/blog" className="border border-gray-600 px-6 py-3 rounded-md font-semibold hover:border-gray-400 transition">
            Baca Artikel QA
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 max-w-4xl mx-auto w-full pt-20 mt-10 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Halo! Saya Fitrah, seorang QA Tester yang sangat peduli terhadap kualitas sebuah produk. 
          Saya memiliki pengalaman dalam menganalisis kebutuhan sistem, merancang skenario pengujian yang komprehensif, 
          dan mengotomatisasi proses *testing*. Tujuan utama saya adalah menjembatani antara kebutuhan bisnis 
          dan kualitas teknis.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-6 max-w-4xl mx-auto w-full pt-20">
        <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md font-medium text-gray-200">Manual Testing</span>
          <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md font-medium text-gray-200">API Testing</span>
          <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md font-medium text-blue-400">Postman</span>
          <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md font-medium text-green-400">Playwright</span>
          <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md font-medium text-gray-200">Test Case Creation</span>
          <span className="bg-gray-800/50 border border-gray-700 px-4 py-2 rounded-md font-medium text-gray-200">Bug Tracking</span>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="px-6 max-w-4xl mx-auto w-full pt-20">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="border-l-2 border-gray-700 pl-6 pb-2">
          <h3 className="text-xl font-semibold">QA Engineer</h3>
          <p className="text-gray-400 text-sm mb-4">Nama Perusahaan — (Tahun - Sekarang)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Melakukan pengujian fungsional, integrasi, dan regresi pada aplikasi.</li>
            <li>Membuat dan menjalankan *API testing* menggunakan Postman.</li>
            <li>Membangun *script automation End-to-End* (E2E) menggunakan Playwright.</li>
            <li>Berkolaborasi dengan *developer* untuk proses perbaikan *bug*.</li>
          </ul>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-6 max-w-4xl mx-auto w-full pt-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Tertarik untuk berdiskusi soal *software quality* atau peluang kerja sama? Jangan ragu buat ngobrol!
        </p>
        <div className="flex gap-6">
          <a href="mailto:email-lu-disini@gmail.com" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors">
            Email
          </a>
          <a href="https://github.com/akbarzzs" target="_blank" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/username-lu" target="_blank" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors">
            LinkedIn
          </a>
        </div>
      </section>

    </main>
  );
}