cat > app/api/trips/route.ts <<'TS'
// app/api/trips/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getTrips, createTrip } from "@/lib/blobTrips";

export async function GET() {
  try {
    const trips = await getTrips();
    return NextResponse.json(trips, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to fetch trips" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const created = await createTrip(body);
    return NextResponse.json(created, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to create trip" }, { status: 500 });
  }
}
TS
