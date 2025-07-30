import { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { ParticleBackground } from '@/components/effects/ParticleBackground';
import { NeuralBackground } from '@/components/effects/NeuralBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsGrid } from '@/components/sections/StatsGrid';
import { TradingSection } from '@/components/sections/TradingSection';
import { ChartSection } from '@/components/sections/ChartSection';
import { SocialSection } from '@/components/sections/SocialSection';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <NeuralBackground />
      
      <Header />

      <main className="relative z-10">
        <HeroSection />
        
        <Suspense fallback={<LoadingSpinner />}>
          <StatsGrid />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <TradingSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <ChartSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <SocialSection />
        </Suspense>
      </main>
    </div>
  );
}