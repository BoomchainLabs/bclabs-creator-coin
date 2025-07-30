'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, TrendingDown } from 'lucide-react';
import { useAccount } from 'wagmi';

export function TradingPanel() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [gasFee, setGasFee] = useState('');
  const [currentPrice] = useState(11717);

  useEffect(() => {
    if (amount) {
      const ethAmount = parseFloat(amount);
      const tokens = ethAmount / (currentPrice / 1000000);
      setReceiveAmount(tokens.toFixed(2));
      setGasFee((0.001 * ethAmount).toFixed(5));
    } else {
      setReceiveAmount('');
      setGasFee('');
    }
  }, [amount, currentPrice]);

  const handleTrade = (type: 'buy' | 'sell') => {
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }
    
    const ethAmount = parseFloat(amount);
    if (ethAmount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    // Simulate trade
    console.log(`${type} ${ethAmount} ETH`);
  };

  const quickAmounts = [0.1, 0.5, 1.0];

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
          <Bot className="text-white" size={24} />
        </div>
        <div>
          <div className="text-xl font-bold text-white">AI Trading Assistant</div>
          <div className="text-sm text-gray-400">Neural network-powered trading</div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-cyan-400 font-semibold mb-2">🎯 Amount (ETH)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            step="0.001"
            className="w-full p-4 bg-black/40 border-2 border-white/10 rounded-xl text-white text-lg focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/20 transition-all"
          />
          <div className="flex gap-2 mt-3 flex-wrap">
            {quickAmounts.map((quickAmount) => (
              <motion.button
                key={quickAmount}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAmount(quickAmount.toString())}
                className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded-full text-purple-400 text-sm hover:bg-purple-500 hover:text-white transition-colors"
              >
                {quickAmount} ETH
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAmount('0.3')}
              className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded-full text-purple-400 text-sm hover:bg-purple-500 hover:text-white transition-colors"
            >
              🧠 AI Optimal
            </motion.button>
          </div>
        </div>

        <div>
          <label className="block text-cyan-400 font-semibold mb-2">You'll receive (AI-calculated)</label>
          <input
            type="text"
            value={receiveAmount ? `${receiveAmount} CC` : ''}
            placeholder="—"
            readOnly
            className="w-full p-4 bg-black/40 border-2 border-white/10 rounded-xl text-white text-lg"
          />
        </div>

        <div>
          <label className="block text-cyan-400 font-semibold mb-2">⛽ Quantum Gas Fee</label>
          <input
            type="text"
            value={gasFee ? `~${gasFee} ETH` : 'Calculating...'}
            readOnly
            className="w-full p-4 bg-black/40 border-2 border-white/10 rounded-xl text-white text-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTrade('buy')}
            className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-green-500/25 transition-all quantum-btn"
          >
            <TrendingUp size={20} />
            Quantum Buy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTrade('sell')}
            className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-pink-500/25 transition-all quantum-btn"
          >
            <TrendingDown size={20} />
            Quantum Sell
          </motion.button>
        </div>
      </div>
    </div>
  );
}