// lib/blobTrips.ts
import { put, list } from "@vercel/blob";

export type Trip = {
  id: string;
  slug: string;
  title: string;
  location?: string;
  price?: number;
  duration?: string;         // e.g. "3N/4D"
  image?: string;
  description?: string;
  inclusions?: string;       // newline separated
  exclusions?: string;       // newline separated
  mealsPerDay?: number;      // 1 | 2 | 3
  startDates?: string[];     // ISO date strings
  itinerary?: Array<{ day: number; title?: string; details?: string }>;
  createdAt: string;
};

const STORE_KEY = "data/trips.json";
const TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

/** Load current trips array from Blob (or return empty array) */
async function readTrips(): Promise<Trip[]> {
  const { blobs } = await list({
    prefix: STORE_KEY,
    token: TOKEN,
  });

  if (!blobs.length) return [];
  const res = await fetch(blobs[0].url, { cache: "no-store" });
  if (!res.ok) return [];
  return (await res.json()) as Trip[];
}

/** Save trips array back to Blob (overwrites the same key) */
async function saveTrips(trips: Trip[]) {
  await put(STORE_KEY, JSON.stringify(trips, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
    token: TOKEN,
  });
}

/** Public API */
export async function listTrips(): Promise<Trip[]> {
  return await readTrips();
}

export async function getTripBySlug(slug: string): Promise<Trip | null> {
  const trips = await readTrips();
  return trips.find((t) => t.slug === slug) ?? null;
}

export async function createTrip(
  partial: Omit<Partial<Trip>, "id" | "createdAt">
): Promise<Trip> {
  const trips = await readTrips();

  const newTrip: Trip = {
    id: crypto.randomUUID(),
    slug: String(partial.slug),
    title: String(partial.title),
    location: partial.location ?? "",
    price: partial.price ? Number(partial.price) : 0,
    duration: partial.duration ?? "",
    image: partial.image ?? "",
    description: partial.description ?? "",
    inclusions: partial.inclusions ?? "",
    exclusions: partial.exclusions ?? "",
    mealsPerDay:
      typeof partial.mealsPerDay === "number" ? partial.mealsPerDay : undefined,
    startDates: Array.isArray(partial.startDates) ? partial.startDates : [],
    itinerary: Array.isArray(partial.itinerary) ? partial.itinerary : [],
    createdAt: new Date().toISOString(),
  };

  // put newest at the top
  trips.unshift(newTrip);
  await saveTrips(trips);
  return newTrip;
}
