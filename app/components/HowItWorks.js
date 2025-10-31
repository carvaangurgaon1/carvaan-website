"use client";

import { motion } from "framer-motion";
import { FiSearch, FiUsers, FiSmile } from "react-icons/fi";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <FiSearch className="text-4xl text-pink-500" />,
      title: "Discover",
      desc: "Explore verified trips from trusted travel partners across India and beyond.",
    },
    {
      id: 2,
      icon: <FiUsers className="text-4xl text-purple-500" />,
      title: "Connect",
      desc: "Join like-minded travelers and form your travel group in just a few clicks.",
    },
    {
      id: 3,
      icon: <FiSmile className="text-4xl text-yellow-500" />,
      title: "Travel",
      desc: "Pack your bags and experience memorable group adventures with ease.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fefefe] via-[#f9f5ff] to-[#fff5f7] text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4"
        >
          How It Works
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We make travel planning simple, social, and stress-free.  
          Here’s how you can get started with Carvaan.
        </p>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="flex flex-col items-center space-y-4">
                {step.icon}
                <h3 className="text-xl font-semibold text-purple-700">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
