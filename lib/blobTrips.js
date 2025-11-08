// lib/blobTrips.js
import { put, list } from "@vercel/blob";

/**
 * We keep a single JSON file in Vercel Blob: "trips.json"
 * Shape: { trips: Trip[] }
 * where Trip = { slug, title, location, price, duration, image, createdAt, ... }
 */

const BUCKET_KEY = "trips.json";

/** Load the trips JSON from Blob (or return empty on first run) */
export async function loadTrips() {
  // List blobs named "trips.json"; if none, return empty structure
  const blobs = await list({ prefix: BUCKET_KEY });
  const found = blobs.blobs.find((b) => b.pathname === BUCKET_KEY);

  if (!found) return { trips: [] };

  const res = await fetch(found.url);
  if (!res.ok) return { trips: [] };
  const data = await res.json().catch(() => ({ trips: [] }));
  if (!data || !Array.isArray(data.trips)) return { trips: [] };
  return data;
}

/** Save trips back to Blob (overwrite) */
export async function saveTrips(data) {
  // data must be { trips: [...] }
  await put(BUCKET_KEY, JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
  });
}

/** Generate a slug from title (unique-ish) */
export function toSlug(title) {
  const base =
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "trip";
  const stamp = Math.random().toString(36).slice(2, 7);
  return `${base}-${stamp}`;
}

/** Public helpers */
export async function getTrips() {
  const { trips } = await loadTrips();
  return trips;
}

export async function getTripBySlug(slug) {
  const { trips } = await loadTrips();
  return trips.find((t) => t.slug === slug) || null;
}

export async function createTrip(partialTrip) {
  const { trips } = await loadTrips();

  const slug = partialTrip.slug || toSlug(partialTrip.title || "Untitled");
  const newTrip = {
    slug,
    title: partialTrip.title || "Untitled Trip",
    location: partialTrip.location || "",
    price: partialTrip.price ?? 0,
    duration: partialTrip.duration || "",
    image: partialTrip.image || "",
    category: partialTrip.category || "",
    startDates: Array.isArray(partialTrip.startDates)
      ? partialTrip.startDates
      : [],
    meals: partialTrip.meals || "",
    description: partialTrip.description || "",
    itinerary: partialTrip.itinerary || "",
    createdAt: new Date().toISOString(),
  };

  trips.unshift(newTrip);
  await saveTrips({ trips });
  return newTrip;
}
