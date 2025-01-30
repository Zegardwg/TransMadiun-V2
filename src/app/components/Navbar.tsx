"use client"; // Tambahkan ini untuk menandai komponen sebagai Client Component
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Home, Calendar, Newspaper, User, ShoppingCart, Moon, Sun, LogIn, Bus, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const texts = ["Loading", "Loading.", "Loading..", "Loading..."];
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 500);

    setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setShowNavbar(true);
      } else {
        setIsScrolled(false);
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-xl font-bold z-50">
          <div className="animate-bounce">
            <Bus size={48} />
          </div>
          <p className="mt-4 animate-pulse">
            {loadingText} By Eggar Developer...
          </p>
        </div>
      )}
      
      {/* Overlay untuk menutup sidebar ketika diklik di luar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 rounded-full mx-auto max-w-screen-lg ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${isScrolled ? "bg-blue-600/90 backdrop-blur-sm" : "bg-blue-600"} text-white shadow-lg font-sans`}
      >
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">Trans Madiun Bus</Link>
          </div>
          <div className="flex items-center space-x-6">
            <button
              className="text-white focus:outline-none z-50"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <Link
              href="/cara-pemesanan"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Cara Pemesanan
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition duration-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-300"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

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

      {/* Tombol WhatsApp Chatbot */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20Trans%20Madiun"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center space-x-2"
      >
        <MessageCircle size={24} />
        <span>Chat WhatsApp</span>
      </a>
    </>
  );
}
