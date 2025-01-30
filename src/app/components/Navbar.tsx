// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">Trans Madiun Bus</Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/jadwal" className="hover:text-blue-200 transition duration-300">
                Jadwal
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:text-blue-200 transition duration-300">
                Berita
              </Link>
            </li>
            <li>
              <Link href="/profil" className="hover:text-blue-200 transition duration-300">
                Profil
              </Link>
            </li>
            <li>
              <Link href="/cara-pemesanan" className="hover:text-blue-200 transition duration-300">
                Cara Pemesanan
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}