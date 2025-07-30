import React, { useState } from 'react';
import { Zap, Home, Bot, DollarSign, Users, Grid as Bridge } from 'lucide-react';

interface HeaderProps {
  walletAddress: string | null;
  onConnectWallet: () => void;
  onToggleAI: () => void;
}

export const Header: React.FC<HeaderProps> = ({ walletAddress, onConnectWallet, onToggleAI }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-lg animate-pulse">
              CC
            </div>
            <div>
              <div className="text-xl font-bold text-white">Creator Coin</div>
              <div className="text-xs text-purple-400">Web4 Platform</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#home" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Home size={16} /> Home</a></li>
            <li><a href="#trading" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Bot size={16} /> AI Trade</a></li>
            <li><a href="#defi" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><DollarSign size={16} /> DeFi</a></li>
            <li><a href="#social" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Users size={16} /> Social</a></li>
            <li><a href="#bridge" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Bridge size={16} /> Bridge</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleAI}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
            >
              AI Assistant
            </button>
            <button
              onClick={onConnectWallet}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold hover:opacity-90 transition-opacity"
            >
              {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Zap size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Home size={16} /> Home</a></li>
              <li><a href="#trading" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Bot size={16} /> AI Trade</a></li>
              <li><a href="#defi" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><DollarSign size={16} /> DeFi</a></li>
              <li><a href="#social" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Users size={16} /> Social</a></li>
              <li><a href="#bridge" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"><Bridge size={16} /> Bridge</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};