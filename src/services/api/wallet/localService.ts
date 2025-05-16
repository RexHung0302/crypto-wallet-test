import liveRatesJson from '../../mockApi/live-rates.json';
import walletBalanceJson from '../../mockApi/wallet-balance.json';
import currenciesJson from '../../mockApi/currencies.json';
import type { APIResponse } from '../../../types/api';
import type { GetLiveRatesResponse, GetWalletBalanceResponse, GetCurrenciesResponse } from '../../../types/wallet';

/**
 * @description Get Wallet Balance
 */
export const getWalletBalanceApi = () => {
  return new Promise<APIResponse<GetWalletBalanceResponse>>(resolve => {
    setTimeout(() => {
      resolve({
        ok: 'true',
        data: {
          wallet: walletBalanceJson.wallet,
        },
      });
    }, 1000);
  });

  // Or can return ok false and warning message
  // return new Promise<APIResponse>(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       ok: 'false',
  //       warning: 'Failed to get wallet balance',
  //     });
  //   }, 1000);
  // });
};

/**
 * @description Get Live Rates
 */
export const getLiveRatesApi = () => {
  return new Promise<APIResponse<GetLiveRatesResponse>>(resolve => {
    setTimeout(() => {
      resolve({
        ok: 'true',
        data: {
          tiers: liveRatesJson.tiers,
        },
      });
    }, 1000);
  });

  // Or can return ok false and warning message
  // return new Promise<APIResponse>(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       ok: 'false',
  //       warning: 'Failed to get live rates',
  //     });
  //   }, 1000);
  // });
};

/**
 * @description Get Currencies
 */
export const getCurrenciesApi = () => {
  return new Promise<APIResponse<GetCurrenciesResponse>>(resolve => {
    setTimeout(() => {
      resolve({
        ok: 'true',
        data: {
          currencies: currenciesJson.currencies,
        },
      });
    }, 1000);
  });

  // Or can return ok false and warning message
  // return new Promise<APIResponse>(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       ok: 'false',
  //       warning: 'Failed to get currencies',
  //     });
  //   }, 1000);
  // });
};
