"use client";

import { motion } from "framer-motion";
import { FiGift, FiTrendingUp, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

export default function CarvaanCoins() {
  const benefits = [
    {
      icon: <FiGift className="text-yellow-500 text-3xl" />,
      title: "Earn on Every Trip",
      description:
        "Get coins for every booking you make with Carvaan. The more you travel, the more you earn!",
    },
    {
      icon: <FiTrendingUp className="text-pink-500 text-3xl" />,
      title: "Boost Your Rewards",
      description:
        "Invite friends, leave reviews, and participate in community events to earn bonus coins.",
    },
    {
      icon: <FiShoppingCart className="text-purple-600 text-3xl" />,
      title: "Redeem & Save",
      description:
        "Use your Carvaan Coins for discounts on future trips, exclusive merchandise, and partner offers.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 text-center relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply opacity-30 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4"
        >
          Carvaan Coins 💰
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Travel more, earn more! Join our reward system that lets you collect coins
          and unlock exclusive benefits with every adventure.
        </p>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            href="/coins"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            Explore Carvaan Coins →
          </Link>
        </div>
      </div>
    </section>
  );
}
