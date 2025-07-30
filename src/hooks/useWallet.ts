import { useState, useEffect } from 'react';

interface WalletState {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  balance: string;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    address: null,
    isConnected: false,
    isConnecting: false,
    balance: '0'
  });

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      throw new Error('Please install a Web3 wallet to continue');
    }

    setWalletState(prev => ({ ...prev, isConnecting: true }));

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      if (accounts.length > 0) {
        setWalletState(prev => ({
          ...prev,
          address: accounts[0],
          isConnected: true,
          isConnecting: false
        }));
        
        // Update balance
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts[0], 'latest']
        });
        
        const ethBalance = (parseInt(balance, 16) / 1e18).toFixed(4);
        setWalletState(prev => ({ ...prev, balance: ethBalance }));
      }
    } catch (error) {
      setWalletState(prev => ({ ...prev, isConnecting: false }));
      throw error;
    }
  };

  const disconnectWallet = () => {
    setWalletState({
      address: null,
      isConnected: false,
      isConnecting: false,
      balance: '0'
    });
  };

  useEffect(() => {
    // Check if wallet is already connected
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_accounts'
          });
          
          if (accounts.length > 0) {
            setWalletState(prev => ({
              ...prev,
              address: accounts[0],
              isConnected: true
            }));
          }
        } catch (error) {
          console.error('Failed to check wallet connection:', error);
        }
      }
    };

    checkConnection();

    // Listen for account changes
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          setWalletState(prev => ({
            ...prev,
            address: accounts[0]
          }));
        }
      });
    }
  }, []);

  return {
    ...walletState,
    connectWallet,
    disconnectWallet
  };
};