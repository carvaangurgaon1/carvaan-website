"use client";
import Link from "next/link";
import Image from "next/image";

export default function GroupTripsSection() {
  const trips = [
    {
      id: 1,
      title: "Leh Ladakh Expedition",
      location: "Ladakh",
      price: "₹24,999",
      image: "https://source.unsplash.com/400x300/?ladakh,india",
      duration: "7 Days",
    },
    {
      id: 2,
      title: "Kasol & Kheerganga Trek",
      location: "Himachal",
      price: "₹11,499",
      image: "https://source.unsplash.com/400x300/?kasol,trek",
      duration: "5 Days",
    },
    {
      id: 3,
      title: "Goa Beach Getaway",
      location: "Goa",
      price: "₹15,999",
      image: "https://source.unsplash.com/400x300/?goa,beach",
      duration: "4 Days",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
        Group Trips 🚐
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Join handpicked community trips — make new friends, explore destinations, and travel the Carvaan way.
      </p>

      {/* Trip Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <div className="relative w-full h-52">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {trip.title}
              </h3>
              <p className="text-gray-500">{trip.location}</p>
              <p className="text-purple-700 font-bold mt-2">{trip.price}</p>
              <p className="text-sm text-gray-500">{trip.duration}</p>

              <div className="mt-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12">
        <Link
          href="/trips/group-trips"
          className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-300 transition"
        >
          View All Group Trips →
        </Link>
      </div>
    </section>
  );
}
