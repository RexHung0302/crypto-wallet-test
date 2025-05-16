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
