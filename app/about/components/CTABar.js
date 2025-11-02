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



// /app/components/about/PressTestimonials.js
"use client";
import Image from "next/image";

export default function PressTestimonials() {
  const testimonials = [
    {
      quote:
        "Carvaan isn’t just a travel brand — it’s a movement redefining how India explores together.",
      author: "Travel Weekly India",
      img: "https://source.unsplash.com/100x100/?magazine,press",
    },
    {
      quote:
        "The perfect blend of adventure, community, and culture. Carvaan makes group travel effortless.",
      author: "The Economic Times Travel",
      img: "https://source.unsplash.com/100x100/?newspaper",
    },
    {
      quote:
        "A platform built for the new-age explorer — inclusive, safe, and inspiring.",
      author: "Wanderlust Magazine",
      img: "https://source.unsplash.com/100x100/?camera",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
        Featured In & Trusted By
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={item.img}
                alt={item.author}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 italic mb-3">&ldquo;{item.quote}&rdquo;</p>
            <p className="text-pink-600 font-semibold">{item.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
