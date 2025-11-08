// app/trips/group-trips/page.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GroupTripsPage() {
  const [allTrips, setAllTrips] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/trips", { cache: "no-store" });
        const data = await res.json();
        setAllTrips(Array.isArray(data.trips) ? data.trips : []);
      } catch {
        setAllTrips([]);
      }
    };
    load();
  }, []);

  const filteredTrips = allTrips.filter((trip) => {
    const matchesSearch =
      (trip.title || "").toLowerCase().includes(search.toLowerCase()) ||
      (trip.location || "").toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? trip.category === category : true;
    const price = Number(trip.price || 0);
    const matchesBudget = budget
      ? (budget === "low" && price <= 10000) ||
        (budget === "mid" && price > 10000 && price <= 15000) ||
        (budget === "high" && price > 15000)
      : true;
    const matchesDuration = duration ? trip.duration === duration : true;

    return matchesSearch && matchesCategory && matchesBudget && matchesDuration;
  });

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setBudget("");
    setDuration("");
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <section className="text-center py-12 bg-gradient-to-r from-pink-50 to-purple-50 mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">All Group Trips 🚐✨</h1>
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

      <div className="sticky top-20 z-40 bg-white shadow-md py-4 px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          <input
            type="text"
            placeholder="Search destination or trip name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
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
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">All Durations</option>
            <option value="2N/3D">2N/3D</option>
            <option value="3N/4D">3N/4D</option>
            <option value="4N/5D">4N/5D</option>
            <option value="5N/6D">5N/6D</option>
            <option value="7 Days">7 Days</option>
          </select>
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
          <button
            onClick={clearFilters}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <div
              key={trip.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >
              <img
                src={trip.image || "https://placehold.co/600x400?text=Trip"}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{trip.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{trip.location}</p>
                <p className="text-gray-700 text-sm mt-2">{trip.duration}</p>
                {trip.price ? (
                  <p className="text-pink-600 font-bold mt-2">
                    ₹{Number(trip.price).toLocaleString()}
                  </p>
                ) : null}
                <Link
                  href={`/trips/group-trips/${trip.slug}`}
                  className="inline-block mt-3 text-pink-600 hover:text-purple-600 font-semibold"
                >
                  View Details →
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
