"use client";
import { FiGlobe, FiHeart, FiUsers, FiMap } from "react-icons/fi";

export default function OurMission() {
  const goals = [
    {
      icon: <FiUsers className="text-pink-600 text-3xl mb-3" />,
      title: "Empower Travelers",
      desc: "We aim to give every traveler a voice — a space to share stories, reviews, and experiences.",
    },
    {
      icon: <FiGlobe className="text-yellow-500 text-3xl mb-3" />,
      title: "Simplify Group Trips",
      desc: "From discovery to booking, we make planning and managing group trips stress-free.",
    },
    {
      icon: <FiMap className="text-purple-600 text-3xl mb-3" />,
      title: "Support Local Captains",
      desc: "We uplift local guides and captains who bring authenticity to every adventure.",
    },
    {
      icon: <FiHeart className="text-pink-500 text-3xl mb-3" />,
      title: "Build a Travel Community",
      desc: "We’re more than trips — we’re a collective of dreamers, storytellers, and explorers.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 via-white to-pink-50 py-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-10">
        Our Mission
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {goals.map((g, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-100"
          >
            {g.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{g.title}</h3>
            <p className="text-gray-600 text-sm">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
