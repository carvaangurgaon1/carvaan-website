// lib/blobTrips.ts
import { put, list } from "@vercel/blob";

export interface Trip {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  duration?: string;
  image?: string;
  description?: string;
  inclusions?: string;
  exclusions?: string;
  mealsPerDay?: number;
  startDates?: string[];
  itinerary?: { day: number; title?: string; details?: string }[];
  createdAt: string;
}

const TOKEN = process.env.BLOB_READ_WRITE_TOKEN!;
const FILE_KEY = "trips.json";

/** Get all trips stored in the Blob */
export async function getTrips(): Promise<Trip[]> {
  const blobs = await list({ token: TOKEN });
  const file = blobs.blobs.find((b) => b.pathname === FILE_KEY);
  if (!file) return [];
  const res = await fetch(file.url, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : data.trips ?? [];
}

/** Overwrite Blob data with updated trips */
export async function upsertTrips(trips: Trip[]): Promise<void> {
  await put(FILE_KEY, JSON.stringify(trips, null, 2), {
    access: "public",
    contentType: "application/json",
    token: TOKEN,
  });
}

/** Add a new trip entry */
export async function createTrip(input: Partial<Trip>): Promise<Trip> {
  const now = new Date().toISOString();
  const title = (input.title || "Untitled Trip").trim();
  const slugBase = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const slug = `${slugBase}-${Date.now().toString(36)}`;

  const newTrip: Trip = {
    id: crypto.randomUUID(),
    slug,
    title,
    location: input.location || "",
    price: Number(input.price || 0),
    duration: input.duration,
    image: input.image,
    description: input.description,
    inclusions: input.inclusions,
    exclusions: input.exclusions,
    mealsPerDay: input.mealsPerDay,
    startDates: input.startDates ?? [],
    itinerary: input.itinerary ?? [],
    createdAt: now,
  };

  const trips = await getTrips();
  trips.unshift(newTrip);
  await upsertTrips(trips);
  return newTrip;
}

/** Retrieve a single trip by slug */
export async function getTripBySlug(slug: string): Promise<Trip | undefined> {
  const trips = await getTrips();
  return trips.find((t) => t.slug === slug);
}
