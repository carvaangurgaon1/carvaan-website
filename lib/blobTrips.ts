// lib/blobTrips.ts
import { put, list, del } from '@vercel/blob';
import 'server-only';

export type Trip = {
  slug: string;
  title: string;
  location: string;
  category: string;
  price: number;            // in INR
  durationLabel: string;    // e.g. "3N/4D"
  image: string;            // URL
  startDates: string[];     // ["2025-12-05", ...]
  description?: string;
  inclusions?: string;
  exclusions?: string;
  createdAt: string;
};

// Helpers
const STORE_PREFIX = 'trips';

export function toSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function saveTrip(data: Omit<Trip, 'slug' | 'createdAt'> & { slug?: string }) {
  const baseSlug = data.slug ? toSlug(data.slug) : toSlug(data.title);
  const unique = `${baseSlug}-${Date.now().toString(36)}`;
  const slug = unique;

  const trip: Trip = {
    slug,
    title: data.title,
    location: data.location,
    category: data.category,
    price: data.price,
    durationLabel: data.durationLabel,
    image: data.image,
    startDates: data.startDates || [],
    description: data.description || '',
    inclusions: data.inclusions || '',
    exclusions: data.exclusions || '',
    createdAt: new Date().toISOString(),
  };

  const key = `${STORE_PREFIX}/${slug}.json`;
  await put(key, JSON.stringify(trip), {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    contentType: 'application/json',
  });

  // also update the index list (small append-only index)
  await upsertIndexEntry(trip);
  return trip;
}

type TripIndex = Pick<
  Trip,
  'slug' | 'title' | 'location' | 'category' | 'price' | 'durationLabel' | 'image' | 'createdAt'
>;

const INDEX_KEY = `${STORE_PREFIX}/index.json`;

async function getIndex(): Promise<TripIndex[]> {
  try {
    const files = await list({ prefix: INDEX_KEY, token: process.env.BLOB_READ_WRITE_TOKEN! });
    if (files.blobs.length === 0) return [];
    const res = await fetch(files.blobs[0].url, { cache: 'no-store' });
    if (!res.ok) return [];
    return (await res.json()) as TripIndex[];
  } catch {
    return [];
  }
}

async function upsertIndexEntry(trip: Trip) {
  const current = await getIndex();
  const idxEntry: TripIndex = {
    slug: trip.slug,
    title: trip.title,
    location: trip.location,
    category: trip.category,
    price: trip.price,
    durationLabel: trip.durationLabel,
    image: trip.image,
    createdAt: trip.createdAt,
  };
  const next = [idxEntry, ...current.filter(t => t.slug !== trip.slug)];
  await put(INDEX_KEY, JSON.stringify(next), {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    contentType: 'application/json',
  });
}

export async function getAllTrips(): Promise<TripIndex[]> {
  return getIndex();
}

export async function getTripBySlug(slug: string): Promise<Trip | null> {
  try {
    const key = `${STORE_PREFIX}/${slug}.json`;
    // locate blob by listing (keeps us decoupled from raw URL building)
    const files = await list({ prefix: key, token: process.env.BLOB_READ_WRITE_TOKEN! });
    if (files.blobs.length === 0) return null;
    const res = await fetch(files.blobs[0].url, { cache: 'no-store' });
    if (!res.ok) return null;
    return (await res.json()) as Trip;
  } catch {
    return null;
  }
}

// Optional: delete a trip (not used yet)
export async function deleteTrip(slug: string) {
  const key = `${STORE_PREFIX}/${slug}.json`;
  await del(key, { token: process.env.BLOB_READ_WRITE_TOKEN! });
  const index = await getIndex();
  const next = index.filter(t => t.slug !== slug);
  await put(INDEX_KEY, JSON.stringify(next), {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    contentType: 'application/json',
  });
}
