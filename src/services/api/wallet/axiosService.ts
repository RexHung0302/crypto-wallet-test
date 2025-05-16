import axiosInstance from "../../axiosInstance";
const basicUrl = '/wallet';

/**
 * @description Get Wallet Balance
 */
export const getWalletBalanceApi = async () => {
  const apiResult = await axiosInstance.get(`${basicUrl}/wallet-balance.json`);
  return apiResult.data;
};

/**
 * @description Get Live Rates
 */
export const getLiveRatesApi = async () => {
  const apiResult = await axiosInstance.get(`${basicUrl}/live-rates.json`);
  return apiResult.data;
};
