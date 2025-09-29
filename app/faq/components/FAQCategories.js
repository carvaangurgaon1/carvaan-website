"use client";
import { useState } from "react";

const categories = {
  "General Travel with Carvaan": [
    { q: "What is Carvaan?", a: "Carvaan is a group travel marketplace connecting explorers & captains." },
    { q: "Who can book trips?", a: "Friends, families, corporates, and solo travelers are all welcome!" },
    { q: "How do I find the right trip?", a: "Browse trips by theme, squad size, or destination." },
    { q: "What’s the difference between tour and corporate packages?", a: "Tour = leisure groups, Corporate = customized company retreats." },
  ],
  "Bookings & Payments": [
    { q: "How do I book a trip?", a: "Select a package → pay securely online → receive confirmation instantly." },
    { q: "Which payment methods are accepted?", a: "UPI, cards, netbanking, and EMI options." },
    { q: "Is there an EMI option?", a: "Yes, available on select trips." },
    { q: "What happens if I cancel?", a: "Refunds depend on the cancellation policy of that trip." },
  ],
  "Carvaan Coins": [
    { q: "How do I earn coins?", a: "₹1 spent = 1 coin, added automatically." },
    { q: "Do coins expire?", a: "Yes, after 12 months." },
    { q: "How do I redeem coins?", a: "Apply at checkout, max ₹2,500 per booking." },
    { q: "Are coins valid on corporate trips?", a: "Yes, all trips earn and redeem coins." },
  ],
  "Group Captains & Agents": [
    { q: "Who are the trip captains?", a: "Experienced leaders who guide & host group trips." },
    { q: "Can I become a Captain?", a: "Yes, apply via the Captains Program page." },
    { q: "How do travel agents join?", a: "Agents can onboard via the Carvaan Partner Portal." },
  ],
  "Corporate Travel": [
    { q: "What are corporate packages?", a: "Tailored retreats & offsites for companies." },
    { q: "Can we customize trips?", a: "Yes, fully customized as per your team’s needs." },
    { q: "Do corporate bookings earn coins?", a: "Yes, just like regular trips." },
  ],
  "Support & Policies": [
    { q: "How do I contact Carvaan?", a: "WhatsApp, email, or call support anytime." },
    { q: "What is the refund policy?", a: "Depends on booking terms; listed in trip details." },
    { q: "Is travel insurance included?", a: "Some trips include insurance; others can be added." },
  ],
};

export default function FAQCategories() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs by Category</h2>
      {Object.entries(categories).map(([cat, faqs], i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold mb-4">{cat}</h3>
          {faqs.map((faq, j) => (
            <div key={j} className="mb-2">
              <button
                className="w-full text-left bg-white p-4 rounded shadow"
                onClick={() =>
                  setOpen(open === `${i}-${j}` ? null : `${i}-${j}`)
                }
              >
                {faq.q}
              </button>
              {open === `${i}-${j}` && (
                <div className="p-4 bg-gray-100 rounded flex justify-between">
                  <span>{faq.a}</span>
                  <div className="flex items-center gap-2 ml-4">
                    <button>👍</button>
                    <button>👎</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
