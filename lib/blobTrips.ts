// lib/blobTrips.ts
import { put, list } from "@vercel/blob";

// ---------- Types ----------
export type ItineraryDay = {
  day: number;
  title?: string;
  details?: string;
};

export type Trip = {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;             // price per person
  duration: string;          // e.g. "3N/4D"
  image?: string;
  mealsPerDay?: number;      // 0 | 1 | 2 | 3
  startDates: string[];      // ISO strings
  description?: string;
  inclusions?: string;       // newline-separated list
  exclusions?: string;       // newline-separated list
  itinerary: ItineraryDay[];
};

// ---------- Internal helpers ----------
const FILE_NAME = "trips.json";

/**
 * Read trips array from Vercel Blob. Returns [] if not found.
 */
async function readTrips(): Promise<Trip[]> {
  const { blobs } = await list({ prefix: FILE_NAME });
  const existing = blobs.find((b) => b.pathname === FILE_NAME);
  if (!existing) return [];
  const res = await fetch(existing.url, { cache: "no-store" });
  if (!res.ok) return [];
  return (await res.json()) as Trip[];
}

/**
 * Write trips array to Vercel Blob at a stable key.
 */
async function writeTrips(trips: Trip[]) {
  await put(FILE_NAME, JSON.stringify(trips, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false, // keep a stable pathname
  });
}

// ---------- Public API ----------
export async function getTrips(): Promise<Trip[]> {
  return readTrips();
}

export async function getTripBySlug(slug: string): Promise<Trip | null> {
  const trips = await readTrips();
  return trips.find((t) => t.slug === slug) ?? null;
}

export type CreateTripInput = Partial<Trip> & {
  title: string;
};

/**
 * Create a new trip and persist it.
 */
export async function createTrip(input: CreateTripInput): Promise<Trip> {
  const trips = await readTrips();

  const id = (globalThis.crypto ?? require("crypto")).randomUUID();
  const baseSlug =
    input.slug ??
    (input.title || "trip")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  const slug = `${baseSlug}-${id.slice(0, 6)}`;

  const trip: Trip = {
    id,
    slug,
    title: input.title,
    location: input.location ?? "",
    price: typeof input.price === "number" ? input.price : 0,
    duration: input.duration ?? "",
    image: input.image ?? "",
    mealsPerDay:
      typeof input.mealsPerDay === "number" ? input.mealsPerDay : undefined,
    startDates: Array.isArray(input.startDates) ? input.startDates : [],
    description: input.description ?? "",
    inclusions: input.inclusions ?? "",
    exclusions: input.exclusions ?? "",
    itinerary: Array.isArray(input.itinerary) ? input.itinerary : [],
  };

  // Add newest first
  trips.unshift(trip);
  await writeTrips(trips);
  return trip;
}
