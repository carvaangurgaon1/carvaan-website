"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CaptainsAgents() {
  const profiles = [
    {
      name: "Aarav Sharma",
      role: "Trip Captain",
      image: "https://source.unsplash.com/300x300/?man,travel",
      trips: "18 Trips Led",
      rating: "⭐ 4.9",
    },
    {
      name: "Riya Mehta",
      role: "Travel Agent",
      image: "https://source.unsplash.com/300x300/?woman,travel,smile",
      trips: "25 Packages",
      rating: "⭐ 4.8",
    },
    {
      name: "Kabir Verma",
      role: "Trip Captain",
      image: "https://source.unsplash.com/300x300/?hiker,portrait",
      trips: "14 Trips Led",
      rating: "⭐ 4.7",
    },
    {
      name: "Priya Kapoor",
      role: "Travel Agent",
      image: "https://source.unsplash.com/300x300/?woman,agency,travel",
      trips: "32 Packages",
      rating: "⭐ 4.9",
    },
  ];

  return (
    <section className="py-20 bg-white text-center relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4"
        >
          Meet Our Captains & Agents 👥
        </motion.h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Our trusted trip captains and verified travel agents ensure every
          journey with Carvaan is safe, exciting, and unforgettable.
        </p>

        {/* Profile Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {profiles.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 border"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {person.name}
              </h3>
              <p className="text-pink-600 text-sm font-medium mb-2">
                {person.role}
              </p>
              <p className="text-gray-500 text-sm">{person.trips}</p>
              <p className="text-yellow-500 text-sm">{person.rating}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            href="/community"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            View All Captains & Agents →
          </Link>
        </div>
      </div>
    </section>
  );
}
