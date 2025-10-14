"use client";

import { useState } from "react";
import { FiEye, FiEdit2, FiTrash2, FiImage } from "react-icons/fi";

export default function PackageDetailsPage() {
  const [search, setSearch] = useState("");

  const trips = [
    { id: 1, title: "Leh Ladakh with Turtuk", date: "15/10/2025", seats: 8, agent: "Infinite Traveler", destination: "Ladakh" },
    { id: 2, title: "Leh Ladakh with Turtuk", date: "16/10/2025", seats: 11, agent: "Infinite Traveler", destination: "Ladakh" },
    { id: 3, title: "Kasol & Kheerganga Trek", date: "17/10/2025", seats: 9, agent: "Infinite Traveler", destination: "Kheerganga" },
    { id: 4, title: "Manali & Kasol Escape", date: "17/10/2025", seats: 10, agent: "Strangers Together", destination: "Manali" },
  ];

  const filteredTrips = trips.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-1">Carvaan &gt; Trips &gt; Trip Details</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Trip Details</h1>

      {/* Filters */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">Trip Title</th>
              <th className="px-4 py-3">Start Date</th>
              <th className="px-4 py-3">Seats Left</th>
              <th className="px-4 py-3">Travel Agent</th>
              <th className="px-4 py-3">Destination</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrips.map((trip, i) => (
              <tr key={trip.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{trip.title}</td>
                <td className="px-4 py-3">{trip.date}</td>
                <td className="px-4 py-3">{trip.seats}</td>
                <td className="px-4 py-3">{trip.agent}</td>
                <td className="px-4 py-3">{trip.destination}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"><FiEye /></button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"><FiTrash2 /></button>
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg"><FiEdit2 /></button>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg"><FiImage /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
