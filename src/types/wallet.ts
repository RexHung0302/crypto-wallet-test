export interface Currency {
  coin_id: string;
  name: string;
  symbol: string;
  colorful_image_url: string;
  display_decimal: number;
}

export interface WalletBalance {
  currency: string;
  amount: number;
}

export interface ExchangeRate {
  from_currency: string;
  to_currency: string;
  rates: {
    amount: string;
    rate: string;
  }[];
}

export interface WalletItem {
  currency: string; // currency code
  name: string; // currency name
  amount: number; // currency amount
  usdValue: number; // currency value in USD
  icon?: string; // currency icon
}
