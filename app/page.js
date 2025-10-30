/ /app/page.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <main className="flex flex-col items-center justify-center">
      {/* :white_tick: Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* :sunrise_over_mountains: Background Image Placeholder */}
        <Image
          src="/hero-placeholder.jpg" // :frame_with_picture: Replace this with your actual banner image
          alt="Carvaan Hero Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
        {/* 🩶 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
        {/* :sparkles: Hero Content */}
        <div className="relative z-10 px-6 max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
            Travel Together, <br className="hidden sm:block" /> Earn Together :minibus:
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Discover curated group trips across India and beyond.
            Meet new people, explore, and earn Carvaan Coins on every journey.
          </p>
          {/* :magnifying_glass: Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for destinations, themes, or group trips..."
              className="px-4 py-3 w-full sm:w-96 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
              onClick={() => alert(`Searching for "${search}"`)}
            >
              Search
            </button>
          </div>
          {/* :rocket: CTA Button */}
          <Link
            href="/trips"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Explore Trips →
          </Link>
        </div>
      </section>
    </main>
  );
}
