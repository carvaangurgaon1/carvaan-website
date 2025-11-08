// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { listTrips, createTripJSON } from "@/lib/blobTrips";

// Make sure this route is always dynamic (no static caching)
export const dynamic = "force-dynamic";

// tiny slug helper
function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET() {
  try {
    const trips = await listTrips();
    return NextResponse.json(trips, { status: 200 });
  } catch (err) {
    console.error("GET /api/trips failed:", err);
    return NextResponse.json({ error: "Failed to fetch trips" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // minimal validation: title is required
    if (!body?.title) {
      return NextResponse.json(
        { error: "title is required" },
        { status: 400 }
      );
    }

    const baseSlug = slugify(body.title);
    const uniq = Math.random().toString(36).slice(2, 6); // short suffix to avoid collisions
    const slug = `${baseSlug}-${uniq}`;

    // normalise payload and let the storage helper persist it
    const saved = await createTripJSON({
      slug,
      title: body.title,
      location: body.location ?? "",
      duration: body.duration ?? "",
      price: typeof body.price === "number" ? body.price : Number(body.price || 0),
      image: body.image ?? "",
      mealsPerDay: typeof body.mealsPerDay === "number"
        ? body.mealsPerDay
        : Number(body.mealsPerDay || 0),
      startDates: Array.isArray(body.startDates) ? body.startDates : [],
      description: body.description ?? "",
      inclusions: body.inclusions ?? "",
      exclusions: body.exclusions ?? "",
      itinerary: Array.isArray(body.itinerary) ? body.itinerary : [],
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(saved, { status: 201 });
  } catch (err) {
    console.error("POST /api/trips failed:", err);
    return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
  }
}
