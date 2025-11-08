// lib/blobTrips.js
import { get, put } from "@vercel/blob";

const KEY = "data/trips.json";

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function readAll() {
  try {
    const res = await get(KEY, { token: process.env.BLOB_READ_WRITE_TOKEN });
    const json = await fetch(res.url).then((r) => r.json());
    return Array.isArray(json) ? json : [];
  } catch {
    return [];
  }
}

async function writeAll(trips) {
  await put(KEY, JSON.stringify(trips, null, 2), {
    access: "public",
    contentType: "application/json",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
}

export async function createTripsFromAdmin(input) {
  const all = await readAll();
  const baseSlug = slugify(`${input.title}-${input.location}`);

  const newOnes = (input.startDates || []).map((iso, idx) => {
    const slug = `${baseSlug}-${iso}`;
    const id = `${slug}-${Date.now()}-${idx}`;
    return {
      id,
      slug,
      title: input.title,
      location: input.location,
      category: input.category || "",
      price: Number(input.price || 0),
      durationLabel: input.durationLabel,
      image: input.image,
      startDate: iso,
      companyName: input.companyName || "",
      transportation: input.transportation || "",
      difficulty: input.difficulty || "",
      roomSharing: input.roomSharing || "",
      ageRange: input.ageRange || "",
      description: input.description || "",
      inclusions: input.inclusions || "",
      exclusions: input.exclusions || "",
      createdAt: new Date().toISOString(),
    };
  });

  const merged = [...newOnes, ...all];
  const uniqueBySlug = Object.values(
    merged.reduce((acc, t) => {
      acc[t.slug] = t;
      return acc;
    }, {})
  );

  await writeAll(uniqueBySlug);
  return newOnes;
}

export async function listTrips() {
  const all = await readAll();
  return all.sort(
    (a, b) => +new Date(b.createdAt || 0) - +new Date(a.createdAt || 0)
  );
}

export async function getTripBySlug(slug) {
  const all = await readAll();
  return all.find((t) => t.slug === slug) || null;
}
