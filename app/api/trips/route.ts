// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip } from "@/lib/blobTrips";

// Ensure the route is always dynamic (not statically cached)
export const dynamic = "force-dynamic";

// simple slug maker
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
    const trips = await getTrips();
    return NextResponse.json(trips, { status: 200 });
  } catch (e) {
    console.error("GET /api/trips failed:", e);
    return NextResponse.json({ error: "Failed to fetch trips" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body?.title) {
      return NextResponse.json({ error: "title is required" }, { status: 400 });
    }

    // Generate unique slug server-side
    const base = slugify(body.title);
    const uniq = Math.random().toString(36).slice(2, 6);
    const slug = `${base}-${uniq}`;

    // Normalized trip object that matches lib/blobTrips.ts Trip type
    const trip = {
      id: crypto.randomUUID(),
      slug,
      title: body.title,
      location: body.location ?? "",
      companyname: body.companyname ?? "",
      duration: body.duration ?? "",
      mealsPerDay:
        typeof body.mealsPerDay === "number"
          ? body.mealsPerDay
          : Number(body.mealsPerDay || 0),
      price:
        typeof body.price === "number" ? body.price : Number(body.price || 0),
      description: body.description ?? "",
      inclusions: body.inclusions ?? "",
      exclusions: body.exclusions ?? "",
      itinerary: Array.isArray(body.itinerary) ? body.itinerary : [],
      startDates: Array.isArray(body.startDates) ? body.startDates : [],
      image: body.image ?? "",
    };

    const saved = await createTrip(trip);
    return NextResponse.json(saved, { status: 201 });
  } catch (e) {
    console.error("POST /api/trips failed:", e);
    return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
  }
}
