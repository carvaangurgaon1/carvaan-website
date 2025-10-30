"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from "react-icons/fi";
export default function Hero() {
  const [filters, setFilters] = useState({
    destination: "",
    date: "",
    travelers: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search filters:", filters);
  };
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-yellow-400 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg" // :repeat: Replace with your PDF hero background
          alt="Carvaan Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center px-6 py-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
          One Marketplace. Endless <br /> Group Trips. Zero Stress.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
          From Solo to Squad, Carvaan has your back.
        </p>
        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-10 bg-white rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-2 max-w-4xl mx-auto text-gray-800"
        >
          {/* Destination */}
          <div className="flex items-center gap-2 w-full sm:w-1/3 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50">
            <FiMapPin className="text-pink-500 text-xl" />
            <input
              type="text"
              name="destination"
              placeholder="Where to?"
              value={filters.destination}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-sm sm:text-base"
            />
          </div>
          {/* Date */}
          <div className="flex items-center gap-2 w-full sm:w-1/3 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50">
            <FiCalendar className="text-pink-500 text-xl" />
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-sm sm:text-base"
            />
          </div>
          {/* Travelers */}
          <div className="flex items-center gap-2 w-full sm:w-1/3 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50">
            <FiUsers className="text-pink-500 text-xl" />
            <select
              name="travelers"
              value={filters.travelers}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-sm sm:text-base"
            >
              <option value="">Group Size</option>
              <option value="1-5">1 - 5</option>
              <option value="6-10">6 - 10</option>
              <option value="10+">10+</option>
            </select>
          </div>
          {/* Search Button */}
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            <FiSearch className="text-lg" /> Search
          </button>
        </form>
      </div>
    </section>
  );
}
