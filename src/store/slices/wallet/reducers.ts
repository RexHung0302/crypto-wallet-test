import type { PayloadAction } from '@reduxjs/toolkit';

import type { WalletState } from './type';

export const setWalletItems = (state: WalletState, action: PayloadAction<WalletState['walletItems']>) => {
  return {
    ...state,
    walletItems: action.payload,
  };
};

export const setLoading = (state: WalletState, action: PayloadAction<boolean>) => {
  return {
    ...state,
    loading: action.payload,
  };
};
