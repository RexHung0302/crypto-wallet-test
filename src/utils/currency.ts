interface Rate {
  amount: string;
  rate: string;
}

interface LiveRate {
  from_currency: string;
  to_currency: string;
  rates: Rate[];
}

/**
 * Calculate USD value based on amount and currency, According to README.md 
 * `[exchange rate for each currency to US Dollars](json/live-rates-json.md). For instance, if the user has 0.0026 BTC, and the live rate from BTC to USD is 9194.9300000000, then the USD balance for the currency is 0.0026 \* 9194.9300000000 = 23.906818 USD`
 * so the formula is `amount * rate`
 * @param amount - The amount of cryptocurrency
 * @param currency - The cryptocurrency code (e.g., 'BTC', 'ETH')
 * @param liveRates - Array of live rates from the API
 * @returns The USD value of the cryptocurrency
 */
export const calculateUSDValue = (
  amount: number,
  currency: string,
  liveRates: LiveRate[]
): number => {
  // If amount is 0, return 0
  if (amount === 0) return 0;

  // Find the matching rate for the currency
  const rateData = liveRates.find(
    (rate) => rate.from_currency === currency && rate.to_currency === 'USD'
  );

  if (!rateData || !rateData.rates.length) {
    console.warn(`No rate found for ${currency} to USD`);
    return 0;
  }

  // Get the first rate (assuming it's the most recent)
  const { rate } = rateData.rates[0];
  
  // Calculate USD value directly using the rate
  const usdValue = amount * parseFloat(rate);
  
  // Round to 2 decimal places
  return Math.round(usdValue * 100) / 100;
}; 