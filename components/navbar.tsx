import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
          Fitrah Ali Akbar
        </Link>
        <div className="hidden md:flex gap-6 font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
          <Link href="/#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
        </div>
      </div>
    </nav>
  );
}