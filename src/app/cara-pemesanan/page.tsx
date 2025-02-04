'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa'; // Import ikon dari FontAwesome

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const beamScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0]);

  const timelineData = [
    {
      title: 'Layanan 1',
      description: 'Deskripsi singkat tentang layanan pertama yang ditawarkan.',
      icon: '/img/icon/ic4.png',
      link: '/layanan-1',
    },
    {
      title: 'Layanan 2',
      description: 'Deskripsi singkat tentang layanan kedua yang ditawarkan.',
      icon: '/img/icon/ic2.png',
      link: '/layanan-2',
    },
    {
      title: 'Layanan 3',
      description: 'Deskripsi singkat tentang layanan ketiga yang ditawarkan.',
      icon: '/img/icon/ic3.png',
      link: '/layanan-3',
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Sticky Header */}
      <motion.div
        className="sticky top-0 z-20 bg-white shadow-md py-4"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 font-poppins">Timeline Layanan Kami</h2>
        </div>
      </motion.div>

      {/* Timeline Content */}
      <div ref={ref} className="container mx-auto px-4 mt-12 relative">
        {/* Scroll Beam */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-md"
          style={{ height: '100%', scaleY: beamScale, originY: 0 }}
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
              viewport={{ once: true }}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 text-center">
                  <Image
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 font-poppins">{item.title}</h3>
                  <p className="text-gray-600 font-inter">{item.description}</p>
                  <a
                    href={item.link}
                    className="mt-4 inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-poppins hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Lebih Lanjut <FaArrowRight className="ml-2" />
                  </a>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <p className="text-gray-500 text-sm font-inter">Detail tambahan terkait layanan ini untuk memperjelas informasi.</p>
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