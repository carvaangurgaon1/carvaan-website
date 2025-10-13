// app/trips/group-trips/page.js
"use client";
import Link from "next/link";

export default function GroupTripsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-600 mb-3">
          All Group Trips 🚐✨
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore all available group adventures, compare itineraries, and find your perfect getaway.
        </p>
        <Link
          href="/trips"
          className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Trips
        </Link>
      </section>

      {/* Placeholder for your detailed group trip listings */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <img
              src={`https://source.unsplash.com/400x250/?mountains,travel,${i}`}
              alt="Group Trip"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Manali Getaway {i + 1}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              3N/4D | From ₹9,999 | Includes Transport, Stay & Meals
            </p>
            <Link
              href="#"
              className="inline-block mt-4 text-pink-600 font-semibold hover:text-purple-600"
            >
              Compare Itineraries →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
