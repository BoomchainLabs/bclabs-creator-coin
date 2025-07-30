import React, { useEffect, useRef, useState } from 'react';

export const PriceChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedRange, setSelectedRange] = useState('1H');
  const timeRanges = ['1H', '1D', '1W', '1M', 'ALL'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = 400;
    ctx.scale(2, 2);

    // Generate sample data
    const dataPoints = 50;
    const data = [];
    let price = 11717;
    
    for (let i = 0; i < dataPoints; i++) {
      price += (Math.random() - 0.5) * 500;
      data.push(price);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);

    // Set up chart dimensions
    const padding = 40;
    const chartWidth = canvas.width / 2 - padding * 2;
    const chartHeight = canvas.height / 2 - padding * 2;

    const minPrice = Math.min(...data);
    const maxPrice = Math.max(...data);
    const priceRange = maxPrice - minPrice;

    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + chartWidth, y);
      ctx.stroke();
    }

    // Draw price line
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((price, index) => {
      const x = padding + (chartWidth / (dataPoints - 1)) * index;
      const y = padding + chartHeight - ((price - minPrice) / priceRange) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Add glow effect
    ctx.shadowColor = '#00f2fe';
    ctx.shadowBlur = 10;
    ctx.stroke();

    // Draw price labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px SF Pro Display, sans-serif';
    ctx.textAlign = 'right';
    
    for (let i = 0; i <= 5; i++) {
      const price = minPrice + (priceRange / 5) * (5 - i);
      const y = padding + (chartHeight / 5) * i + 4;
      ctx.fillText(`$${price.toFixed(0)}`, padding - 10, y);
    }

  }, [selectedRange]);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Price History</h2>
      
      <div className="flex gap-2 mb-6">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedRange === range
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          className="w-full h-48 md:h-64"
          style={{ maxHeight: '400px' }}
        />
      </div>
    </div>
  );
};