"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, Facebook, Twitter } from "lucide-react";

const socialMediaLinks = [
  {
    id: 1,
    type: "instagram",
    icon: <Instagram className="w-8 h-8 text-white" />,
    url: "https://www.instagram.com/pemerintahankota",
    color: "bg-gradient-to-r from-pink-500 to-purple-600",
  },
  {
    id: 2,
    type: "email",
    icon: <Mail className="w-8 h-8 text-white" />,
    url: "mailto:info@pemerintahankota.go.id",
    color: "bg-gradient-to-r from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    type: "facebook",
    icon: <Facebook className="w-8 h-8 text-white" />,
    url: "https://www.facebook.com/pemerintahankota",
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
  },
  {
    id: 4,
    type: "twitter",
    icon: <Twitter className="w-8 h-8 text-white" />,
    url: "https://twitter.com/pemerintahankota",
    color: "bg-gradient-to-r from-sky-500 to-blue-600",
  },
];

export default function SocialMediaRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % socialMediaLinks.length);
    }, 5000); // Ganti ikon setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  const currentLink = socialMediaLinks[currentIndex];

  return (
    <div className="fixed bottom-6 left-6">
      <AnimatePresence mode="wait">
        <motion.a
          key={currentLink.id}
          href={currentLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${currentLink.color} p-4 rounded-lg shadow-lg flex items-center space-x-2`}
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {currentLink.icon}
          <span className="text-white font-semibold">
            {currentLink.type.charAt(0).toUpperCase() +
              currentLink.type.slice(1)}
          </span>
        </motion.a>
      </AnimatePresence>
    </div>
  );
}