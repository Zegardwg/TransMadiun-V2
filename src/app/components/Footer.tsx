import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Trans Madiun Bus
            </h2>
            <p className="text-gray-300">
              Transportasi umum nyaman dan terjangkau di Madiun.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-200">Navigasi</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", link: "/" },
                { name: "Jadwal", link: "/jadwal" },
                { name: "Berita", link: "/berita" },
                { name: "Profil", link: "/profil" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-blue-200">Hubungi Kami</h3>

            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm shadow-md">
              <div className="flex justify-between items-center mb-4">
                <Phone size={24} className="text-blue-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex justify-between items-center">
                <Mail size={24} className="text-blue-400" />
                <span>contact@transmadiun.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-4">
              {[
                { id: "facebook", url: "#", icon: <Facebook size={24} /> },
                { id: "instagram", url: "#", icon: <Instagram size={24} /> },
                { id: "twitter", url: "#", icon: <Twitter size={24} /> }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Trans Madiun. By EggarDev.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
