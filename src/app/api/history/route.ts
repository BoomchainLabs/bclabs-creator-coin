import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '1H';
  
  // Generate sample historical data based on range
  const getDataPoints = (range: string) => {
    switch (range) {
      case '1H': return 60;
      case '1D': return 24;
      case '1W': return 7;
      case '1M': return 30;
      case 'ALL': return 365;
      default: return 60;
    }
  };
  
  const points = getDataPoints(range);
  const timestamps = [];
  const prices = [];
  let currentPrice = 11717;
  
  for (let i = 0; i < points; i++) {
    const now = Date.now();
    const timeOffset = i * (range === '1H' ? 60000 : range === '1D' ? 3600000 : 86400000);
    timestamps.push(now - (points - i) * timeOffset);
    
    currentPrice += (Math.random() - 0.5) * 500;
    prices.push(Math.max(0, currentPrice));
  }
  
  return NextResponse.json({
    timestamps,
    prices,
    range
  });
}