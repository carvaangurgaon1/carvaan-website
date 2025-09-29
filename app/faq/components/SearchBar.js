"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const faqs = [
    "Carvaan Coins",
    "Corporate Trips",
    "Cancellation Policy",
    "Payment Options",
    "Captains",
  ];

  const suggestions = faqs.filter((f) =>
    f.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-10 bg-white shadow">
      <div className="container mx-auto max-w-2xl">
        <input
          type="text"
          placeholder="Search your question here 🔍"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border p-4 rounded shadow"
        />
        {query && (
          <div className="bg-gray-100 border rounded mt-2">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="p-3 hover:bg-gray-200 cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
