import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WalletItem } from '../../types/wallet';

interface WalletState {
  items: WalletItem[];
  loading: boolean;
  error: string | null;
}

const initialState: WalletState = {
  items: [],
  loading: false,
  error: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWallets: (state, action: PayloadAction<WalletItem[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setWallets, setLoading, setError } = walletSlice.actions;
export default walletSlice.reducer; 