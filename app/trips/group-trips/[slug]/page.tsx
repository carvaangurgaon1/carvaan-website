// app/trips/group-trips/[slug]/page.tsx
import { getTripBySlug } from '@/lib/blobTrips';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function TripDetailPage({ params }: { params: { slug: string } }) {
  const trip = await getTripBySlug(params.slug);
  if (!trip) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-80 w-full">
        <Image src={trip.image} alt={trip.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold">{trip.title}</h1>
          <p className="opacity-90">{trip.location}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{trip.description || '—'}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-2">Inclusions</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{trip.inclusions || '—'}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold mb-2">Exclusions</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{trip.exclusions || '—'}</p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow">
            <p className="text-sm text-gray-500">Starts from</p>
            <p className="text-2xl font-bold text-pink-600">₹{trip.price.toLocaleString()}</p>
            <p className="text-gray-600">{trip.durationLabel}</p>

            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Upcoming Dates</p>
              <ul className="text-sm text-gray-700 list-disc ml-5">
                {trip.startDates?.length
                  ? trip.startDates.map((d) => <li key={d}>{new Date(d).toDateString()}</li>)
                  : <li>To be announced</li>}
              </ul>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition">
              Book This Trip
            </button>
          </div>

          <Link href="/trips/group-trips" className="block text-center bg-white rounded-xl p-3 shadow hover:bg-gray-50">
            ← Back to All Group Trips
          </Link>
        </aside>
      </div>
    </main>
  );
}
