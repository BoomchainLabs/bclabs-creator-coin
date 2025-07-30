import React, { useState } from 'react';
import { ArrowLeftRight, Layers } from 'lucide-react';

export const BridgePanel: React.FC = () => {
  const [fromChain, setFromChain] = useState('ethereum');
  const [toChain, setToChain] = useState('polygon');

  const chains = [
    { id: 'ethereum', name: 'Ethereum', color: 'from-blue-500 to-purple-600' },
    { id: 'polygon', name: 'Polygon', color: 'from-purple-500 to-pink-500' },
    { id: 'bsc', name: 'BSC', color: 'from-yellow-500 to-orange-500' },
    { id: 'arbitrum', name: 'Arbitrum', color: 'from-blue-400 to-cyan-500' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
          <Layers className="text-white" size={24} />
        </div>
        <div>
          <div className="text-xl font-bold text-white">Cross-Chain Bridge</div>
          <div className="text-sm text-gray-400">Multi-chain token swaps</div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-cyan-400 font-semibold mb-2">From Chain</label>
            <select
              value={fromChain}
              onChange={(e) => setFromChain(e.target.value)}
              className="w-full p-4 bg-black/40 border-2 border-white/10 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-cyan-400 font-semibold mb-2">To Chain</label>
            <select
              value={toChain}
              onChange={(e) => setToChain(e.target.value)}
              className="w-full p-4 bg-black/40 border-2 border-white/10 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <ArrowLeftRight className="text-cyan-400" size={24} />
          </button>
        </div>

        <div>
          <label className="block text-cyan-400 font-semibold mb-2">Amount</label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full p-4 bg-black/40 border-2 border-white/10 rounded-xl text-white text-lg focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="p-4 bg-orange-500/20 border border-orange-500/50 rounded-xl">
          <div className="flex items-center gap-2 text-orange-400 font-semibold mb-2">
            <span>⚠️</span>
            Coming Soon
          </div>
          <div className="text-orange-300 text-sm">
            Cross-chain bridge functionality is currently in development. Stay tuned for multi-chain support!
          </div>
        </div>

        <button
          disabled
          className="w-full p-4 bg-gray-600 rounded-xl text-gray-400 font-bold cursor-not-allowed"
        >
          Bridge Tokens (Coming Soon)
        </button>
      </div>
    </div>
  );
};