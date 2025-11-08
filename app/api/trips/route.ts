// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip } from "@/lib/blobTrips";

export async function GET() {
  const trips = await getTrips();
  return NextResponse.json(trips);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // validate minimally
  if (!body?.slug || !body?.title) {
    return NextResponse.json({ error: "slug and title required" }, { status: 400 });
  }
  const saved = await createTrip(body);
  return NextResponse.json(saved, { status: 201 });
}
