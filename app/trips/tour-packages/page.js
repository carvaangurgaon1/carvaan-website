"use client";
import { useState } from "react";
import Link from "next/link";

export default function TourPackagesPage() {
  // Example data (replace this with API data later)
  const packages = [
    {
      id: 1,
      name: "Manali Tour Package",
      location: "Manali, Himachal Pradesh",
      price: 8999,
      duration: "4N/5D",
      image: "https://source.unsplash.com/400x250/?manali,mountains,travel",
      description:
        "Enjoy the serene beauty of Himachal with our Manali getaway — ideal for friends, couples, and solo travelers.",
    },
    {
      id: 2,
      name: "Goa Tour Package",
      location: "Goa, India",
      price: 11999,
      duration: "3N/4D",
      image: "https://source.unsplash.com/400x250/?goa,beach,travel",
      description:
        "A sun-soaked vacation with beach vibes, parties, and relaxation — perfect for a refreshing break.",
    },
    {
      id: 3,
      name: "Kedarnath Yatra Package",
      location: "Kedarnath, Uttarakhand",
      price: 10999,
      duration: "5N/6D",
      image: "https://source.unsplash.com/400x250/?kedarnath,temple,spiritual",
      description:
        "A spiritual retreat to Kedarnath with comfortable stays and guided temple visits.",
    },
    {
      id: 4,
      name: "Jaipur Heritage Tour",
      location: "Jaipur, Rajasthan",
      price: 7999,
      duration: "3N/4D",
      image: "https://source.unsplash.com/400x250/?jaipur,fort,heritage",
      description:
        "Experience royal Rajasthan through Jaipur’s forts, palaces, and colorful bazaars.",
    },
    {
      id: 5,
      name: "Kashmir Paradise Tour",
      location: "Srinagar, Kashmir",
      price: 13999,
      duration: "5N/6D",
      image: "https://source.unsplash.com/400x250/?kashmir,lake,travel",
      description:
        "Heaven on earth awaits — explore Dal Lake, Gulmarg, and the lush valleys of Kashmir.",
    },
  ];

  // Filters
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(search.toLowerCase()) ||
      pkg.location.toLowerCase().includes(search.toLowerCase());

    const matchesDuration = duration ? pkg.duration === duration : true;
    const matchesBudget = budget
      ? (budget === "low" && pkg.price <= 10000) ||
        (budget === "mid" && pkg.price > 10000 && pkg.price <= 15000) ||
        (budget === "high" && pkg.price > 15000)
      : true;

    return matchesSearch && matchesDuration && matchesBudget;
  });

  const clearFilters = () => {
    setSearch("");
    setDuration("");
    setBudget("");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="text-center py-12 bg-gradient-to-r from-orange-100 to-yellow-100">
        <h1 className="text-4xl font-bold text-orange-700 mb-2">
          Carvaan Tour Packages ✈️
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handpicked travel experiences — family vacations, honeymoon specials, and adventure tours.
        </p>
        <Link
          href="/trips"
          className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Trips
        </Link>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-20 z-30 bg-white shadow-md py-4 px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          <input
            type="text"
            placeholder="Search destination or package..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Durations</option>
            <option value="3N/4D">3N/4D</option>
            <option value="4N/5D">4N/5D</option>
            <option value="5N/6D">5N/6D</option>
          </select>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Budgets</option>
            <option value="low">Below ₹10,000</option>
            <option value="mid">₹10,000 – ₹15,000</option>
            <option value="high">Above ₹15,000</option>
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
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{pkg.location}</p>
                <p className="text-gray-700 text-sm mt-2">{pkg.duration}</p>
                <p className="text-orange-600 font-bold mt-2">
                  ₹{pkg.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {pkg.description}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-3 text-orange-600 hover:text-pink-600 font-semibold"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No packages match your filters. Try different criteria.
          </p>
        )}
      </section>
    </main>
  );
}
