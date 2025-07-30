'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share } from 'lucide-react';

interface FeedItem {
  id: number;
  user: string;
  avatar: string;
  message: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export function SocialSection() {
  const feedItems: FeedItem[] = [
    {
      id: 1,
      user: 'Alice',
      avatar: 'AB',
      message: 'Loving the AI predictions 🚀! The neural network analysis is incredible.',
      timestamp: '2m ago',
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      user: 'CryptoYogi',
      avatar: 'CY',
      message: 'Cross-chain bridge integration coming soon—can\'t wait to see multi-chain functionality!',
      timestamp: '15m ago',
      likes: 18,
      comments: 3
    },
    {
      id: 3,
      user: 'DevMaster',
      avatar: 'DM',
      message: 'The Web4 features are next level. This platform is the future of creator economy.',
      timestamp: '1h ago',
      likes: 42,
      comments: 12
    },
    {
      id: 4,
      user: 'TokenWhale',
      avatar: 'TW',
      message: 'Just made my first AI-powered trade. The suggestions were spot on! 💎',
      timestamp: '2h ago',
      likes: 35,
      comments: 8
    }
  ];

  return (
    <section id="social" className="container mx-auto px-4 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Community Feed</h2>
        
        <div className="space-y-4">
          {feedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                {item.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-semibold text-white">{item.user}</div>
                  <div className="text-sm text-gray-400">{item.timestamp}</div>
                </div>
                
                <div className="text-gray-300 mb-3 leading-relaxed">
                  {item.message}
                </div>
                
                <div className="flex items-center gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <Heart size={16} />
                    <span className="text-sm">{item.likes}</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span className="text-sm">{item.comments}</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <Share size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
              You
            </div>
            <input
              type="text"
              placeholder="Share your thoughts with the community..."
              className="flex-1 p-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity quantum-btn"
            >
              Post
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}