import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store/index';

// 使用這些自定義 hooks 來替代原本的 useDispatch 和 useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 錢包相關的自定義 selectors
export const useWallets = () => useAppSelector((state) => state.wallet.items);
export const useWalletLoading = () => useAppSelector((state) => state.wallet.loading);
export const useWalletError = () => useAppSelector((state) => state.wallet.error); 