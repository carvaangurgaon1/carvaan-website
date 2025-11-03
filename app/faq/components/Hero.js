"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto text-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Got Questions? We’ve Got Answers.
      </h1>
      <p className="text-gray-600 mb-6">
        Your guide to stress-free group travel with Carvaan.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="https://wa.me/919876543210?text=Hi%20Carvaan%20%E2%9C%8B%EF%B8%8F%20I%20have%20a%20question"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-emerald-500 text-white px-5 py-3 rounded-lg shadow hover:brightness-95 transition"
        >
          Ask on WhatsApp
        </a>

        <Link
          href="/trips"
          className="inline-block border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          Explore Trips
        </Link>
      </div>
    </section>
  );
}
