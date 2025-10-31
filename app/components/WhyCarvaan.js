"use client";

import { motion } from "framer-motion";
import { FiUsers, FiMap, FiStar, FiShield, FiSmile } from "react-icons/fi";

export default function WhyCarvaan() {
  const features = [
    {
      icon: <FiUsers className="text-pink-600 text-3xl" />,
      title: "Travel with Like-Minded People",
      desc: "Join a vibrant community where friendships are built on shared adventures and unforgettable memories.",
    },
    {
      icon: <FiMap className="text-yellow-500 text-3xl" />,
      title: "Curated Group Trips",
      desc: "Each itinerary is handpicked by travel experts for the perfect mix of comfort, thrill, and culture.",
    },
    {
      icon: <FiShield className="text-purple-700 text-3xl" />,
      title: "Safe & Verified Experiences",
      desc: "Your safety is our top priority — every captain, stay, and route is pre-verified by our team.",
    },
    {
      icon: <FiStar className="text-pink-600 text-3xl" />,
      title: "Top-Rated Captains",
      desc: "Led by experienced captains who know the destination inside-out and bring energy to the journey.",
    },
    {
      icon: <FiSmile className="text-yellow-500 text-3xl" />,
      title: "Fun, Affordable, Hassle-Free",
      desc: "Zero planning stress. We handle the logistics so you can focus on exploring and having fun.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fefefe] to-[#fff7fb]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4"
        >
          Why Choose Carvaan?
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From the mountains to the beaches — Carvaan takes you everywhere, together.  
          Here’s why thousands of travelers love us.
        </p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
