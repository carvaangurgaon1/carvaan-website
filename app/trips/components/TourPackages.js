// app/trips/components/TourPackages.js
import Link from "next/link";

export default function TourPackages() {
  const packages = [
    {
      id: 1,
      title: "Rajasthan Royal Escape",
      duration: "6 Days",
      price: 30000,
      image: "/rajasthan.jpg",
    },
    {
      id: 2,
      title: "Himalayan Trek",
      duration: "7 Days",
      price: 35000,
      image: "/himalaya.jpg",
    },
    {
      id: 3,
      title: "Kerala Backwaters",
      duration: "5 Days",
      price: 25000,
      image: "/kerala.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-purple-600 mb-4">
        Tour Packages ✈️
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore handpicked tour packages designed for comfort, adventure, and
        unforgettable memories.
      </p>

      {/* Package Preview Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-gray-500">{pkg.duration}</p>
              <p className="text-purple-600 font-bold mt-1">
                ₹{pkg.price.toLocaleString()}
              </p>

              {/* Reward Coins Info */}
              <p className="text-sm text-gray-600 mt-1">
                Earn{" "}
                <span className="font-semibold">
                  {Math.floor(pkg.price * 0.1)}
                </span>{" "}
                Coins (₹{(pkg.price * 0.1).toLocaleString()} value)
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                  Book Now
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔗 CTA Link to Tour Packages Sub Page */}
      <Link
        href="/trips/tour-packages"
        className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        View All Tour Packages →
      </Link>
    </section>
  );
}
