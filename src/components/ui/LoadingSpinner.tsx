'use client';

import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
      />
    </div>
  );
}