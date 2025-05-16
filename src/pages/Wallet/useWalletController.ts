import { useState } from "react";
import type { WalletItem } from "../../types/wallet";

const useWalletController = () => {
  const [selectedTab, setSelectedTab] = useState<'Wallet' | 'DeFi'>('Wallet');
  const [walletItems] = useState<Array<WalletItem>>([
    {
      currency: 'BAT',
      name: 'Basic Attention Token',
      amount: 67.87517775,
      usdValue: 18.20,
      icon: 'https://assets.coingecko.com/coins/images/1175/small/bat.png?1547034796',
    },
    {
      currency: 'ETH',
      name: 'Ethereum',
      amount: 0.06001,
      usdValue: 14.24,
      icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1693318750',
    },
    {
      currency: 'USDT',
      name: 'Tether',
      amount: 4.221346,
      usdValue: 4.24,
      icon: 'https://assets.coingecko.com/coins/images/325/small/usdt.png?1650886575',
    },
    {
      currency: 'BTC',
      name: 'Bitcoin',
      amount: 0,
      usdValue: 0,
      icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1747032970',
    },
    {
      currency: 'CRO',
      name: 'Crypto.com Coin',
      amount: 0,
      usdValue: 0,
      icon: 'https://assets.coingecko.com/coins/images/11839/small/cro.png?1693318750',
    },
    {
      currency: 'MCO',
      name: 'Monaco',
      amount: 0,
      usdValue: 0,
    }
  ]);

  /**
   * @description Set the selected tab
   */
  const handleSetSelectedTab = (tab: 'Wallet' | 'DeFi') => setSelectedTab(tab);

  return {
    selectedTab,
    walletItems,
    onSetSelectedTab: handleSetSelectedTab,
  };
};

export default useWalletController;