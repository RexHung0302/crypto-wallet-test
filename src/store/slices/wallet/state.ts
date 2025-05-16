import type { WalletState } from './type';

export const initialState: WalletState = {
  walletItems: [],
  liveRates: [],
  currencies: [],
  loading: false,
};
