// app/api/trips/[slug]/route.ts
import { NextResponse } from "next/server";
import { getTripBySlug } from "@/lib/blobTrips";

export async function GET(_: Request, ctx: { params: { slug: string } }) {
  const item = await getTripBySlug(ctx.params.slug);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item, { status: 200 });
}
