'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="text-center py-16 container mx-auto px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift"
      >
        Creator Coin Web4
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-4xl mx-auto"
      >
        The Future of Decentralized Creator Economy with AI Intelligence
      </motion.p>
    </section>
  );
}