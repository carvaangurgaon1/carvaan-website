"use client";

import Link from "next/link";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 text-white text-center overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug font-raleway">
          Ready to Explore the World with <span className="text-yellow-300">Carvaan?</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 text-pink-100 max-w-2xl mx-auto">
          Join thousands of explorers who travel together, share stories, and make memories that last forever.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/trips"
            className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition shadow-md"
          >
            Book Your Next Trip →
          </Link>
          <Link
            href="/community"
            className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition"
          >
            Join the Community ❤️
          </Link>
        </div>
      </div>

      {/* Optional Background Image / Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://source.unsplash.com/1600x900/?travel,landscape"
          alt="Travel Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
    </section>
  );
}
