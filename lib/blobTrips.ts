// lib/blobTrips.ts
import { put, list } from "@vercel/blob";

export type Trip = {
  id: string;
  slug: string;
  title: string;
  location?: string;
  duration?: string;
  mealsPerDay?: number;
  price?: number;
  description?: string;
  inclusions?: string;
  exclusions?: string;
  itinerary?: { day: number; title?: string; details?: string }[];
  startDates?: string[];
  image?: string;
};

const BUCKET_PREFIX = "trips/";
const INDEX_KEY = `${BUCKET_PREFIX}index.json`;

async function readIndex(): Promise<Trip[]> {
  const files = await list({ prefix: INDEX_KEY });
  const index = files.blobs.find((b) => b.pathname === INDEX_KEY);
  if (!index) return [];
  const res = await fetch(index.url, { cache: "no-store" });
  if (!res.ok) return [];
  return (await res.json()) as Trip[];
}

async function writeIndex(trips: Trip[]) {
  await put(INDEX_KEY, JSON.stringify(trips, null, 2), {
    contentType: "application/json",
    access: "public",
  });
}

export async function getTrips(): Promise<Trip[]> {
  return readIndex();
}

export async function getTripBySlug(slug: string): Promise<Trip | null> {
  const trips = await readIndex();
  return trips.find((t) => t.slug === slug) ?? null;
}

export async function createTrip(trip: Trip): Promise<Trip> {
  const trips = await readIndex();
  const exists = trips.find((t) => t.slug === trip.slug);
  if (exists) {
    // overwrite
    const updated = trips.map((t) => (t.slug === trip.slug ? trip : t));
    await writeIndex(updated);
    return trip;
  } else {
    const next = [trip, ...trips];
    await writeIndex(next);
    return trip;
  }
}
