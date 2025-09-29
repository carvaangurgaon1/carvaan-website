"use client";
import { useState } from "react";

const faqs = [
  { q: "How do I earn Carvaan Coins?", a: "For every ₹1 spent, you earn 1 coin." },
  { q: "Do coins expire?", a: "Coins are valid for 12 months from earning date." },
  { q: "Can I combine coins with discounts?", a: "Yes, but redemption is capped at ₹2,500 per booking." },
  { q: "Are corporate trips eligible?", a: "Yes, all trips earn coins!" },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">FAQs ❓</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4">
            <button
              className="w-full text-left bg-white p-4 rounded shadow"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {faq.q}
            </button>
            {open === i && (
              <div className="p-4 bg-gray-100 rounded">{faq.a}</div>
            )}
          </div>
        ))}
        <div className="text-center mt-6">
          <a
            href="https://wa.me/919999999999"
            className="px-6 py-3 bg-green-500 text-white rounded"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
