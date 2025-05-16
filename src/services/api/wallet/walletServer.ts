// import * as axiosService from './axiosService';
import * as localService from './localService';
import type { GetCurrenciesResponse, GetLiveRatesResponse, GetWalletBalanceResponse } from '../../../types/wallet';
import type { APIResponse, BasicAPIErrorResponse } from '../../../types/api';

class WalletServer {
  /**
   * @description Get Wallet Balance
   * @returns {}
   */
  async getWalletBalanceApi(): Promise<APIResponse<GetWalletBalanceResponse> | BasicAPIErrorResponse> {
    // Can Choose to use axiosService or localService(When you want to use mock data or api is not ready)
    // return axiosService.getWalletBalanceApi();
    return localService.getWalletBalanceApi();
  };
  /**
   * @description Get Live Rates
   * @returns {}
   */
  async getLiveRatesApi(): Promise<APIResponse<GetLiveRatesResponse> | BasicAPIErrorResponse> {
    // Can Choose to use axiosService or localService(When you want to use mock data or api is not ready)
    // return axiosService.getLiveRatesApi();
    return localService.getLiveRatesApi();
  };
  /**
   * @description Get Currencies
   * @returns {}
   */
  async getCurrenciesApi(): Promise<APIResponse<GetCurrenciesResponse> | BasicAPIErrorResponse> {
    return localService.getCurrenciesApi();
  };
}

export default WalletServer;
