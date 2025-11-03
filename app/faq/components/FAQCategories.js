"use client";

import { useState } from "react";

export default function FAQCategories({ faqs }) {
  const [expanded, setExpanded] = useState(null);
  const [helpVotes, setHelpVotes] = useState({});

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  const vote = (id, val) =>
    setHelpVotes((prev) => ({
      ...prev,
      [id]: prev[id] === val ? null : val,
    }));

  const grouped = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <section className="max-w-6xl mx-auto mt-10 px-4">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="bg-white shadow rounded-lg border mb-6">
          {/* Category Header */}
          <div className="px-4 py-3 border-b">
            <h3 className="font-semibold text-gray-700">{category}</h3>
          </div>

          {/* FAQ Items */}
          <div className="divide-y">
            {items.map((faq) => (
              <div key={faq.id} className="px-4 py-3">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left flex items-start gap-3"
                >
                  <span className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{faq.q}</span>
                      <span className="text-gray-400 ml-3">
                        {expanded === faq.id ? "−" : "+"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {expanded === faq.id
                        ? faq.a
                        : faq.a.slice(0, 120) +
                          (faq.a.length > 120 ? "..." : "")}
                    </div>
                  </span>
                </button>

                {/* Expanded Section */}
                {expanded === faq.id && (
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => vote(faq.id, "up")}
                        className={`px-3 py-1 rounded-md text-sm ${
                          helpVotes[faq.id] === "up"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-50"
                        }`}
                      >
                        👍 Helpful
                      </button>
                      <button
                        onClick={() => vote(faq.id, "down")}
                        className={`px-3 py-1 rounded-md text-sm ${
                          helpVotes[faq.id] === "down"
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
