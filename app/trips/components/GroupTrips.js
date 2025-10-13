// app/trips/components/GroupTrips.js
"use client";
import { useState } from "react";

const groupTrips = {
  Manali: [
    { id: 1, title: "Manali Adventure 1", duration: "5 Days", price: 15000, highlights: "Trek + Bonfire" },
    { id: 2, title: "Manali Adventure 2", duration: "6 Days", price: 18000, highlights: "Snow Activities" },
    { id: 3, title: "Manali Adventure 3", duration: "4 Days", price: 12000, highlights: "Camping + River Rafting" },
    { id: 4, title: "Manali Adventure 4", duration: "7 Days", price: 22000, highlights: "Luxury Stay + Trek" },
    { id: 5, title: "Manali Adventure 5", duration: "5 Days", price: 16000, highlights: "Trek + Paragliding" },
  ],
  Goa: [
    { id: 6, title: "Goa Escape 1", duration: "4 Days", price: 14000, highlights: "Beach + Nightlife" },
    { id: 7, title: "Goa Escape 2", duration: "3 Days", price: 10000, highlights: "Water Sports + Beach" },
  ],
  Rishikesh: [
    { id: 8, title: "Rishikesh Spiritual 1", duration: "3 Days", price: 9000, highlights: "Yoga + Ganga Aarti" },
    { id: 9, title: "Rishikesh Adventure 2", duration: "4 Days", price: 12000, highlights: "Rafting + Camping" },
  ],
  Ladakh: [
    { id: 10, title: "Ladakh Expedition", duration: "8 Days", price: 40000, highlights: "Biking + Pangong Lake" },
  ],
};

import Link from "next/link";

export default function GroupTrips() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Group Trips 🚐</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Join our exciting community trips — discover destinations, meet people, and explore together.
      </p>

      {/* Example: Preview 3 group trips */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        {[1, 2, 3].map((trip) => (
          <div
            key={trip}
            className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <img
              src={`https://source.unsplash.com/400x250/?travel,${trip}`}
              alt="Group Trip"
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Manali Adventure {trip}
            </h3>
            <p className="text-gray-600 text-sm mt-2">Starts from ₹9,999</p>
          </div>
        ))}
      </div>

      {/* 🔗 Add navigation link */}
      <Link
        href="/trips/group-trips"
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        View All Group Trips →
      </Link>
    </section>
  );
}
