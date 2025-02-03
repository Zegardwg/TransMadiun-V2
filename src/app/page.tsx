"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Bot from "./components/Bot";
import Footer from "./components/Footer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
      
      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/img/bg/bg.png')" }} // Perbaiki path
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white">
          Selamat Datang di Web Trans Madiun
        </h2>
        <p className="text-white mt-2">Transportasi Nyaman dan Terpercaya</p>
        <div className="mt-4">
          <Link
            href="#layanan"
            className="bg-white text-blue-600 px-6 py-2 rounded-md"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>
      </section>

        {/* Layanan Section */}
        <section id="layanan" className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Layanan Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Antar-Jemput Bandara", icon: "✈️", desc: "Layanan eksklusif antar-jemput bandara." },
              { title: "Sewa Mobil", icon: "🚗", desc: "Sewa mobil dengan berbagai pilihan kendaraan." },
              { title: "Tour Wisata", icon: "🏞️", desc: "Paket wisata terbaik dengan harga terjangkau." },
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-md hover:shadow-xl transition">
                <span className="text-4xl">{service.icon}</span>
                <h4 className="text-xl font-bold mt-4">{service.title}</h4>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

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
