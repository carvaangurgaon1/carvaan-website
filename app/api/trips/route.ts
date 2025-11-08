// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip } from "@/lib/blobTrips";

// GET /api/trips → list trips
export async function GET() {
  try {
    const trips = await getTrips();
    return NextResponse.json({ trips });
  } catch (e) {
    console.error("GET /api/trips error:", e);
    return NextResponse.json({ error: "Failed to load trips" }, { status: 500 });
  }
}

// POST /api/trips → create trip
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const trip = await createTrip(body);
    return NextResponse.json({ trip }, { status: 201 });
  } catch (e) {
    console.error("POST /api/trips error:", e);
    return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
  }
}
