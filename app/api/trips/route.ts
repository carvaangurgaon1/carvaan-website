// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip, CreateTripInput } from "@/lib/blobTrips";

// GET /api/trips  → list all trips
export async function GET() {
  try {
    const trips = await getTrips();
    return NextResponse.json({ trips }, { status: 200 });
  } catch (err) {
    console.error("GET /api/trips error:", err);
    return NextResponse.json(
      { error: "Failed to load trips" },
      { status: 500 }
    );
  }
}

// POST /api/trips → create a new trip
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CreateTripInput;

    if (!body?.title || typeof body.title !== "string") {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const trip = await createTrip(body);
    return NextResponse.json(trip, { status: 201 });
  } catch (err) {
    console.error("POST /api/trips error:", err);
    return NextResponse.json(
      { error: "Failed to create trip" },
      { status: 500 }
    );
  }
}
