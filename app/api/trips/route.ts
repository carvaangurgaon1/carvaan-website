// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip } from "@/lib/blobTrips";

// GET /api/trips  -> list all trips
export async function GET() {
  try {
    const trips = await getTrips();
    return NextResponse.json({ trips });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to load trips" },
      { status: 500 }
    );
  }
}

// POST /api/trips -> create new trip
// Body JSON example:
// { title, location, price, duration, image, category, startDates: string[], meals, description, itinerary }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const trip = await createTrip(body);
    return NextResponse.json({ trip }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to create trip" },
      { status: 500 }
    );
  }
}
