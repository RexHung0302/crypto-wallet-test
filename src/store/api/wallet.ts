import axiosInstance from './axiosInstance';

// If you need to change the base url, you can change it here
const getBaseUrl = () => '';

/**
 * @description Get Wallet Balance
 * @returns {Promise<{ qrString: string } | IBasicAPIErrorResponse>}
 */
const getWalletBalance = async () => {
  const response = await axiosInstance.get(`${getBaseUrl()}/wallet-balance.json`);

  // If there is an error, it will be thrown here
  if ('warning' in response) {
    throw response.warning;
  }
  return response.data;
};

/**
 * @description Get Live Rates
 * @returns {Promise<{ qrString: string } | IBasicAPIErrorResponse>}
 */
const getLiveRates = async () => {
  const response = await axiosInstance.get(`${getBaseUrl()}/live-rates.json`);

  // If there is an error, it will be thrown here
  if ('warning' in response) {
    throw response.warning;
  }
  return response.data;
};

export {
  getWalletBalance,
  getLiveRates,
};

