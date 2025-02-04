"use client";

import Link from "next/link";
import { Home, Calendar, Newspaper, User, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({
  isSidebarOpen,
  closeSidebar,
}: {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}) {
  return (
    <>
      {/* Overlay untuk menutup sidebar ketika diklik di luar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-700 to-blue-800 shadow-2xl z-50"
      >
        <div className="p-6 text-white text-lg font-bold border-b border-blue-600">
          Menu Trans Madiun
        </div>
        <ul className="space-y-2 p-6">
          {[
            { href: "/", icon: <Home size={20} />, text: "Home" },
            { href: "/jadwal", icon: <Calendar size={20} />, text: "Jadwal" },
            { href: "/berita", icon: <Newspaper size={20} />, text: "Berita" },
            { href: "/profil", icon: <User size={20} />, text: "Profil" },
            {
              href: "/cara-pemesanan",
              icon: <ShoppingCart size={20} />,
              text: "Cara Pemesanan",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="flex items-center space-x-3 p-3 text-white hover:bg-blue-600 rounded-lg transition duration-300"
              >
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Footer Sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-sm text-blue-200 border-t border-blue-600">
          © Dev EggarDev
        </div>
      </motion.aside>
    </>
  );
}