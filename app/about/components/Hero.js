// /app/components/about/Hero.js
"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroAbout() {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-white to-purple-100 py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4 leading-tight">
          We’re More Than a Travel Platform.
        </h1>
        <h2 className="text-xl md:text-2xl text-pink-600 font-semibold mb-8">
          We’re Your Travel Partner.
        </h2>
        <Link
          href="/trips"
          className="bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          Explore Trips
        </Link>
      </div>

      {/* Contact Info Grid */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-gray-700">
        <div>
          <p className="font-semibold">Email</p>
          <p>support@carvaan.co</p>
        </div>
        <div>
          <p className="font-semibold">Phone</p>
          <p>+91 98765 43210</p>
        </div>
        <div>
          <p className="font-semibold">Website</p>
          <p>reallygreatsite.com</p>
        </div>
        <div>
          <p className="font-semibold">Location</p>
          <p>123 Anywhere St., Any City</p>
        </div>
      </div>
    </section>
  );
}
