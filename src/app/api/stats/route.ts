import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate stats data - in production, this would fetch from blockchain/database
  return NextResponse.json({
    holderCount: Math.floor(Math.random() * 1000) + 500,
    volume24h: (Math.random() * 100000).toFixed(2),
    marketCap: (Math.random() * 10000000).toFixed(2),
    confidenceScore: Math.random() * 40 + 60, // 60-100%
    totalSupply: 1000000000,
    circulatingSupply: Math.floor(Math.random() * 500000000) + 100000000
  });
}