"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import Loading from "./Loading"; // Import komponen Loading

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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

  // Tampilkan loading jika masih dalam proses
  if (isLoading) {
    return <Loading />;
  }

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg px-4 md:px-6 lg:px-8 z-50 transition-all duration-300 rounded-full ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "bg-blue-600/90 backdrop-blur-sm" : "bg-blue-600"} text-white shadow-lg font-sans`}
    >
      <nav className="container mx-auto py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/">Trans Madiun Bus</Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="text-white focus:outline-none z-50" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <Link
            href="/cara-pemesanan"
            className="bg-white text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition duration-300 text-sm md:text-base"
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
            className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-400 transition duration-300 text-sm md:text-base"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
