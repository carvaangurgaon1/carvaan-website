// app/api/trips/route.ts
import { NextResponse } from "next/server";
import { createTripsFromAdmin, listTrips } from "@/lib/blobTrips";

export async function GET() {
  const items = await listTrips();
  return NextResponse.json(items, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Expect: { title, location, category?, price, durationLabel, image, startDates: [ISO...], ... }
    if (!body?.title || !body?.location || !body?.price || !body?.durationLabel || !body?.image) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!Array.isArray(body.startDates) || body.startDates.length === 0) {
      return NextResponse.json({ error: "startDates must be a non-empty array" }, { status: 400 });
    }

    const created = await createTripsFromAdmin(body);
    return NextResponse.json({ ok: true, created }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
