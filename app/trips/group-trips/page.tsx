// app/trips/group-trips/page.tsx
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getAllTrips() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/trips`, {
    cache: "no-store",
  }).catch(() => null);
  if (!res || !res.ok) return [];
  return res.json();
}

export default async function GroupTripsPage() {
  const trips: any[] = await getAllTrips();

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <section className="text-center py-12 bg-gradient-to-r from-pink-50 to-purple-50 mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">All Group Trips 🚐✨</h1>
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

      <section className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.length > 0 ? (
          trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden">
              <img
                src={trip.image || "https://placehold.co/600x400?text=Trip"}
                alt={trip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{trip.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{trip.location}</p>
                <p className="text-gray-700 text-sm mt-2">{trip.duration}</p>
                {typeof trip.price === "number" && (
                  <p className="text-pink-600 font-bold mt-2">₹{trip.price.toLocaleString()}</p>
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
        ) : (
          <p className="text-center text-gray-500 col-span-full">No trips yet.</p>
        )}
      </section>
    </main>
  );
}
