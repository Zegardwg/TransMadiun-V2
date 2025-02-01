import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Logo & Description */}
          <div>
            <h2 className="text-xl font-bold">Trans Madiun Bus</h2>
            <p className="mt-2 text-white">
              Transportasi umum nyaman dan terjangkau di Madiun.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link href="/jadwal" className="hover:text-gray-200">Jadwal</Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-gray-200">Berita</Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-gray-200">Profil</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <div className="mt-2 space-y-2">
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone size={18} /> <span>+62 812-3456-7890</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail size={18} /> <span>contact@transmadiun.com</span>
              </p>
            </div>
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-gray-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-white text-sm">
        © 2024 Trans Madiun. By EggarDev.
      </div>
    </footer>
  );
}