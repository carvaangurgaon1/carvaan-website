// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { listTrips, createTrip } from "@/lib/blobTrips";

// GET /api/trips  -> list all trips
export async function GET() {
  const trips = await listTrips();
  return NextResponse.json({ trips });
}

// POST /api/trips -> create a new trip
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // minimal validation
    if (!body?.title || !body?.slug) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug" },
        { status: 400 }
      );
    }

    const saved = await createTrip(body);
    return NextResponse.json(saved, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to create trip" },
      { status: 500 }
    );
  }
}
