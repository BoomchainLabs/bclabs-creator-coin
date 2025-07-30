'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PriceChart } from '@/components/charts/PriceChart';

export function ChartSection() {
  const [selectedRange, setSelectedRange] = useState('1H');
  const timeRanges = ['1H', '1D', '1W', '1M', 'ALL'];

  return (
    <section id="defi" className="container mx-auto px-4 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Price History</h2>
        
        <div className="flex gap-2 mb-6 flex-wrap">
          {timeRanges.map((range) => (
            <motion.button
              key={range}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedRange(range)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedRange === range
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {range}
            </motion.button>
          ))}
        </div>

        <PriceChart selectedRange={selectedRange} />
      </motion.div>
    </section>
  );
}