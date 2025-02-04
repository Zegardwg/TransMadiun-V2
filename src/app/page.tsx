"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Bot from "./components/Bot";
import Footer from "./components/Footer";
import Timeline from "./cara-pemesanan/page";
import { motion , useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Menunda animasi setiap anak
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


  
  return (
    <div>
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
      
      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section  */}
        <section
      className="h-screen flex flex-col justify-center items-center text-center bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: "url('/img/bg/bg.png')" }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-75 absolute inset-0"></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        {/* Logo dengan Animasi Naik-Turun */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            
          }}
          className="mb-8"
        >
          <img
            src="/img/icon/logokab.png"
            alt="Logo Kabupaten Madiun"
            className="w-32 h-50 md:w-48 md:h-48"
          />
        </motion.div>

        {/* Judul */}
        <h2 className="text-4xl font-bold text-white transition-all duration-300 hover:scale-105">
          Selamat Datang di Web Trans Madiun
        </h2>

        {/* Deskripsi */}
        <p className="text-white mt-2 animate-pulse">
          Transportasi Nyaman dan Terpercaya
        </p>

        {/* Tombol */}
        <div className="mt-4">
          <Link
            href="#layanan"
            className="bg-white text-blue-600 px-6 py-2 rounded-md hover:scale-105 transform transition-transform duration-300"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>
      </section>

        {/* Layanan */}
        <Timeline />


        {/* Tentang Kami Section */}
        <section id="tentang" className="py-16 text-center bg-gray-200">
          <h3 className="text-3xl font-bold mb-6">Tentang Kami</h3>
          <p className="max-w-3xl mx-auto text-gray-700">
            Kami menyediakan layanan transportasi terbaik dengan armada terbaru dan pengemudi profesional.
          </p>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Hubungi Kami</h3>
          <form className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-md">
            <input type="text" placeholder="Nama" className="w-full p-2 border mb-3" />
            <input type="email" placeholder="Email" className="w-full p-2 border mb-3" />
            <textarea placeholder="Pesan" className="w-full p-2 border mb-3"></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Kirim</button>
          </form>
        </section>
      </div>

      <Bot />
      <Footer />
    </div>
  );
}

