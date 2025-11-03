"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiDollarSign } from "react-icons/fi";

export default function FeaturedTrips() {
  // Placeholder data (replace image URLs later)
  const trips = [
    {
      id: 1,
      image: "/images/leh-ladakh.jpg", // ⬅️ replace with actual trip image later
      title: "Leh Ladakh Adventure",
      location: "Ladakh, India",
      duration: "7 Days",
      price: "₹25,000",
    },
    {
      id: 2,
      image: "/images/goa-getaway.jpg",
      title: "Goa Getaway",
      location: "Goa, India",
      duration: "4 Days",
      price: "₹12,000",
    },
    {
      id: 3,
      image: "/images/kasol-trek.jpg",
      title: "Kasol & Kheerganga Trek",
      location: "Himachal Pradesh, India",
      duration: "5 Days",
      price: "₹18,500",
    },
    {
      id: 4,
      image: "/images/kerala.jpg",
      title: "Backwaters of Kerala",
      location: "Kerala, India",
      duration: "6 Days",
      price: "₹22,000",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff5f7] to-[#fefefe]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-purple-800 mb-4"
        >
          Featured Trips & Deals
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Handpicked group adventures and exclusive deals for your next escape.  
          Choose your vibe, pack your bags, and go!
        </p>

        {/* Trip Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Trip Info */}
              <div className="p-5 text-left space-y-2">
                <h3 className="text-lg font-semibold text-purple-800">{trip.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <FiMapPin className="mr-1 text-pink-500" /> {trip.location}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="flex items-center">
                    <FiClock className="mr-1 text-yellow-500" /> {trip.duration}
                  </span>
                  <span className="flex items-center font-semibold text-pink-600">
                    <FiDollarSign className="mr-1" /> {trip.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
            Explore All Trips
          </button>
        </motion.div>
      </div>
    </section>
  );
}
