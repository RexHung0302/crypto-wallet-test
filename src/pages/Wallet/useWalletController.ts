import { useCallback, useEffect, useState } from "react";
import { WalletTab, type WalletItem } from "../../types/wallet";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getWalletBalance, getLiveRates, getCurrencies } from "../../store/slices/wallet/thunks";
import { unwrapResult } from "@reduxjs/toolkit";
import { calculateUSDValue } from "../../utils/currency";

const useWalletController = () => {
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState<WalletTab>(WalletTab.Wallet);
  const [formatWalletItems, setFormatWalletItems] = useState<Array<WalletItem>>([
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
  const { walletItems, liveRates, currencies } = useAppSelector((state) => state.wallet);

  useEffect(() => {
    if (walletItems.length > 0 && liveRates.length > 0) {
      setFormatWalletItems(walletItems.map((item) => {
        const currency = currencies.find((currency) => currency.code === item.currency);
        const usdValue = calculateUSDValue(item.amount, item.currency, liveRates);

        return {
          ...item,
          name: currency?.name || item.currency,
          usdValue,
          icon: currency?.colorful_image_url || '',
        };
      }));
    }
  }, [walletItems, liveRates, currencies]);

  /**
   * @description Get Currencies
   */
  const handleGetCurrencies = useCallback(async () => {
    dispatch(
      getCurrencies()
    )
      .then(unwrapResult)
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  /**
   * @description Get Live Rates
   */
  const handleGetLiveRates = useCallback(async () => {
    dispatch(
      getLiveRates()
    )
      .then(unwrapResult)
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  /**
   * @description Get Wallet Balance
   */
  const handleGetWalletBalance = useCallback(async () => {
    dispatch(
      getWalletBalance()
    )
      .then(unwrapResult)
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  const initial = useCallback(async () => {
    setFormatWalletItems([]);
    await handleGetCurrencies();
    await handleGetLiveRates();
    await handleGetWalletBalance();
  }, [handleGetWalletBalance, handleGetLiveRates, handleGetCurrencies]);

  /**
   * @description Init to get wallet balance and live rates
   */
  useEffect(() => {
    initial();
  }, [initial]);

  /**
   * @description Set the selected tab
   */
  const handleSetSelectedTab = (tab: WalletTab) => setSelectedTab(tab);

  return {
    selectedTab,
    walletItems: formatWalletItems,
    onSetSelectedTab: handleSetSelectedTab,
  };
};

export default useWalletController;