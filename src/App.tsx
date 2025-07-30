import React, { useState } from 'react';
import { Header } from './components/Header';
import { ParticleBackground } from './components/ParticleBackground';
import { NeuralBackground } from './components/NeuralBackground';
import { StatsGrid } from './components/StatsGrid';
import { TradingPanel } from './components/TradingPanel';
import { PriceChart } from './components/PriceChart';
import { SocialFeed } from './components/SocialFeed';
import { BridgePanel } from './components/BridgePanel';
import { Modal } from './components/Modal';
import { useWallet } from './hooks/useWallet';

function App() {
  const { address, isConnected, connectWallet } = useWallet();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      setModalContent({
        title: 'Wallet Connected',
        message: `Successfully connected to ${address}`
      });
      setShowModal(true);
    } catch (error) {
      setModalContent({
        title: 'Connection Failed',
        message: error instanceof Error ? error.message : 'Failed to connect wallet'
      });
      setShowModal(true);
    }
  };

  const handleTrade = async (type: 'buy' | 'sell', amount: number) => {
    setModalContent({
      title: 'Transaction Pending',
      message: `Processing ${type} order for ${amount} ETH. Please confirm in your wallet.`
    });
    setShowModal(true);

    // Simulate transaction
    setTimeout(() => {
      setModalContent({
        title: 'Transaction Successful',
        message: `Successfully ${type === 'buy' ? 'purchased' : 'sold'} tokens!`
      });
      setShowModal(true);
    }, 3000);
  };

  const toggleAIAssistant = () => {
    setAiAssistantOpen(!aiAssistantOpen);
    if (!aiAssistantOpen) {
      setModalContent({
        title: 'AI Assistant',
        message: 'AI Trading Assistant is analyzing market conditions and preparing personalized recommendations for you.'
      });
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <NeuralBackground />
      
      <Header
        walletAddress={address}
        onConnectWallet={handleConnectWallet}
        onToggleAI={toggleAIAssistant}
      />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="home" className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Creator Coin Web4
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            The Future of Decentralized Creator Economy with AI Intelligence
          </p>
          <StatsGrid />
        </section>

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          <div id="trading">
            <TradingPanel
              walletConnected={isConnected}
              onTrade={handleTrade}
            />
          </div>
          <div id="bridge">
            <BridgePanel />
          </div>
        </section>

        <section id="defi" className="mb-12">
          <PriceChart />
        </section>

        <section id="social">
          <SocialFeed />
        </section>
      </main>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
      >
        <p className="text-gray-300">{modalContent.message}</p>
        <button
          onClick={() => setShowModal(false)}
          className="w-full mt-4 p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;