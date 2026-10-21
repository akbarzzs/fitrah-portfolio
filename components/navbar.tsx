import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-800">
      <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-gray-300 transition-colors">
        Fitrah Ali Akbar
      </Link>
      
      {/* Menu navigasi baru */}
      <div className="flex gap-6 text-sm font-medium text-gray-300">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/#about" className="hover:text-white transition-colors">About</Link>
        <Link href="/#skills" className="hover:text-white transition-colors">Skills</Link>
        <Link href="/#experience" className="hover:text-white transition-colors">Experience</Link>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
}