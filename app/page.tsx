import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Fitrah Ali Akbar Setiawan
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
          Software Quality Assurance & Automation
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Lulusan Teknik Informatika dari Universitas Logistik dan Bisnis Internasional (ULBI). Spesialis dalam memastikan kualitas perangkat lunak melalui pengujian manual dan otomatis secara menyeluruh.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#contact" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30">
            Hubungi Saya
          </Link>
          <Link href="/blog" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full border border-slate-200 hover:border-blue-600 transition-all shadow-sm">
            Baca Artikel QA
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-slate-900">About Me</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Halo! Saya Fitrah, seorang QA Tester yang sangat peduli terhadap kualitas sebuah produk. Saya memiliki pengalaman dalam menganalisis kebutuhan sistem, merancang skenario pengujian yang komprehensif, dan mengotomatisasi proses <span className="italic">testing</span>. Tujuan utama saya adalah menjembatani antara kebutuhan bisnis dan kualitas teknis.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-8 text-slate-900 text-center">Skills & Tools</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Playwright', 'Postman', 'Jira Software', 'Trello', 'GitLab', 'UAT', 'Manual Testing', 'API Testing'].map((skill) => (
            <span key={skill} className="px-5 py-2 bg-blue-50 text-blue-700 font-semibold rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-slate-900 text-center">Pengalaman Profesional</h3>
          
          <div className="space-y-12">
            {/* NBS */}
            <div className="relative border-l-2 border-blue-200 pl-6 ml-3">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 border-4 border-white"></div>
              <h4 className="text-2xl font-bold text-slate-900">Software Quality Assurance</h4>
              <p className="text-blue-600 font-medium mb-2">Nusantara Beta Studio (NBS)</p>
              <ul className="list-disc list-outside ml-5 text-slate-600 space-y-1">
                <li>Bertanggung jawab penuh atas kualitas fungsional aplikasi.</li>
              </ul>
            </div>

            {/* Kartala Digital */}
            <div className="relative border-l-2 border-blue-200 pl-6 ml-3">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 border-4 border-white"></div>
              <h4 className="text-2xl font-bold text-slate-900">Quality Assurance Tester</h4>
              <p className="text-blue-600 font-medium mb-2">PT Kartala Digital Indonesia</p>
              <ul className="list-disc list-outside ml-5 text-slate-600 space-y-1">
                <li>Melakukan eksekusi skenario pengujian komprehensif pada ekosistem perangkat lunak perusahaan.</li>
              </ul>
            </div>

            {/* Assemblr */}
            <div className="relative border-l-2 border-blue-200 pl-6 ml-3">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 border-4 border-white"></div>
              <h4 className="text-2xl font-bold text-slate-900">QA Internship Program</h4>
              <p className="text-blue-600 font-medium mb-2">PT Assemblr Teknologi Indonesia</p>
              <ul className="list-disc list-outside ml-5 text-slate-600 space-y-1">
                <li>Mempelajari dan menerapkan siklus hidup pengujian (*Software Testing Life Cycle*).</li>
              </ul>
            </div>

            {/* BWI */}
            <div className="relative border-l-2 border-blue-200 pl-6 ml-3">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 border-4 border-white"></div>
              <h4 className="text-2xl font-bold text-slate-900">User Acceptance Testing (UAT)</h4>
              <p className="text-blue-600 font-medium mb-2">BWI E-Service</p>
              <ul className="list-disc list-outside ml-5 text-slate-600 space-y-1">
                <li>Melakukan validasi kebutuhan pengguna akhir sebelum sistem didistribusikan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}