'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Stories() {
  const events = [
    {
      title: "Himachal Meetup 2025",
      date: "November 10, 2025",
      location: "Manali, Himachal Pradesh",
      img: "https://source.unsplash.com/400x300/?mountains,group",
      desc: "Join 50+ travelers for a weekend of bonfire sessions, treks, and community bonding.",
    },
    {
      title: "Goa Beach Bonanza",
      date: "December 5, 2025",
      location: "Arambol, Goa",
      img: "https://source.unsplash.com/400x300/?beach,party",
      desc: "Celebrate travel, sun, and sand with like-minded explorers and creators.",
    },
    {
      title: "Delhi Carvaan Mixer",
      date: "January 20, 2026",
      location: "Hauz Khas, Delhi",
      img: "https://source.unsplash.com/400x300/?event,networking",
      desc: "An evening of travel stories, collaborations, and future trip announcements.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Carvaan Community Events & Meetups
        </motion.h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From treks to bonfire nights, connect with fellow travelers and captains across India.
        </p>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  📅 {event.date} | 📍 {event.location}
                </p>
                <p className="text-gray-600 mb-4">{event.desc}</p>
                <Link
                  href="#"
                  className="inline-block bg-pink-500 text-white px-4 py-2 rounded-md font-medium hover:bg-pink-600 transition"
                >
                  Join Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href="#"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
