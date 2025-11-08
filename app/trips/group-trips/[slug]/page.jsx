// app/trips/group-trips/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTripBySlug } from "@/lib/blobTrips";

export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const slug = params?.slug;
  if (!slug) notFound();

  const trip = await getTripBySlug(slug);
  if (!trip) notFound();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/trips/group-trips" className="text-sm text-purple-700 hover:text-purple-900">
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{trip.title}</h1>
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
              <p className="font-semibold">₹{Number(trip.price || 0).toLocaleString()}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Active Dates</p>
              <p className="font-semibold">
                {Array.isArray(trip.startDates) && trip.startDates.length > 0
                  ? `${trip.startDates.length} dates`
                  : "—"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#book" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition">
              Book This Trip
            </a>
            <a href="#itinerary" className="border border-purple-200 text-purple-700 px-5 py-2.5 rounded-lg hover:bg-purple-50 transition">
              View Itinerary
            </a>
          </div>
        </div>
      </section>

      {trip.description && (
        <section className="max-w-6xl mx-auto px-6 py-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700 leading-7 whitespace-pre-wrap">{trip.description}</p>
          </div>
        </section>
      )}

      {(trip.inclusions || trip.exclusions) && (
        <section className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-6">
          {trip.inclusions && (
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Inclusions</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 whitespace-pre-wrap">
                {trip.inclusions.split("\n").map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
          )}
          {trip.exclusions && (
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Exclusions</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 whitespace-pre-wrap">
                {trip.exclusions.split("\n").map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
          )}
        </section>
      )}

      {Array.isArray(trip.itinerary) && trip.itinerary.length > 0 && (
        <section id="itinerary" className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Itinerary</h2>
            <ol className="space-y-4">
              {trip.itinerary.map((day, idx) => (
                <li key={idx} className="border-l-4 border-purple-300 pl-4 py-1">
                  <p className="font-semibold">
                    Day {day.day}{day.title ? ` — ${day.title}` : ""}
                  </p>
                  {day.details && <p className="text-gray-700 mt-1 whitespace-pre-wrap">{day.details}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {Array.isArray(trip.startDates) && trip.startDates.length > 0 && (
        <section id="book" className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Select a Start Date</h2>
            <div className="flex flex-wrap gap-3">
              {trip.startDates.map((d, i) => (
                <button key={i} className="px-4 py-2 rounded-lg border hover:bg-purple-50">
                  {new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
