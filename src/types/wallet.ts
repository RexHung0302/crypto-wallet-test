export interface Currency {
  coin_id: string;
  name: string;
  symbol: string;
  colorful_image_url: string;
  display_decimal: number;
  token_decimal: number;
  contract_address: string;
  withdrawal_eta: string[];
  gray_image_url: string;
  has_deposit_address_tag: boolean;
  min_balance: number;
  blockchain_symbol: string;
  trading_symbol: string;
  code: string;
  explorer: string;
  is_erc20: boolean;
  gas_limit: number;
  token_decimal_value: string;
  supports_legacy_address: boolean;
  deposit_address_tag_name: string;
  deposit_address_tag_type: string;
  num_confirmation_required: number;
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

export enum WalletTab {
  Wallet = 'Wallet',
  DeFi = 'DeFi',
}

export interface GetWalletBalanceResponse {
  wallet: WalletBalance[];
}

export interface GetLiveRatesResponse {
  tiers: ExchangeRate[];
}

export interface GetCurrenciesResponse {
  currencies: Currency[];
}
