// app/api/trips/[slug]/route.js
import { NextResponse } from "next/server";
import { getTripBySlug } from "@/lib/blobTrips";

export async function GET(_req, ctx) {
  const item = await getTripBySlug(ctx.params.slug);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item, { status: 200 });
}
