// app/trips/components/TourPackages.js
export default function TourPackages() {
  const packages = [
    { id: 1, title: "Rajasthan Royal Escape", duration: "6 Days", price: 30000, image: "/rajasthan.jpg" },
    { id: 2, title: "Himalayan Trek", duration: "7 Days", price: 35000, image: "/himalaya.jpg" },
    { id: 3, title: "Kerala Backwaters", duration: "5 Days", price: 25000, image: "/kerala.jpg" },
 ],
};

import Link from "next/link";

export default function TourPackages() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Tour Packages ✈️</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore handpicked tour packages designed for comfort, adventure, and unforgettable memories.
      </p>

      {/* Example: Preview 3 tour packages */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        {[1, 2, 3].map((pkg) => (
          <div
            key={pkg}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <img
              src={`https://source.unsplash.com/400x250/?holiday,${pkg}`}
              alt="Tour Package"
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Kashmir Escape {pkg}
            </h3>
            <p className="text-gray-600 text-sm mt-2">Starts from ₹12,499</p>
          </div>
        ))}
      </div>

      {/* 🔗 Add navigation link to Tour Packages Sub Page */}
      <Link
        href="/trips/tour-packages"
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        View All Tour Packages →
      </Link>
    </section>
  );
}

