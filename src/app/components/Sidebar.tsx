"use client";

import Link from "next/link";
import { Home, Calendar, Newspaper, User, ShoppingCart } from "lucide-react";

export default function Sidebar({ isSidebarOpen, closeSidebar }: { isSidebarOpen: boolean; closeSidebar: () => void }) {
  return (
    <>
      {/* Overlay untuk menutup sidebar ketika diklik di luar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-blue-700 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg font-sans z-50`}
      >
        <div className="p-6 text-white text-lg font-bold">Menu</div>
        <ul className="space-y-4 px-6 text-white">
          <li>
            <Link href="/" className="flex items-center space-x-2 py-2 hover:text-blue-200 transition duration-300">
              <Home size={18} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/jadwal" className="flex items-center space-x-2 py-2 hover:text-blue-200 transition duration-300">
              <Calendar size={18} /> <span>Jadwal</span>
            </Link>
          </li>
          <li>
            <Link href="/berita" className="flex items-center space-x-2 py-2 hover:text-blue-200 transition duration-300">
              <Newspaper size={18} /> <span>Berita</span>
            </Link>
          </li>
          <li>
            <Link href="/profil" className="flex items-center space-x-2 py-2 hover:text-blue-200 transition duration-300">
              <User size={18} /> <span>Profil</span>
            </Link>
          </li>
          <li>
            <Link href="/cara-pemesanan" className="flex items-center space-x-2 py-2 hover:text-blue-200 transition duration-300">
              <ShoppingCart size={18} /> <span>Cara Pemesanan</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
