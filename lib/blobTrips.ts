// lib/blobTrips.ts
import { put, list } from "@vercel/blob";

export type ItineraryDay = { day: number; title?: string; details?: string };

export type Trip = {
  id: string;
  slug: string;
  title: string;
  location?: string;
  duration?: string;      // e.g. "3N/4D"
  price?: number;         // per person
  image?: string;
  mealsPerDay?: number;   // 1 | 2 | 3
  startDates?: string[];  // ISO yyyy-mm-dd[]
  description?: string;
  inclusions?: string;
  exclusions?: string;
  itinerary?: ItineraryDay[];
  createdAt: string;      // ISO
  updatedAt: string;      // ISO
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const PREFIX = "trips/";

/**
 * Write a trip to Vercel Blob as public JSON.
 * Returns the saved trip (with id/slug timestamps) and the blob URL.
 */
export async function createTrip(input: Partial<Trip>): Promise<Trip> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Missing BLOB_READ_WRITE_TOKEN");
  }

  const now = new Date().toISOString();
  const slugBase = input.title ? slugify(input.title) : "trip";
  const slug = input.slug ? slugify(input.slug) : `${slugBase}-${Date.now()}`;
  const id = input.id ?? `${Date.now()}`;

  const trip: Trip = {
    id,
    slug,
    title: input.title ?? "Untitled Trip",
    location: input.location ?? "",
    duration: input.duration ?? "",
    price: input.price ?? 0,
    image: input.image ?? "",
    mealsPerDay: input.mealsPerDay ?? 1,
    startDates: input.startDates ?? [],
    description: input.description ?? "",
    inclusions: input.inclusions ?? "",
    exclusions: input.exclusions ?? "",
    itinerary: input.itinerary ?? [],
    createdAt: now,
    updatedAt: now,
  };

  const pathname = `${PREFIX}${slug}.json`;

  await put(pathname, JSON.stringify(trip), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });

  return trip;
}

/** Read all trips (fast enough for small lists). */
export async function getTrips(): Promise<Trip[]> {
  const res = await list({ prefix: PREFIX });
  const trips: Trip[] = [];
  for (const b of res.blobs) {
    const r = await fetch(b.url, { cache: "no-store" });
    const t = (await r.json()) as Trip;
    trips.push(t);
  }
  // newest first
  trips.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
  return trips;
}

/** Read one trip by slug. */
export async function getTripBySlug(slug: string): Promise<Trip | null> {
  const res = await list({ prefix: PREFIX });
  const blob = res.blobs.find((b) => b.pathname === `${PREFIX}${slug}.json`);
  if (!blob) return null;
  const r = await fetch(blob.url, { cache: "no-store" });
  return (await r.json()) as Trip;
}
