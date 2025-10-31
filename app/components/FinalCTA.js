"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?mountains,travel,adventure')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Plan Your Next <span className="text-yellow-300">Adventure</span> with Carvaan ✈️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-100 mb-10"
        >
          Discover curated group trips, earn Carvaan Coins, and explore new destinations with like-minded travelers.  
          Your next unforgettable journey starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/trips"
            className="bg-yellow-400 text-purple-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            Explore Trips
          </Link>
          <Link
            href="/login"
            className="bg-white/20 border border-white/40 px-8 py-3 rounded-lg font-semibold text-white hover:bg-white/30 transition"
          >
            Join the Community
          </Link>
        </motion.div>
      </div>

      {/* Subtle floating shapes for motion */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-10 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-70"
      ></motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-10 right-10 w-12 h-12 bg-pink-300 rounded-full opacity-50"
      ></motion.div>
    </section>
  );
}
