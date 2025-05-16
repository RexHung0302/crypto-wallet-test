import type { WalletState } from './type';

export const initialState: WalletState = {
  walletItems: [],
  liveRates: [],
  currencies: [],
  totalUsdValue: 0,
  loading: false,
};
