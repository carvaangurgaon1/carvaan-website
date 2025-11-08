// app/trips/group-trips/page.tsx
import TripsGrid from './ui/TripsGrid';

async function getTrips() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/trips`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function GroupTripsPage() {
  const trips = await getTrips(); // array of index entries

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <section className="text-center py-12 bg-gradient-to-r from-pink-50 to-purple-50 mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">All Group Trips 🚐✨</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Find your next adventure — filter by location, budget, or vibe.</p>
        <a
          href="/trips"
          className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Trips
        </a>
      </section>

      <TripsGrid initialTrips={trips} />
    </main>
  );
}
