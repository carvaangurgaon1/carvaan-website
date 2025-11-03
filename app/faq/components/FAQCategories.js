"use client";

import { useState } from "react";

export default function FAQCategories({ faqs }) {
  const [expanded, setExpanded] = useState(null);
  const [helpVotes, setHelpVotes] = useState({});

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));
  const vote = (id, val) =>
    setHelpVotes((p) => ({ ...p, [id]: p[id] === val ? null : val }));

  const grouped = faqs.reduce((acc, f) => {
    if (!acc[f.category]) acc[f.category] = [];
    acc[f.category].push(f);
    return acc;
  }, {});

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="bg-white shadow rounded-lg border mb-6">
          <div className="px-4 py-3 border-b">
            <h3 className="font-semibold text-gray-700">{category}</h3>
          </div>
          <div className="divide-y">
            {items.map((f) => (
              <div key={f.id} className="px-4 py-3">
                <button
                  onClick={() => toggle(f.id)}
                  className="w-full text-left flex items-start gap-3"
                >
                  <span className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{f.q}</span>
                      <span className="text-gray-400 ml-3">
                        {expanded === f.id ? "−" : "+"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {expanded === f.id
                        ? f.a
                        : f.a.slice(0, 120) + (f.a.length > 120 ? "..." : "")}
                    </div>
                  </span>
                </button>

                {expanded === f.id && (
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => vote(f.id, "up")}
                        className={`px-3 py-1 rounded-md text-sm ${
                          helpVotes[f.id] === "up"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-50"
                        }`}
                      >
                        👍 Helpful
                      </button>
                      <button
                        onClick={() => vote(f.id, "down")}
                        className={`px-3 py-1 rounded-md text-sm ${
                          helpVotes[f.id] === "down"
                            ? "bg-red-50 text-red-700"
                            : "bg-gray-50"
                        }`}
                      >
                        👎 Not Helpful
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        window.scrollTo({
                          top: document.body.scrollHeight,
                          behavior: "smooth",
                        })
                      }
                      className="text-sm text-purple-600 hover:underline"
                    >
                      Still need help?
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
