// app/trips/group-trips/[slug]/page.js
import Image from "next/image";

async function fetchTrip(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/trips`, {
    cache: "no-store",
  });
  const data = await res.json();
  const trips = Array.isArray(data.trips) ? data.trips : [];
  return trips.find((t) => t.slug === slug) || null;
}

export default async function TripDetail({ params }) {
  const { slug } = params;
  const trip = await fetchTrip(slug);

  if (!trip) {
    return (
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Trip not found</h1>
        <p className="text-gray-600 mt-2">The trip you’re looking for doesn’t exist.</p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow">
        <Image
          src={trip.image || "https://placehold.co/1200x600?text=Trip"}
          alt={trip.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mt-6">{trip.title}</h1>
      <p className="text-gray-600 mt-2">{trip.location}</p>

      {trip.price ? (
        <p className="text-2xl font-semibold text-purple-700 mt-3">
          ₹{Number(trip.price).toLocaleString()}
        </p>
      ) : null}

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2 space-y-6">
          {trip.description && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700 whitespace-pre-line">{trip.description}</p>
            </section>
          )}

          {trip.itinerary && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Itinerary</h2>
              <pre className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border">
                {trip.itinerary}
              </pre>
            </section>
          )}
        </div>

        <aside className="bg-white rounded-xl border shadow p-4 h-fit">
          <h3 className="font-semibold text-gray-800 mb-2">Trip Details</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Duration:</strong> {trip.duration || "—"}</li>
            <li><strong>Meals:</strong> {trip.meals || "—"}</li>
            <li>
              <strong>Upcoming Dates:</strong>{" "}
              {Array.isArray(trip.startDates) && trip.startDates.length
                ? trip.startDates.join(", ")
                : "—"}
            </li>
            <li><strong>Category:</strong> {trip.category || "—"}</li>
          </ul>
          <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md">
            Book This Trip
          </button>
        </aside>
      </div>
    </main>
  );
}
