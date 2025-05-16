import { createSlice } from '@reduxjs/toolkit';

import extraReducers from './extraReducers';
import * as reducers from './reducers';
import { initialState } from './state';
import { sliceName } from './type';

export const memberSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: reducers,
  extraReducers,
});

export const { setWalletItems, setLoading, setTotalUsdValue } = memberSlice.actions;
export default memberSlice.reducer;
