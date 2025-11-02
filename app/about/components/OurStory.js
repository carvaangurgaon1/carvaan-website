// /app/components/about/OurStory.js
"use client";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative py-20 bg-white px-6 md:px-12 lg:px-20 text-center md:text-left">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left text content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Carvaan began as a passion project to make group travel effortless,
            fun, and community-driven. We wanted to create a space where
            wanderlust meets trust — where travelers, captains, and travel
            agents connect seamlessly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What started with a handful of adventurers has now become India’s
            fastest-growing travel marketplace. Every journey, every story, and
            every friendship formed along the way adds to the soul of Carvaan.
          </p>
        </div>

        {/* Right image placeholder */}
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://source.unsplash.com/800x600/?friends,travel"
            alt="Travel community"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
