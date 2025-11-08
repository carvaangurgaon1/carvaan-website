// lib/blobTrips.ts
import { get, put } from "@vercel/blob";

const KEY = "data/trips.json"; // a single JSON file in your Blob store

type TripRecord = {
  id: string;
  slug: string;
  title: string;
  location: string;
  category?: string;
  price: number;            // plain number for filters/sort
  durationLabel: string;    // e.g. "3N/4D"
  image: string;
  startDate: string;        // ISO date (one record per date)
  companyName?: string;
  transportation?: string;
  difficulty?: string;
  roomSharing?: string;
  ageRange?: string;
  description?: string;
  inclusions?: string;
  exclusions?: string;
  createdAt: string;        // ISO
};

export type { TripRecord };

async function readAll(): Promise<TripRecord[]> {
  try {
    const res = await get(KEY, { token: process.env.BLOB_READ_WRITE_TOKEN });
    const json = await fetch(res.url).then(r => r.json());
    return Array.isArray(json) ? json : [];
  } catch {
    // file doesn't exist yet
    return [];
  }
}

async function writeAll(trips: TripRecord[]) {
  await put(KEY, JSON.stringify(trips, null, 2), {
    access: "public",
    contentType: "application/json",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function createTripsFromAdmin(input: {
  title: string;
  location: string;
  category?: string;
  price: number;
  durationLabel: string;
  image: string;
  startDates: string[]; // array of ISO dates picked in admin
  companyName?: string;
  transportation?: string;
  difficulty?: string;
  roomSharing?: string;
  ageRange?: string;
  description?: string;
  inclusions?: string;
  exclusions?: string;
}) {
  const all = await readAll();
  const baseSlug = slugify(`${input.title}-${input.location}`);

  const newOnes: TripRecord[] = input.startDates.map((iso, idx) => {
    const slug = `${baseSlug}-${iso}`; // unique per date
    const id = `${slug}-${Date.now()}-${idx}`;
    return {
      id,
      slug,
      title: input.title,
      location: input.location,
      category: input.category,
      price: Number(input.price || 0),
      durationLabel: input.durationLabel,
      image: input.image,
      startDate: iso,
      companyName: input.companyName,
      transportation: input.transportation,
      difficulty: input.difficulty,
      roomSharing: input.roomSharing,
      ageRange: input.ageRange,
      description: input.description,
      inclusions: input.inclusions,
      exclusions: input.exclusions,
      createdAt: new Date().toISOString(),
    };
  });

  const merged = [...newOnes, ...all];
  // optional: de-dupe by slug if re-submitting same date/title/location
  const uniqueBySlug = Object.values(
    merged.reduce<Record<string, TripRecord>>((acc, t) => {
      acc[t.slug] = t;
      return acc;
    }, {})
  );

  await writeAll(uniqueBySlug);
  return newOnes;
}

export async function listTrips(): Promise<TripRecord[]> {
  const all = await readAll();
  // latest first
  return all.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
}

export async function getTripBySlug(slug: string) {
  const all = await readAll();
  return all.find(t => t.slug === slug) || null;
}
