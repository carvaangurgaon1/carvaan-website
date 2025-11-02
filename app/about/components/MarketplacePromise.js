"use client";
import { FiShield, FiUsers, FiSmile, FiCheckCircle } from "react-icons/fi";

export default function MarketplacePromise() {
  const promises = [
    {
      icon: <FiShield className="text-pink-600 text-3xl mb-3" />,
      title: "Verified & Safe",
      desc: "All travel partners and captains are verified through our strict screening process for reliability and safety.",
    },
    {
      icon: <FiUsers className="text-yellow-500 text-3xl mb-3" />,
      title: "Transparent Pricing",
      desc: "No hidden costs. No surprises. What you see is what you pay — fair and honest pricing every time.",
    },
    {
      icon: <FiSmile className="text-purple-600 text-3xl mb-3" />,
      title: "Personalized Experiences",
      desc: "Find trips that match your vibe, pace, and budget — designed to connect travelers, not just destinations.",
    },
    {
      icon: <FiCheckCircle className="text-green-500 text-3xl mb-3" />,
      title: "Trusted Community",
      desc: "Over 10,000+ travelers trust Carvaan — powered by real stories, verified reviews, and shared memories.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-12">
        The Marketplace Promise
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {promises.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100"
          >
            {p.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
