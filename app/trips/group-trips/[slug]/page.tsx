// app/trips/group-trips/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTripBySlug } from "@/lib/blobTrips";

export const dynamic = "force-dynamic";

type TripDetailProps = {
  params: { slug: string };
};

export default async function TripDetailPage({ params }: TripDetailProps) {
  const slug = params.slug;
  const trip = await getTripBySlug(slug);

  if (!trip) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/trips/group-trips"
            className="text-sm text-purple-700 hover:text-purple-900"
          >
            ← Back to Group Trips
          </Link>
          <span className="text-xs text-gray-500">Slug: {slug}</span>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-8">
        <div className="relative w-full h-72 lg:h-96 rounded-2xl overflow-hidden shadow">
          <Image
            src={trip.image || "https://placehold.co/800x500?text=Trip+Image"}
            alt={trip.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {trip.title}
          </h1>
          <p className="text-gray-600 mt-2">{trip.location}</p>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Duration</p>
              <p className="font-semibold">{trip.duration || "—"}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Meals / Day</p>
              <p className="font-semibold">
                {trip.mealsPerDay ? `${trip.mealsPerDay} meals` : "—"}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Price / Person</p>
              <p className="font-semibold">
                ₹{Number(trip.price || 0).toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Active Dates</p>
              <p className="font-semibold">
                {trip.startDates?.length
                  ? `${trip.startDates.length} dates`
                  : "—"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
