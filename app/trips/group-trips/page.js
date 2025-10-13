// app/trips/group-trips/page.js
"use client";

import { useState } from "react";

export default function GroupTripsPage() {
  const [selectedTrips, setSelectedTrips] = useState([]);

  const trips = [
    {
      id: 1,
      title: "Manali Adventure Trip",
      image: "/images/manali-trip.jpg",
      duration: "5 Days / 4 Nights",
      price: 10500,
      highlights: ["Snow Activities", "Café Crawl", "Group Bonfire"],
      itinerary: [
        "Day 1: Departure from Delhi",
        "Day 2: Arrive in Manali, Café hopping",
        "Day 3: Solang Valley adventure",
        "Day 4: Local sightseeing & Mall Road",
        "Day 5: Departure to Delhi",
      ],
    },
    {
      id: 2,
      title: "Kasol – Kheerganga Trek",
      image: "/images/kasol-trek.jpg",
      duration: "4 Days / 3 Nights",
      price: 8500,
      highlights: ["Trekking", "Hot Springs", "Camping under Stars"],
      itinerary: [
        "Day 1: Delhi → Kasol",
        "Day 2: Trek to Kheerganga",
        "Day 3: Descend & Chill in Kasol",
        "Day 4: Return to Delhi",
      ],
    },
    {
      id: 3,
      title: "Bir Billing Paragliding Escape",
      image: "/images/bir-trip.jpg",
      duration: "3 Days / 2 Nights",
      price: 7500,
      highlights: ["Paragliding", "Café Hop", "Sunset Points"],
      itinerary: [
        "Day 1: Overnight travel to Bir",
        "Day 2: Paragliding session & chill",
        "Day 3: Explore monasteries & head back",
      ],
    },
  ];

  const toggleCompare = (tripId) => {
    setSelectedTrips((prev) =>
      prev.includes(tripId)
        ? prev.filter((id) => id !== tripId)
        : [...prev, tripId]
    );
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">Group Trips 🚐✨</h1>
        <p className="text-lg mb-6">
          Join amazing people, explore breathtaking places, and make memories for life.
        </p>
        <p className="italic text-yellow-300">Compare. Choose. Travel together.</p>
      </section>

      {/* Trip Listings */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">
          Explore Our Popular Group Trips
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {trip.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{trip.duration}</p>
                <p className="text-pink-600 font-semibold mb-3">
                  ₹{trip.price.toLocaleString()} / person
                </p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {trip.highlights.map((h, i) => (
                    <li key={i}>• {h}</li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                    onClick={() => alert("View Trip Details")}
                  >
                    View Details
                  </button>
                  <button
                    className={`px-4 py-2 rounded border ${
                      selectedTrips.includes(trip.id)
                        ? "bg-green-500 text-white border-green-500"
                        : "border-pink-600 text-pink-600 hover:bg-pink-50"
                    }`}
                    onClick={() => toggleCompare(trip.id)}
                  >
                    {selectedTrips.includes(trip.id)
                      ? "Added to Compare"
                      : "Compare"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      {selectedTrips.length >= 2 && (
        <section className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Compare Your Selected Trips
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-pink-100 text-gray-800">
                  <th className="p-3 text-left">Feature</th>
                  {selectedTrips.map((id) => (
                    <th key={id} className="p-3 text-left">
                      {trips.find((t) => t.id === id)?.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-semibold">Duration</td>
                  {selectedTrips.map((id) => (
                    <td key={id} className="p-3">
                      {trips.find((t) => t.id === id)?.duration}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Price</td>
                  {selectedTrips.map((id) => (
                    <td key={id} className="p-3 text-pink-600 font-bold">
                      ₹{trips.find((t) => t.id === id)?.price.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Highlights</td>
                  {selectedTrips.map((id) => (
                    <td key={id} className="p-3">
                      {trips
                        .find((t) => t.id === id)
                        ?.highlights.join(", ")}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Itinerary</td>
                  {selectedTrips.map((id) => (
                    <td key={id} className="p-3 text-gray-600">
                      {trips
                        .find((t) => t.id === id)
                        ?.itinerary.slice(0, 3)
                        .join(" | ")}{" "}
                      ...
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90">
              Book the Best Fit Trip 🚐
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
