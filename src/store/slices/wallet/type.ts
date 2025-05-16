import type { Currency, ExchangeRate, WalletBalance } from "../../../types/wallet";

export const sliceName = 'wallet';

export interface WalletState {
  walletItems: WalletBalance[];
  liveRates: ExchangeRate[];
  currencies: Currency[];
  loading: boolean;
}