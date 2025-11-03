'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Stories() {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-yellow-400 text-white py-24 overflow-hidden">
      {/* Background overlay image (optional) */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?friends,travel,group')",
        }}
      ></div>

      {/* Overlay gradient for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Join the Carvaan Community 🌍
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-white/90 mb-8"
        >
          Be part of India’s most adventurous travel tribe — meet new people, share stories,
          and explore the world together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/signup"
            className="bg-yellow-400 text-purple-800 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Join Now
          </Link>
        </motion.div>

        {/* Optional social media links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6 mt-10 text-2xl"
        >
          <Link href="#" className="hover:text-yellow-300 transition">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className="hover:text-yellow-300 transition">
            <i className="fab fa-youtube"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
