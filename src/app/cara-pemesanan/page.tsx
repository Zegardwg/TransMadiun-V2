"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import ikon dari FontAwesome

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const beamScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0]);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // State untuk menyimpan indeks card yang diperluas

  const timelineData = [
    {
      title: "Barcode",
      description:
        "Layanan pemindaian barcode untuk akses cepat dan mudah ke bus sekolah gratis Trans Madiun",
      icon: "/img/icon/ic2.png",
      link: "/layanan-1",
      details:
        "Setiap siswa yang menggunakan layanan bus sekolah gratis akan mendapatkan barcode unik yang dapat dipindai di dalam bus. Barcode ini digunakan untuk mencatat data perjalanan, memastikan efisiensi layanan, dan meningkatkan keamanan siswa. Dengan sistem ini, orang tua dan pihak sekolah dapat memantau penggunaan bus secara real-time.",
    },
    {
      title: "Jadwal",
      description:
        "Informasi lengkap mengenai jadwal keberangkatan dan kedatangan bus sekolah gratis di setiap rute yang tersedia.",
      icon: "/img/icon/ic2.png",
      link: "/layanan-2",
      details:
        "Jadwal bus disusun agar sesuai dengan kebutuhan siswa dalam perjalanan ke dan dari sekolah. Pengguna dapat melihat waktu keberangkatan, rute yang dilewati, serta estimasi waktu tiba di setiap halte. Informasi ini diperbarui secara berkala untuk memastikan ketepatan waktu dan kenyamanan perjalanan.",
    },
    {
      title: "Lokasi Bus",
      description:
        "Layanan pemantauan lokasi bus secara real-time untuk memastikan kemudahan akses bagi pengguna.",
      icon: "/img/icon/ic3.png",
      link: "/layanan-3",
      details:
        "Dengan fitur pelacakan lokasi, pengguna dapat melihat posisi bus secara langsung melalui web. Sistem ini memanfaatkan GPS untuk memberikan informasi akurat mengenai lokasi bus, memungkinkan siswa dan orang tua untuk mengetahui posisi terkini serta estimasi waktu kedatangan bus di halte terdekat. Fitur ini membantu mengurangi waktu tunggu dan meningkatkan kenyamanan dalam menggunakan layanan bus sekolah gratis.",
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Tutup card jika sudah diperluas
    } else {
      setExpandedIndex(index); // Perluas card yang diklik
    }
  };

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <motion.div
        className="sticky top-0 z-20 bg-white shadow-md py-4"
        style={{ opacity: headerOpacity }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 font-poppins">
            Timeline Layanan Kami
          </h2>
        </div>
      </motion.div>

      {/* Timeline Content */}
      <div ref={ref} className="container mx-auto px-4 mt-12 relative">
        {/* Scroll Beam */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-md"
          style={{ height: "100%", scaleY: beamScale, originY: 0 }}
        />

        {/* Titik Atas */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
        />

        {/* Titik Bawah */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"
          style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]) }}
        />

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <div
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}>
                <div className="w-full md:w-1/2 text-center">
                  <Image
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-inter">{item.description}</p>
                  <a
                    href={item.link}
                    className="mt-4 inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-poppins hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    Lebih Lanjut <FaArrowRight className="ml-2" />
                  </a>
                </div>
                <div className="w-full md:w-1/2">
                  <div
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl"
                    onClick={() => toggleExpand(index)}>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-500 text-sm font-inter">
                        Detail tambahan terkait layanan ini untuk memperjelas
                        informasi.
                      </p>
                      <span className="text-blue-500">
                        {expandedIndex === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </div>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-600 font-inter">
                        {item.details}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
