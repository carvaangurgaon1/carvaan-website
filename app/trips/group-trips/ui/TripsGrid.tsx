'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TripIndex = {
  slug: string;
  title: string;
  location: string;
  category: string;
  price: number;
  durationLabel: string;
  image: string;
};

export default function TripsGrid({ initialTrips }: { initialTrips: TripIndex[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');

  const filtered = useMemo(() => {
    return (initialTrips || []).filter((t: TripIndex) => {
      const matchesSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.location.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category ? t.category === category : true;
      const matchesBudget = budget
        ? (budget === 'low' && t.price <= 10000) ||
          (budget === 'mid' && t.price > 10000 && t.price <= 15000) ||
          (budget === 'high' && t.price > 15000)
        : true;
      const matchesDuration = duration ? t.durationLabel === duration : true;
      return matchesSearch && matchesCategory && matchesBudget && matchesDuration;
    });
  }, [initialTrips, search, category, budget, duration]);

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setBudget('');
    setDuration('');
  };

  return (
    <>
      {/* Filter Bar */}
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
            <option value="7N/8D">7N/8D</option>
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map((trip) => (
            <div key={trip.slug} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden">
              <div className="relative w-full h-48">
                <Image src={trip.image} alt={trip.title} fill className="object-cover" />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{trip.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{trip.location}</p>
                <p className="text-gray-700 text-sm mt-2">{trip.durationLabel}</p>
                <p className="text-pink-600 font-bold mt-2">₹{trip.price.toLocaleString()}</p>
                <Link href={`/trips/group-trips/${trip.slug}`} className="inline-block mt-3 text-pink-600 hover:text-purple-600 font-semibold">
                  View Itinerary →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No trips match your filters. Try adjusting your search.</p>
        )}
      </section>
    </>
  );
}
