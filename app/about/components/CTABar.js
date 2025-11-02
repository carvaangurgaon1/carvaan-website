"use client";
import Link from "next/link";

export default function JoinMovement() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-yellow-400 text-white text-center overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-raleway">
          Join the Carvaan Movement 🚐✨
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Connect. Travel. Earn. Grow.  
          Be part of India’s fastest-growing travel community — one adventure at a time.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/trips"
            className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
          >
            Explore Trips
          </Link>
          <Link
            href="/community"
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-pink-600 transition"
          >
            Join Community
          </Link>
        </div>
      </div>
    </section>
  );
}




<section
  className="relative py-24 text-white text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/join-banner.jpg')" }}
>
}
