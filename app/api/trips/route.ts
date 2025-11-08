// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip } from "@/lib/blobTrips";

export async function GET() {
  try {
    const trips = await getTrips();
    return NextResponse.json({ trips });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load trips" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const trip = await createTrip(body);
    return NextResponse.json({ trip }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
  }
}
