// app/trips/components/TripDetailModal.js
"use client";
import { useState } from "react";

export default function TripDetailModal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-12 bg-gray-50 text-center">
      <button onClick={() => setOpen(true)} className="px-6 py-3 bg-pink-600 text-white rounded">
        View Sample Trip Detail
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-600">✖</button>
            <h2 className="text-2xl font-bold mb-4">Manali Adventure</h2>
            <ul className="space-y-2 text-left">
              <li><strong>Duration:</strong> 5 Days</li>
              <li><strong>Highlights:</strong> Trekking, Bonfire</li>
              <li><strong>Inclusions:</strong> Meals, Transport, Accommodation</li>
              <li><strong>Captain:</strong> Rahul – Certified Trek Leader</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded">Book This Trip</button>
          </div>
        </div>
      )}
    </section>
  );
}
