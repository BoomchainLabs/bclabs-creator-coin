'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceChartProps {
  selectedRange: string;
}

interface ChartData {
  time: string;
  price: number;
}

export function PriceChart({ selectedRange }: PriceChartProps) {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Generate sample data based on selected range
    const generateData = () => {
      const points = selectedRange === '1H' ? 60 : selectedRange === '1D' ? 24 : 30;
      const newData: ChartData[] = [];
      let price = 11717;
      
      for (let i = 0; i < points; i++) {
        price += (Math.random() - 0.5) * 500;
        newData.push({
          time: selectedRange === '1H' 
            ? `${i}m` 
            : selectedRange === '1D' 
            ? `${i}h` 
            : `Day ${i + 1}`,
          price: Math.max(0, price)
        });
      }
      
      setData(newData);
    };

    generateData();
  }, [selectedRange]);

  return (
    <div className="h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="time" 
            stroke="#ffffff" 
            fontSize={12}
          />
          <YAxis 
            stroke="#ffffff" 
            fontSize={12}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: '#ffffff'
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#00f2fe" 
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: '#00f2fe' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}