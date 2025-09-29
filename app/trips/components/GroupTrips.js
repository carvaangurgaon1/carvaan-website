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

export default function GroupTrips() {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (trip) => {
    if (compareList.find((t) => t.id === trip.id)) {
      setCompareList(compareList.filter((t) => t.id !== trip.id));
    } else if (compareList.length < 5) {
      setCompareList([...compareList, trip]);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-purple-700">✨ Group Trips – Carvaan’s Heart</h2>
        <p className="text-lg text-gray-600 mb-12">Curated trips for squads, families, and explorers. More people, more memories.</p>

        {Object.entries(groupTrips).map(([location, trips]) => (
          <div key={location} className="mb-12 text-left">
            <h3 className="text-2xl font-semibold mb-4">{location} Trips</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {trips.map((trip) => (
                <div key={trip.id} className="border rounded p-4 shadow hover:shadow-lg transition">
                  <h4 className="font-bold text-lg">{trip.title}</h4>
                  <p className="text-gray-600">{trip.duration}</p>
                  <p className="text-purple-600 font-semibold">₹{trip.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{trip.highlights}</p>
                  <button
                    onClick={() => toggleCompare(trip)}
                    className={`mt-3 px-4 py-2 rounded ${
                      compareList.find((t) => t.id === trip.id) ? "bg-red-500 text-white" : "bg-purple-600 text-white"
                    }`}
                  >
                    {compareList.find((t) => t.id === trip.id) ? "Remove" : "Compare"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Compare Table */}
        {compareList.length > 0 && (
          <div className="mt-12 overflow-x-auto">
            <h3 className="text-2xl font-semibold mb-4">Compare Selected Trips</h3>
            <table className="w-full border text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3">Trip</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Coins</th>
                  <th className="p-3">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {compareList.map((trip) => (
                  <tr key={trip.id}>
                    <td className="p-3">{trip.title}</td>
                    <td className="p-3">{trip.duration}</td>
                    <td className="p-3">₹{trip.price.toLocaleString()}</td>
                    <td className="p-3">{trip.price}</td>
                    <td className="p-3">{trip.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
