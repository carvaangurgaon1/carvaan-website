// app/trips/group-trips/[slug]/page.tsx
import Image from "next/image";

async function getTrip(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/trips/${slug}`, {
    cache: "no-store",
    // When NEXT_PUBLIC_BASE_URL is not set (local dev), fetch relative:
    next: { revalidate: 0 },
  }).catch(() => null);

  if (res && res.ok) return res.json();
  // Fallback to relative if BASE_URL not set
  const res2 = await fetch(`/api/trips/${slug}`, { cache: "no-store" }).catch(() => null as any);
  if (res2 && res2.ok) return res2.json();
  return null;
}

export default async function TripDetail({ params }: { params: { slug: string } }) {
  const trip = await getTrip(params.slug);
  if (!trip) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold">Trip not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow">
        <Image src={trip.image} alt={trip.title} fill className="object-cover" />
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-900">{trip.title}</h1>
        <p className="text-gray-600">{trip.location}</p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">{trip.durationLabel}</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">₹{trip.price.toLocaleString()}</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Start: {trip.startDate}</span>
        </div>

        {trip.description && (
          <>
            <h2 className="mt-8 text-xl font-semibold">Overview</h2>
            <p className="text-gray-700 mt-2 whitespace-pre-wrap">{trip.description}</p>
          </>
        )}

        {(trip.inclusions || trip.exclusions) && (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {trip.inclusions && (
              <div>
                <h3 className="font-semibold">Inclusions</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{trip.inclusions}</p>
              </div>
            )}
            {trip.exclusions && (
              <div>
                <h3 className="font-semibold">Exclusions</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{trip.exclusions}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
