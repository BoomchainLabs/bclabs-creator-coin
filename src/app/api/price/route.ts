import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate price data - in production, this would fetch from a real API
  const basePrice = 11717;
  const variation = (Math.random() - 0.5) * 1000;
  const price = Math.max(0, basePrice + variation);
  
  return NextResponse.json({
    price,
    change24h: (Math.random() - 0.5) * 20,
    timestamp: Date.now()
  });
}