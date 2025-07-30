'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Brain, Zap, User, Target } from 'lucide-react';

interface StatsData {
  price: number;
  holders: number;
  volume24h: number;
  userBalance: number;
  aiConfidence: number;
}

export function StatsGrid() {
  const [stats, setStats] = useState<StatsData>({
    price: 11717,
    holders: 10,
    volume24h: 30.13,
    userBalance: 2193352,
    aiConfidence: 87
  });

  const [priceChange] = useState(-14.53);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        price: prev.price + (Math.random() - 0.5) * 100,
        volume24h: prev.volume24h + (Math.random() - 0.5) * 5,
        aiConfidence: Math.max(50, Math.min(95, prev.aiConfidence + (Math.random() - 0.5) * 5))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      icon: DollarSign,
      label: 'AI-Predicted Price',
      value: `$${stats.price.toFixed(2)}`,
      change: `${priceChange > 0 ? '+' : ''}${priceChange.toFixed(2)}%`,
      changeColor: priceChange > 0 ? 'text-green-400' : 'text-pink-400',
      prediction: '📈 Bullish (87% confidence)'
    },
    {
      icon: Brain,
      label: 'Network Holders',
      value: stats.holders.toLocaleString(),
      prediction: '🔮 +15% next week'
    },
    {
      icon: Zap,
      label: '24h Volume',
      value: `$${stats.volume24h.toFixed(2)}`,
      prediction: '🚀 High activity imminent'
    },
    {
      icon: User,
      label: 'Your Balance',
      value: stats.userBalance.toLocaleString(),
      prediction: `💎 $${(stats.userBalance * stats.price / 1000000).toFixed(2)}`
    },
    {
      icon: Target,
      label: 'AI Confidence',
      value: `${stats.aiConfidence.toFixed(1)}%`,
      prediction: stats.aiConfidence > 75 ? 'High Confidence' : 'Moderate'
    }
  ];

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="stats-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass neural-node rounded-2xl p-6 text-center group relative overflow-hidden"
          >
            <div className="mb-4 flex justify-center">
              <card.icon size={32} className="text-cyan-400 group-hover:animate-pulse" />
            </div>
            
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {card.value}
            </div>
            
            <div className="text-sm text-gray-300 mb-2">
              {card.label}
            </div>
            
            {card.change && (
              <div className={`text-sm font-semibold mb-2 ${card.changeColor}`}>
                {card.change}
              </div>
            )}
            
            <div className="ai-prediction">
              {card.prediction}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}