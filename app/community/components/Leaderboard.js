'use client';

import { motion } from "framer-motion";

export default function Leaderboards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-secondary mb-6"
        >
          Leaderboards
        </motion.h2>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-12">
          Discover the top explorers who inspire others through their incredible journeys and achievements.
        </p>

        {/* Leaderboard Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Aarav Mehta",
              score: "980 pts",
              img: "https://source.unsplash.com/400x400/?traveler,portrait",
            },
            {
              name: "Simran Kaur",
              score: "940 pts",
              img: "https://source.unsplash.com/400x400/?woman,traveler",
            },
            {
              name: "Ishaan Verma",
              score: "920 pts",
              img: "https://source.unsplash.com/400x400/?indian,adventure",
            },
            {
              name: "Riya Sharma",
              score: "900 pts",
              img: "https://source.unsplash.com/400x400/?hiking,portrait",
            },
          ].map((explorer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-50 border rounded-2xl p-6 hover:shadow-xl transition relative"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                <img
                  src={explorer.img}
                  alt={explorer.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-800">{explorer.name}</h3>
              <p className="text-orange-600 font-medium mt-1">{explorer.score}</p>

              {/* Optional Badge */}
              <span className="absolute top-4 right-4 bg-yellow-400 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                ⭐ Top Rated
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
