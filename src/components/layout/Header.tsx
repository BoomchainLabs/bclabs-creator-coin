'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { 
  Home, 
  Bot, 
  DollarSign, 
  Users, 
  Grid as Bridge,
  Menu,
  X
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#trading', icon: Bot, label: 'AI Trade' },
    { href: '#defi', icon: DollarSign, label: 'DeFi' },
    { href: '#social', icon: Users, label: 'Social' },
    { href: '#bridge', icon: Bridge, label: 'Bridge' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-strong sticky top-0 z-50 border-b border-white/10"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-lg animate-pulse-glow">
              CC
            </div>
            <div>
              <div className="text-xl font-bold text-white">Creator Coin</div>
              <div className="text-xs text-purple-400">Web4 Platform</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={item.href} 
                  className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors group"
                >
                  <item.icon size={16} className="group-hover:animate-pulse" />
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all quantum-btn"
            >
              AI Assistant
            </motion.button>
            
            <ConnectButton />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}