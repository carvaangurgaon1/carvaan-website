"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Trip = {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  durationLabel: string;
  image: string;
};

export default function GroupTripsSection() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/trips", { cache: "no-store" });
        const data: any[] = await res.json();
        if (!cancelled) {
          const simplified = data.slice(0, 3).map(t => ({
            id: t.id,
            slug: t.slug,
            title: t.title,
            location: t.location,
            price: t.price,
            durationLabel: t.durationLabel,
            image: t.image,
          }));
          setTrips(simplified);
        }
      } catch {
        // ignore – will show fallback below if empty
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const fallback = [
    {
      id: "1",
      slug: "leh-ladakh-expedition-2025-01-01",
      title: "Leh Ladakh Expedition",
      location: "Ladakh",
      price: 24999,
      durationLabel: "7 Days",
      image: "https://source.unsplash.com/400x300/?ladakh,india",
    },
    {
      id: "2",
      slug: "kasol-kheerganga-2025-01-01",
      title: "Kasol & Kheerganga Trek",
      location: "Himachal",
      price: 11499,
      durationLabel: "5 Days",
      image: "https://source.unsplash.com/400x300/?kasol,trek",
    },
    {
      id: "3",
      slug: "goa-beach-getaway-2025-01-01",
      title: "Goa Beach Getaway",
      location: "Goa",
      price: 15999,
      durationLabel: "4 Days",
      image: "https://source.unsplash.com/400x300/?goa,beach",
    },
  ];

  const list = trips.length ? trips : fallback;

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Group Trips 🚐</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Join handpicked community trips — make new friends, explore destinations, and travel the Carvaan way.</p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        {list.map(trip => (
          <div key={trip.id} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
            <div className="relative w-full h-52">
              <Image src={trip.image} alt={trip.title} fill className="object-cover" />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{trip.title}</h3>
              <p className="text-gray-500">{trip.location}</p>
              <p className="text-purple-700 font-bold mt-2">₹{trip.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500">{trip.durationLabel}</p>
              <div className="mt-4">
                <Link href={`/trips/group-trips/${trip.slug}`} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/trips/group-trips" className="bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-300 transition">
          View All Group Trips →
        </Link>
      </div>
    </section>
  );
}
