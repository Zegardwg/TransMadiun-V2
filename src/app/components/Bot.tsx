"use client";

import { MessageCircle } from "lucide-react";

export default function Bot() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20Trans%20Madiun"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center space-x-2"
    >
      <MessageCircle size={24} />
      <span>Chat WhatsApp</span>
    </a>
  );
}
