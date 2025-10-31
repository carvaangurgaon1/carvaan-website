"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CommunityStories() {
  const stories = [
    {
      name: "Riya Sharma",
      location: "Kasol",
      img: "https://source.unsplash.com/400x400/?mountains,travel",
      quote:
        "Carvaan gave me the best solo trip experience — met amazing people who became lifelong friends!",
    },
    {
      name: "Aman Verma",
      location: "Manali",
      img: "https://source.unsplash.com/400x400/?hiking,group",
      quote:
        "The community vibe was unmatched. It felt like traveling with a big, happy family!",
    },
    {
      name: "Sneha Patel",
      location: "Leh Ladakh",
      img: "https://source.unsplash.com/400x400/?roadtrip,ladakh",
      quote:
        "Every moment was magical. The captain made the journey safe, fun, and full of memories!",
    },
    {
      name: "Karan Mehta",
      location: "Spiti Valley",
      img: "https://source.unsplash.com/400x400/?spiti,valley",
      quote:
        "The trip was so well organized — from stay to transport, everything was perfect!",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff7fb] to-[#fefefe]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4"
        >
          Carvaan Community & Stories
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real people. Real adventures. Real connections.  
          Here’s how our travelers experience Carvaan.
        </p>

        {/* Stories Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative w-full h-56">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-pink-600">
                  {s.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{s.location}</p>
                <p className="text-gray-700 text-sm italic leading-relaxed">
                  “{s.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <a
            href="/community"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Explore More Stories →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
