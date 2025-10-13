"use client";
import { useState } from "react";
import Link from "next/link";

// Package data
const packagesData = [
  // International Packages
  {
    id: 1,
    category: "International",
    name: "Azerbaijan",
    subtitle: "The Land of Fire",
    image: "/Azerbaijan.jpg",
  },
  {
    id: 2,
    category: "International",
    name: "Bali",
    subtitle: "Island of the Gods",
    image: "/Bali.jpg",
  },
  {
    id: 3,
    category: "International",
    name: "Dubai",
    subtitle: "The City of Wonders",
    image: "/Dubai.jpg",
  },
  {
    id: 4,
    category: "International",
    name: "Singapore",
    subtitle: "The Lion City",
    image: "/Singapore.jpg",
  },
  {
    id: 5,
    category: "International",
    name: "Thailand",
    subtitle: "Where Adventure Meets Serenity",
    image: "/Thailand.jpg",
  },
  {
    id: 6,
    category: "International",
    name: "Vietnam",
    subtitle: "Nature's Hidden Gem",
    image: "/Vietnam.jpg",
  },

  // Honeymoon Packages
  {
    id: 7,
    category: "Honeymoon",
    name: "Goa",
    subtitle: "Sun, Sand and Serenity",
    image: "/Goa.jpg",
  },
  {
    id: 8,
    category: "Honeymoon",
    name: "Indonesia",
    subtitle: "A Tropical Haven of Beauty",
    image: "/Indonesia.jpg",
  },
  {
    id: 9,
    category: "Honeymoon",
    name: "Kerala",
    subtitle: "The Backwaters of Bliss",
    image: "/Kerala.jpg",
  },
  {
    id: 10,
    category: "Honeymoon",
    name: "Maldives",
    subtitle: "Paradise on the Ocean",
    image: "/Maldives.jpg",
  },
  {
    id: 11,
    category: "Honeymoon",
    name: "Manali",
    subtitle: "Heaven on Earth",
    image: "/Manali.jpg",
  },
  {
    id: 12,
    category: "Honeymoon",
    name: "Mauritius",
    subtitle: "The Island of Love",
    image: "/Mauritius.jpg",
  },

  // Religious Packages
  {
    id: 13,
    category: "Religious",
    name: "Ayodhya",
    subtitle: "Birthplace of Lord Ram",
    image: "/Ayodhya.jpg",
  },
  {
    id: 14,
    category: "Religious",
    name: "Char Dham Yatra",
    subtitle: "Sacred Journey of the Gods",
    image: "/Char.jpg",
  },
  {
    id: 15,
    category: "Religious",
    name: "Dwarkadhish",
    subtitle: "The Holy City of Lord Krishna",
    image: "/Dwarkadhish.png",
  },
  {
    id: 16,
    category: "Religious",
    name: "Golden Temple",
    subtitle: "Spiritual Serenity of Amritsar",
    image: "/Golden Temple.jpg",
  },
  {
    id: 17,
    category: "Religious",
    name: "Tungnath",
    subtitle: "The Highest Shiva Temple",
    image: "/Tungnath.webp",
  },
  {
    id: 18,
    category: "Religious",
    name: "Vaishno Devi",
    subtitle: "Divine Blessings in the Himalayas",
    image: "/Vaishno Devi.webp",
  },

  // Trending Packages
  {
    id: 19,
    category: "Trending",
    name: "Andaman & Nicobar",
    subtitle: "Emerald Islands of the Bay",
    image: "/AndamanNicobar.a22989ca.jpg",
  },
  {
    id: 20,
    category: "Trending",
    name: "Bhutan",
    subtitle: "The Kingdom of Happiness",
    image: "/Bhutan.f13bb129.webp",
  },
  {
    id: 21,
    category: "Trending",
    name: "Japan",
    subtitle: "Land of the Rising Sun",
    image: "/Japan.1808cd48.jpg",
  },
  {
    id: 22,
    category: "Trending",
    name: "Kashmir",
    subtitle: "Paradise on Earth",
    image: "/Kashmir.47d1d1c4.jpg",
  },
  {
    id: 23,
    category: "Trending",
    name: "Ladakh",
    subtitle: "Land of High Passes",
    image: "/Ladakh.12e8a4d9.jpg",
  },
  {
    id: 24,
    category: "Trending",
    name: "Sri Lanka",
    subtitle: "The Pearl of the Indian Ocean",
    image: "/Sri Lanka.dc080185.webp",
  },
];

export default function TourPackagesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredPackages = packagesData.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(search.toLowerCase()) ||
      pkg.subtitle.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? pkg.category === category : true;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSearch("");
    setCategory("");
  };

  const categories = ["International", "Honeymoon", "Religious", "Trending"];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-100 to-blue-200">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">
          Carvaan Tour Packages ✈️
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore handpicked international, honeymoon, religious, and trending tour packages.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Homepage
        </Link>
      </section>

      {/* FILTERS */}
      <div className="sticky top-20 z-30 bg-white shadow-md py-4 px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          <input
            type="text"
            placeholder="Search package or subtitle..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            onClick={clearFilters}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* PACKAGE GRID */}
      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full h-52">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{pkg.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{pkg.subtitle}</p>
                <p className="text-gray-600 mt-2">Category: {pkg.category}</p>
                <Link
                  href="#"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No packages match your filters.
          </p>
        )}
      </section>
    </main>
  );
}
