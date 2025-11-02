"use client";
import { FiGlobe, FiHeart, FiUsers, FiMap } from "react-icons/fi";

export default function ClosingStatement() {
  return (
    <section className="relative text-center text-white py-20">
      <div className="absolute inset-0 bg-[url('/van-sunset.jpg')] bg-cover bg-center opacity-70"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Carvaan is more than a name—it’s a movement.
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          A movement toward effortless travel, real connections, and journeys that reward you back.
          Join us. Because your next trip should be about memories, not mess.
        </p>
        <button className="mt-8 px-6 py-3 bg-pink-600 rounded-lg">Start Your Journey</button>
      </div>
    </section>
  );
}
