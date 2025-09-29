"use client";
import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Tell Us How We Can Help 🚐✨
        </h2>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow space-y-4"
          >
            <input type="text" placeholder="Your Name *" required className="w-full border p-3 rounded" />
            <input type="email" placeholder="Your Email *" required className="w-full border p-3 rounded" />
            <input type="tel" placeholder="Your Phone (Optional)" className="w-full border p-3 rounded" />
            <select className="w-full border p-3 rounded">
              <option>Choose Category</option>
              <option>Traveler</option>
              <option>Corporate</option>
              <option>Captain / Agent</option>
              <option>General Query</option>
            </select>
            <textarea placeholder="Your Message / Query" rows="5" className="w-full border p-3 rounded"></textarea>
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
              Send My Query
            </button>
          </form>
        ) : (
          <div className="text-center bg-green-100 text-green-800 p-6 rounded">
            🎉 Thanks for reaching out! Our team will get back to you within 24 hours.
          </div>
        )}
      </div>
    </section>
  );
}
