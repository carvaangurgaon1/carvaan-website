"use client";
import { FiGlobe, FiHeart, FiUsers, FiMap } from "react-icons/fi";

export default function OurVision() {
  return (
    <section className="relative text-center text-white py-20">
      <div className="absolute inset-0 bg-[url('/vision-bg.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg">
          To redefine how India explores group travel—seamless, inclusive, and rewarding.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          We envision a future where travel is as simple as a tap and as rewarding as the memories you make.
        </p>
      </div>
    </section>
  );
}
