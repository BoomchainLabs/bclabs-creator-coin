'use client';

import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, arbitrum, optimism],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Creator Coin Web4',
  projectId: 'your-project-id', // Replace with your WalletConnect project ID
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}