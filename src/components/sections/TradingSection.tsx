'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, TrendingDown, Grid as Bridge } from 'lucide-react';
import { TradingPanel } from '@/components/trading/TradingPanel';
import { BridgePanel } from '@/components/trading/BridgePanel';

export function TradingSection() {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="features-grid grid grid-cols-1 xl:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          id="trading"
        >
          <TradingPanel />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="bridge"
        >
          <BridgePanel />
        </motion.div>
      </div>
    </section>
  );
}