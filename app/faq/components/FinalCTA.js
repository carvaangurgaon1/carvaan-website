"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Thanks! We’ll respond within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 700);
  };

  return (
    <section className="max-w-4xl mx-auto mt-12 px-4">
      <div className="bg-white rounded-lg border shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Didn’t find your answer? Submit a Question
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="border rounded px-4 py-2"
            />
            <input
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              type="email"
              className="border rounded px-4 py-2"
            />
          </div>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone (optional)"
            className="border rounded px-4 py-2"
          />

          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your question..."
            rows={5}
            className="border rounded px-4 py-2"
          />

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              We reply within 24 hours — faster on WhatsApp.
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
