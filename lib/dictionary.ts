export type Language = 'id' | 'en';

export const dictionary = {
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      about: "Profil",
      experience: "Tahap Kerja",
      blog: "Blog",
      contact: "Kontak",
      logoText: "Konsultan SOP & Job Description",
      navigationLabel: "Navigasi utama",
      menu: "Buka navigasi",
      closeMenu: "Tutup navigasi",
      switchLanguage: "Ganti bahasa",
    },
    hero: {
      badge: "Jasa Pembuatan SOP & Job Description Perusahaan",
      titleMain: "Bisnis Tetap Jalan Mulus,",
      titleHighlight: "Bahkan Saat Anda Liburan.",
      desc: "Hentikan ketergantungan operasional pada figur tertentu. Kami bantu bangun SOP terstruktur, praktis, dan siap dieksekusi tim tanpa perlu Anda awasi 24/7.",
      cta: "Pelajari Layanan",
      widgetImageAlt: "Konsultan menunjuk diagram tahapan pengembangan SOP di papan tulis",
    },
    services: {
      title: "Layanan & Solusi SOP",
      desc: "Pendekatan komprehensif untuk merapikan dan memodernisasi sistem operasional bisnis Anda.",
      items: [
        {
          title: "Penyusunan SOP End-to-End",
          desc: "Pembuatan dokumen SOP lengkap, Flowchart alur kerja, dan Instruksi Kerja (IK) yang disesuaikan 100% dengan kondisi nyata perusahaan Anda.",
        },
        {
          title: "Audit Process & Bottleneck",
          desc: "Membedah alur operasional saat ini untuk mendeteksi potensi pemborosan biaya, kebocoran sistem, dan keterlambatan kerja karyawan.",
        },
        {
          title: "Pendampingan & Training Tim",
          desc: "Kami tidak hanya menyerahkan dokumen, tapi juga melatih dan mensimulasikan SOP langsung ke tim karyawan Anda hingga mahir.",
        },
      ],
    },
    about: {
      badge: "Tentang Konsultan",
      imageAlt: "Profil konsultan SOP",
      imageTitle: "Praktisi Lapangan",
      imageDesc: "Bukan Sekadar Teori Akademis",
      titlePart1: "Ditangani Langsung oleh",
      titlePart2: "Eks-Director HR Hotel Bintang 5.",
      desc: "SOP yang baik tidak lahir dari template internet, melainkan dari jam terbang di lapangan. Sistem Anda akan didesain oleh praktisi dengan rekam jejak panjang sebagai Director of Human Resources di Grand Hyatt Jakarta.",
      point1Title: "Standar Internasional",
      point1Desc: "Mengadaptasi kedisiplinan dan kerapian alur kerja hotel kasta tertinggi ke dalam skala bisnis Anda.",
      point2Title: "Fokus pada Eksekusi SDM",
      point2Desc: "Merancang SOP yang humanis, mudah dipahami karyawan, dan minim resistensi saat diterapkan.",
    },
    experience: {
      title: "4 Tahap Kerja Kami",
      desc: "Prosedur terstruktur untuk memastikan SOP yang dibuat benar-benar dapat dieksekusi di lapangan.",
      items: [
        { step: "01", role: "Observasi & Pemetaan", desc: "Menggali proses kerja aktual dari Manajemen hingga Staf Lapangan untuk memahami alur bisnis.", tags: ["Wawancara", "Pemetaan Proses"] },
        { step: "02", role: "Drafting & Flowchart", desc: "Penyusunan draf SOP, diagram alur kerja, dan penentuan Key Performance Indicators (KPI).", tags: ["Draf SOP", "Deskripsi Pekerjaan"] },
        { step: "03", role: "Simulasi & Validasi", desc: "Uji coba draf SOP bersama tim operasional untuk memastikan kepraktisan dan menyerap masukan.", tags: ["Uji Coba", "Persetujuan"] },
        { step: "04", role: "Handover & Training", desc: "Penyerahan cetak & digital dokumen SOP, dilanjutkan dengan sesi sosialisasi kepada karyawan.", tags: ["Dokumen Final", "Peluncuran"] },
      ],
    },
    blog: {
      title: "Edukasi & Insight Manajemen",
      desc: "Panduan praktis seputar pengelolaan operasional, manajemen SDM, dan efisiensi bisnis.",
      viewAll: "Lihat Semua Artikel",
      featured: "Artikel Utama",
      readFull: "Baca Artikel Lengkap →",
      readMore: "Baca Selengkapnya →",
      searchPlaceholder: "Cari artikel...",
      noResults: "Tidak ada artikel yang cocok dengan pencarian Anda.",
      category: "Artikel",
    },
    faq: {
      title: "Pertanyaan Seputar SOP",
      desc: "Jawaban atas pertanyaan yang paling sering diajukan oleh calon klien kami.",
    },
    contact: {
      title: "Siap Merapikan Sistem Operasional Bisnis Anda?",
      desc: "Mari diskusikan kendala operasional perusahaan Anda. Kami siap memberikan penawaran program konsultasi SOP terbaik.",
      emailBtn: "Konsultasi via Email",
      linkedin: "LinkedIn",
    },
    contactForm: {
      successTitle: "Pesan Terkirim!",
      successMessage: "Terima kasih telah menghubungi. Saya akan segera membalas email Anda.",
      sendAnother: "Kirim Pesan Lain",
      name: "Nama / Perusahaan",
      email: "Email Bisnis",
      message: "Pesan / Kebutuhan",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Masukkan alamat email Anda",
      messagePlaceholder: "Ceritakan detail proyek Anda...",
      submit: "Kirim Pesan",
      submitting: "Mengirim...",
      error: "Pesan belum dapat dikirim. Silakan coba lagi.",
      honeypotLabel: "Jangan isi kolom ini jika Anda manusia:",
    },
    articleAuthorRole: "Konsultan SOP & Sistem Operasional",
    backToTop: "Kembali ke atas",
    floatingWhatsApp: {
      label: "Chat melalui WhatsApp",
      message: "Halo tim Konsultan SOP, saya ingin berdiskusi tentang sistem operasional bisnis.",
    },
    notFound: {
      title: "Halaman Tidak Ditemukan",
      description: "Maaf, halaman yang Anda cari mungkin sudah dipindah, dihapus, atau memang tidak pernah ada.",
      home: "Kembali ke Beranda",
    },
    footer: "© 2026 Layanan Jasa Pembuatan SOP Perusahaan. Hak cipta dilindungi.",
    faqList: [
      {
        question: "Berapa lama proses pengerjaan SOP ini selesai?",
        answer: "Waktu pengerjaan bervariasi antara 3 hingga 6 minggu, bergantung pada skala bisnis, jumlah departemen, dan tingkat kerumitan alur kerja aktual di perusahaan Anda."
      },
      {
        question: "Apakah jasa ini cocok untuk UKM dengan karyawan sedikit?",
        answer: "Sangat cocok! Justru UKM sangat membutuhkan sistem operasional lebih awal agar pemilik (owner) bisa mulai lepas tangan (otopilot) dan mendelegasikan operasional kepada tim tanpa takut berantakan."
      },
      {
        question: "Apa bentuk hasil akhir (output) yang akan saya terima?",
        answer: "Anda akan mendapatkan Dokumen SOP Master (Cetak & Digital), Diagram Alur Kerja (Flowchart) visual, Form/Template Operasional, serta sesi pendampingan (training) implementasi kepada karyawan."
      },
      {
        question: "Bagaimana jika ada alur bisnis yang berubah di masa depan?",
        answer: "Kami sadar bisnis itu dinamis. Oleh karena itu, kami memberikan dokumen digital (softcopy) dalam format yang sangat mudah Anda sunting dan perbarui sendiri secara mandiri jika ada perubahan di masa depan."
      }
    ],
    blogPage: {
      title: "Insight & Artikel",
      desc: "Panduan praktis tentang penyusunan SOP, pemetaan proses, dan pengelolaan operasional bisnis."
    },
    blogDetail: {
      back: "Kembali ke daftar artikel",
      category: "Artikel",
      readTime: "menit baca",
      share: "Bagikan:",
      shareLinkedIn: "Bagikan ke LinkedIn",
      codeCopy: "Salin",
      codeCopied: "Tersalin!",
      codeCopyFailed: "Gagal menyalin",
      enlargeImage: "Perbesar gambar",
      closeImage: "Tutup gambar",
      imageAlt: "Ilustrasi artikel",
      enlargedImageAlt: "Ilustrasi diperbesar",
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "Profile",
      experience: "Process",
      blog: "Blog",
      contact: "Contact",
      logoText: "Corporate SOP Consultant",
      navigationLabel: "Main navigation",
      menu: "Open navigation",
      closeMenu: "Close navigation",
      switchLanguage: "Switch language",
    },
    hero: {
      badge: "Corporate SOP & Job Description Consulting",
      titleMain: "Keep Your Business Running Smoothly,",
      titleHighlight: "Even on Vacation.",
      desc: "Stop relying on specific individuals. We help build structured, practical SOPs ready to be executed by your team without 24/7 supervision.",
      cta: "Explore Services",
      widgetImageAlt: "Consultant pointing to an SOP development diagram on a whiteboard",
    },
    services: {
      title: "SOP Services & Solutions",
      desc: "A comprehensive approach to streamline and modernize your business operations.",
      items: [
        {
          title: "End-to-End SOP Creation",
          desc: "Complete SOP documents, workflows, and Work Instructions tailored 100% to your company's actual conditions.",
        },
        {
          title: "Process & Bottleneck Audit",
          desc: "Dissecting current operational flows to detect potential cost waste, system leaks, and employee delays.",
        },
        {
          title: "Team Training & Assistance",
          desc: "We don't just hand over documents; we also train and simulate the SOPs directly with your employees until they are proficient.",
        },
      ],
    },
    about: {
      badge: "About the Consultant",
      imageAlt: "SOP consultant profile",
      imageTitle: "Field Practitioner",
      imageDesc: "More Than Academic Theory",
      titlePart1: "Handled Directly by an",
      titlePart2: "Ex-HR Director of a 5-Star Hotel.",
      desc: "Good SOPs are not born from internet templates, but from field experience. Your system will be designed by a practitioner with a long track record as Director of Human Resources at Grand Hyatt Jakarta.",
      point1Title: "International Standards",
      point1Desc: "Adapting the discipline and neatness of top-tier hotel workflows into your business scale.",
      point2Title: "Focus on HR Execution",
      point2Desc: "Designing humane SOPs that are easily understood by employees and encounter minimal resistance upon implementation.",
    },
    experience: {
      title: "Our 4-Step Process",
      desc: "Structured procedures to ensure the created SOPs are highly actionable on the field.",
      items: [
        { step: "01", role: "Observation & Mapping", desc: "Uncovering actual work processes from Management to Field Staff to understand the business flow.", tags: ["Interview", "Process Mapping"] },
        { step: "02", role: "Drafting & Flowcharts", desc: "Drafting SOPs, workflow diagrams, and defining Key Performance Indicators (KPIs).", tags: ["SOP Draft", "Job Desc"] },
        { step: "03", role: "Simulation & Validation", desc: "Testing draft SOPs with the operational team to ensure practicality and absorb feedback.", tags: ["Trial", "Approval"] },
        { step: "04", role: "Handover & Training", desc: "Delivery of printed & digital SOP documents, followed by socialization sessions for employees.", tags: ["Final Master", "Go-Live"] },
      ],
    },
    blog: {
      title: "Management Insights & Education",
      desc: "Practical guides on operational management, HR, and business efficiency.",
      viewAll: "View All Articles",
      featured: "Featured Article",
      readFull: "Read Full Article →",
      readMore: "Read More →",
      searchPlaceholder: "Search articles...",
      noResults: "No articles match your search.",
      category: "Article",
    },
    faq: {
      title: "SOP Frequently Asked Questions",
      desc: "Answers to the most frequently asked questions by our prospective clients.",
    },
    contact: {
      title: "Ready to Streamline Your Business Operations?",
      desc: "Let's discuss your company's operational bottlenecks. We are ready to provide the best SOP consulting program offer.",
      emailBtn: "Consult via Email",
      linkedin: "LinkedIn",
    },
    contactForm: {
      successTitle: "Message Sent!",
      successMessage: "Thank you for reaching out. I will reply to your email soon.",
      sendAnother: "Send Another Message",
      name: "Name / Company",
      email: "Business Email",
      message: "Message / Requirements",
      namePlaceholder: "Your name",
      emailPlaceholder: "Enter your email address",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send Message",
      submitting: "Sending...",
      error: "Your message could not be sent. Please try again.",
      honeypotLabel: "Leave this field empty if you are human:",
    },
    articleAuthorRole: "SOP & Operations Consultant",
    backToTop: "Back to top",
    floatingWhatsApp: {
      label: "Chat on WhatsApp",
      message: "Hello, I would like to discuss my business operations system.",
    },
    notFound: {
      title: "Page Not Found",
      description: "Sorry, the page you are looking for may have moved, been deleted, or never existed.",
      home: "Return to Home",
    },
    footer: "© 2026 Corporate SOP Consulting Services. All rights reserved.",
    faqList: [
      {
        question: "How long does the SOP creation process take?",
        answer: "The timeframe varies between 3 to 6 weeks, depending on the business scale, the number of departments, and the complexity of your company's actual workflow."
      },
      {
        question: "Is this service suitable for SMEs with few employees?",
        answer: "Absolutely! SMEs actually need operational systems early on so owners can step back (autopilot) and delegate operations to the team without fear of chaos."
      },
      {
        question: "What is the final output I will receive?",
        answer: "You will receive a Master SOP Document (Print & Digital), visual Workflow Diagrams (Flowcharts), Operational Forms/Templates, and implementation training sessions for your employees."
      },
      {
        question: "What if there are business flow changes in the future?",
        answer: "We understand that business is dynamic. Therefore, we provide digital documents (softcopy) in formats that are very easy for you to edit and update independently if changes occur."
      }
    ],
    blogPage: {
      title: "Insights & Articles",
      desc: "Practical guides to SOP development, process mapping, and business operations management."
    },
    blogDetail: {
      back: "Back to article list",
      category: "Article",
      readTime: "min read",
      share: "Share:",
      shareLinkedIn: "Share on LinkedIn",
      codeCopy: "Copy",
      codeCopied: "Copied!",
      codeCopyFailed: "Copy failed",
      enlargeImage: "Enlarge image",
      closeImage: "Close enlarged image",
      imageAlt: "Article illustration",
      enlargedImageAlt: "Enlarged illustration",
    }
  }
};