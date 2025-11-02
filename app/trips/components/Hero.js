"use client";
import { useState } from "react";

export default function TripsHeroSection() {
  const [filters, setFilters] = useState({
    destination: "",
    budget: "",
    squad: "",
    theme: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Selected Filters:", filters);
    alert("Search triggered with selected filters!");
  };

  return (
    <section className="relative bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 px-6 text-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/trips-hero-bg.jpg')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          ONE MARKETPLACE. EVERY JOURNEY.
        </h1>
        <p className="text-lg md:text-xl text-pink-100">
          Find, plan, and customize your next adventure with Carvaan.
        </p>

        {/* Filters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <select
            name="destination"
            value={filters.destination}
            onChange={handleChange}
            className="text-gray-700 px-4 py-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Destination</option>
            <option>Manali</option>
            <option>Goa</option>
            <option>Leh Ladakh</option>
            <option>Kerala</option>
          </select>

          <select
            name="budget"
            value={filters.budget}
            onChange={handleChange}
            className="text-gray-700 px-4 py-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Budget</option>
            <option>₹ 5 000 – ₹ 10 000</option>
            <option>₹ 10 000 – ₹ 20 000</option>
            <option>₹ 20 000 – ₹ 40 000</option>
            <option>₹ 40 000+</option>
          </select>

          <select
            name="squad"
            value={filters.squad}
            onChange={handleChange}
            className="text-gray-700 px-4 py-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Squad Type</option>
            <option>Solo Travelers</option>
            <option>Friends Group</option>
            <option>Couples</option>
            <option>Corporate Team</option>
          </select>

          <select
            name="theme"
            value={filters.theme}
            onChange={handleChange}
            className="text-gray-700 px-4 py-3 rounded-md w-full focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Theme</option>
            <option>Adventure</option>
            <option>Luxury</option>
            <option>Beach</option>
            <option>Himalayan Escape</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={handleSearch}
            className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-300 transition"
          >
            Browse All Trips
          </button>
          <button
            className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-purple-700 transition"
          >
            Plan a Custom Trip
          </button>
        </div>
      </div>
    </section>
  );
}
