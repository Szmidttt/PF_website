import { getEmptyDates } from "@/app/data/google-api"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const roomID = req.nextUrl.searchParams.get('roomID');
  if (!roomID) {
    return NextResponse.json({ error: 'Missing roomID' }, { status: 400 });
  }
  const dates = await getEmptyDates(roomID);
  return NextResponse.json(dates);
}