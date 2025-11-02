"use client";
import Link from "next/link";
import Image from "next/image";

export default function TourPackages() {
  const packages = [
    {
      id: 1,
      title: "Rajasthan Royal Escape",
      duration: "6 Days",
      price: 30000,
      image: "https://source.unsplash.com/400x300/?rajasthan,fort",
    },
    {
      id: 2,
      title: "Himalayan Trek Adventure",
      duration: "7 Days",
      price: 35000,
      image: "https://source.unsplash.com/400x300/?himalayas,trek",
    },
    {
      id: 3,
      title: "Kerala Backwaters Retreat",
      duration: "5 Days",
      price: 25000,
      image: "https://source.unsplash.com/400x300/?kerala,houseboat",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
        Tour Packages ✈️
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore hand-crafted itineraries designed for comfort, adventure, and memorable experiences.
      </p>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 mb-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <div className="relative w-full h-52">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {pkg.title}
              </h3>
              <p className="text-gray-500">{pkg.duration}</p>
              <p className="text-purple-700 font-bold">
                ₹{pkg.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Earn 
                <span className="font-semibold">
                  {Math.floor(pkg.price * 0.1)}
                </span>{" "}
                Coins (₹{(pkg.price * 0.1).toLocaleString()} value)
              </p>

              <div className="mt-4 flex gap-3">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                  Book Now
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/trips/tour-packages"
        className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-yellow-300 transition"
      >
        View All Tour Packages →
      </Link>
    </section>
  );
}
