// app/api/trips/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllTrips, saveTrip } from '@/lib/blobTrips';

export async function GET() {
  const trips = await getAllTrips();
  return NextResponse.json(trips, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // minimal validation
    const required = ['title', 'location', 'category', 'price', 'durationLabel', 'image'];
    for (const f of required) {
      if (!body?.[f]) return NextResponse.json({ error: `${f} is required` }, { status: 400 });
    }

    const trip = await saveTrip({
      title: String(body.title),
      location: String(body.location),
      category: String(body.category),
      price: Number(body.price),
      durationLabel: String(body.durationLabel),
      image: String(body.image),
      startDates: Array.isArray(body.startDates) ? body.startDates : [],
      description: String(body.description || ''),
      inclusions: String(body.inclusions || ''),
      exclusions: String(body.exclusions || ''),
    });

    return NextResponse.json(trip, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to create trip' }, { status: 500 });
  }
}
