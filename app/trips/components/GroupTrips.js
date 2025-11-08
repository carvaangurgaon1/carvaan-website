// app/trips/components/GroupTrips.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GroupTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/trips", { cache: "no-store" });
        const data = await res.json();
        setTrips(Array.isArray(data.trips) ? data.trips.slice(0, 3) : []);
      } catch {
        setTrips([]);
      }
    };
    load();
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Group Trips 🚐</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Join our exciting community trips — discover destinations, meet people, and explore together.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8 px-4">
        {trips.length === 0 && (
          <div className="col-span-full text-gray-500">No trips yet. Create one from Admin.</div>
        )}
        {trips.map((trip) => (
          <div
            key={trip.slug}
            className="bg-gray-50 rounded-xl shadow-lg p-0 hover:shadow-2xl transition overflow-hidden"
          >
            <div className="relative w-full h-52">
              <Image
                src={trip.image || "https://placehold.co/600x400?text=Trip"}
                alt={trip.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{trip.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{trip.location}</p>
              {trip.price ? (
                <p className="text-purple-700 font-bold mt-2">₹{Number(trip.price).toLocaleString()}</p>
              ) : null}
              <p className="text-sm text-gray-500">{trip.duration}</p>

              <div className="mt-4">
                <Link
                  href={`/trips/group-trips/${trip.slug}`}
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/trips/group-trips"
        className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-300 transition"
      >
        View All Group Trips →
      </Link>
    </section>
  );
}
