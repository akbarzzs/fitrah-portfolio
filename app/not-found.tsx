import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-white">
      <h1 className="text-9xl font-extrabold text-blue-50 mb-8 tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Maaf, halaman yang Anda cari mungkin sudah dipindah, dihapus, atau memang tidak pernah ada.
      </p>
      <Link href="/" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
        Kembali ke Beranda
      </Link>
    </div>
  );
}