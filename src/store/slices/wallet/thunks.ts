import { createAsyncThunk } from '@reduxjs/toolkit';
import { sliceName } from './type';
import WalletServer from '../../../services/api/wallet/walletServer';

/**
 * @description Get Wallet Balance
 */
export const getWalletBalance = createAsyncThunk(`${sliceName}/getWalletBalance`, async (_NEVER, { rejectWithValue }) => {
  const server = new WalletServer();

  const data = await server.getWalletBalanceApi();

  if ('warning' in data) {
    return rejectWithValue(data.warning);
  }

  return data;
});

/**
 * @description Get Live Rates
 */
export const getLiveRates = createAsyncThunk(`${sliceName}/getLiveRates`, async (_NEVER, { rejectWithValue }) => {
  const server = new WalletServer();

  const data = await server.getLiveRatesApi();

  if ('warning' in data) {
    return rejectWithValue(data.warning);
  }

  return data;
});

/**
 * @description Get Currencies
 */
export const getCurrencies = createAsyncThunk(`${sliceName}/getCurrencies`, async (_NEVER, { rejectWithValue }) => {
  const server = new WalletServer();

  const data = await server.getCurrenciesApi();

  if ('warning' in data) {
    return rejectWithValue(data.warning);
  }

  return data;
});
