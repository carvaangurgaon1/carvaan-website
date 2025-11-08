// app/trips/group-trips/page.tsx
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function fetchTrips() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/trips`, {
    cache: "no-store",
  }).catch(() => null);

  // Fallback to relative fetch on serverless (works on Vercel too)
  if (!res || !res.ok) {
    const alt = await fetch("/api/trips", { cache: "no-store" }).catch(() => null);
    if (!alt || !alt.ok) return [];
    return alt.json();
  }
  return res.json();
}

export default async function GroupTripsPage() {
  const trips = await fetchTrips();

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero / Header */}
      <section className="text-center py-12 bg-gradient-to-r from-pink-50 to-purple-50 mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">
          All Group Trips 🚐✨
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find your next adventure — filter by location, budget, or vibe.
        </p>
        <Link
          href="/trips"
          className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Trips
        </Link>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {!trips || trips.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No trips available yet.
          </p>
        ) : (
          trips.map((trip: any) => (
            <div
              key={trip.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={trip.image || "https://placehold.co/600x400?text=Trip"}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {trip.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{trip.location}</p>
                {trip.duration && (
                  <p className="text-gray-700 text-sm mt-1">{trip.duration}</p>
                )}
                {typeof trip.price === "number" && (
                  <p className="text-pink-600 font-bold mt-2">
                    ₹{trip.price.toLocaleString()}
                  </p>
                )}
                <Link
                  href={`/trips/group-trips/${trip.slug}`}
                  className="inline-block mt-3 text-pink-600 hover:text-purple-600 font-semibold"
                >
                  View Itinerary →
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
