"use client";
import { useState } from "react";
import Link from "next/link";

export default function GroupTripsPage() {
  // Mock data for trips
  const allTrips = [
    {
      id: 1,
      title: "Manali Adventure",
      location: "Manali, Himachal Pradesh",
      category: "Adventure",
      price: 9999,
      duration: "3N/4D",
      image: "https://source.unsplash.com/400x250/?manali,mountains,travel",
    },
    {
      id: 2,
      title: "Goa Beach Escape",
      location: "Goa",
      category: "Beach",
      price: 14999,
      duration: "4N/5D",
      image: "https://source.unsplash.com/400x250/?goa,beach,travel",
    },
    {
      id: 3,
      title: "Rishikesh River Rafting",
      location: "Rishikesh, Uttarakhand",
      category: "Adventure",
      price: 7999,
      duration: "2N/3D",
      image: "https://source.unsplash.com/400x250/?rishikesh,rafting,travel",
    },
    {
      id: 4,
      title: "Kasol Chill Retreat",
      location: "Kasol, Himachal Pradesh",
      category: "Trek",
      price: 10999,
      duration: "3N/4D",
      image: "https://source.unsplash.com/400x250/?kasol,trek,travel",
    },
    {
      id: 5,
      title: "Jaipur Heritage Walk",
      location: "Jaipur, Rajasthan",
      category: "Culture",
      price: 8999,
      duration: "2N/3D",
      image: "https://source.unsplash.com/400x250/?jaipur,heritage,travel",
    },
    {
      id: 6,
      title: "Coorg Coffee Trails",
      location: "Coorg, Karnataka",
      category: "Nature",
      price: 12999,
      duration: "3N/4D",
      image: "https://source.unsplash.com/400x250/?coorg,forest,travel",
    },
  ];

  // State for filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");

  // Filter logic
  const filteredTrips = allTrips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(search.toLowerCase()) ||
      trip.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? trip.category === category : true;
    const matchesBudget = budget
      ? (budget === "low" && trip.price <= 10000) ||
        (budget === "mid" && trip.price > 10000 && trip.price <= 15000) ||
        (budget === "high" && trip.price > 15000)
      : true;
    const matchesDuration = duration
      ? trip.duration === duration
      : true;

    return matchesSearch && matchesCategory && matchesBudget && matchesDuration;
  });

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setBudget("");
    setDuration("");
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero / Header Section */}
      <section className="text-center py-12 bg-gradient-to-r from-pink-50 to-purple-50 mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">
          All Group Trips 🚐✨
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find your next adventure — filter by location, budget, or vibe.
        </p>
        <Link
          href="/trips"
          className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Trips
        </Link>
      </section>

      {/* 🔍 Filter Bar */}
      <div className="sticky top-20 z-40 bg-white shadow-md py-4 px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search destination or trip name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">All Categories</option>
            <option value="Adventure">Adventure</option>
            <option value="Beach">Beach</option>
            <option value="Culture">Culture</option>
            <option value="Trek">Trek</option>
            <option value="Nature">Nature</option>
          </select>

          {/* Duration */}
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">All Durations</option>
            <option value="2N/3D">2N/3D</option>
            <option value="3N/4D">3N/4D</option>
            <option value="4N/5D">4N/5D</option>
          </select>

          {/* Budget */}
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">All Budgets</option>
            <option value="low">Below ₹10,000</option>
            <option value="mid">₹10,000 – ₹15,000</option>
            <option value="high">Above ₹15,000</option>
          </select>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {trip.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{trip.location}</p>
                <p className="text-gray-700 text-sm mt-2">{trip.duration}</p>
                <p className="text-pink-600 font-bold mt-2">
                  ₹{trip.price.toLocaleString()}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-3 text-pink-600 hover:text-purple-600 font-semibold"
                >
                  View Itinerary →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No trips match your filters. Try adjusting your search.
          </p>
        )}
      </section>
    </main>
  );
}
