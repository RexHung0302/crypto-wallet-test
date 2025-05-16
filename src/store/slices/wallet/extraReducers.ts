import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { getWalletBalance, getLiveRates, getCurrencies } from './thunks';
import type { WalletState } from './type';

const extraReducers = (builder: ActionReducerMapBuilder<WalletState>) => {
  /**
   * @description Get Wallet Balance
   */
  builder.addCase(getWalletBalance.pending, state => {
    state.loading = true;
  });
  /**
   * @description Get Wallet Balance Success
   */
  builder.addCase(getWalletBalance.fulfilled, (state, action) => {
    const { data } = action.payload;
    state.walletItems = data.wallet;
    state.loading = false;
  });
  /**
   * @description Get Wallet Balance Failed
   */
  builder.addCase(getWalletBalance.rejected, state => {
    state.loading = false;
  });
  /**
   * @description Get Live Rates
   */
  builder.addCase(getLiveRates.pending, state => {
    state.loading = true;
  });
  /**
   * @description Get Live Rates Success
   */
  builder.addCase(getLiveRates.fulfilled, (state, action) => {
    const { data } = action.payload;
    state.liveRates = data.tiers;
    state.loading = false;
  });
  /**
   * @description Get Live Rates Failed
   */
  builder.addCase(getLiveRates.rejected, state => {
    state.loading = false;
  });
  /**
   * @description Get Currencies
   */
  builder.addCase(getCurrencies.pending, state => {
    state.loading = true;
  });
  /**
   * @description Get Currencies Success
   */
  builder.addCase(getCurrencies.fulfilled, (state, action) => {
    const { data } = action.payload;
    state.currencies = data.currencies;
  });
  /**
   * @description Get Currencies Failed
   */
  builder.addCase(getCurrencies.rejected, state => {
    state.loading = false;
  });
};

export default extraReducers;
