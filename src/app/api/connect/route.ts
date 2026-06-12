import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Connect request received for Our Sanctuary:", data);
  return NextResponse.json({ success: true, message: "Your connection request has been received. Be still." });
}
