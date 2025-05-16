import WalletList from "../../components/WalletList/WalletList";
import styles from './wallet.module.scss';
/**
 * @description Wallet page
 * @returns {JSX.Element}
 */
const Wallet = () => {
  const fakeWalletItems = [
    {
      currency: 'BAT',
      name: 'Basic Attention Token',
      amount: 67.87517775,
      usdValue: 18.20,
      icon: 'https://assets.coingecko.com/coins/images/1175/small/bat.png?1547034796',
    },
    {
      currency: 'ETH',
      name: 'Ethereum',
      amount: 0.06001,
      usdValue: 14.24,
      icon: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1693318750',
    },
    {
      currency: 'USDT',
      name: 'Tether',
      amount: 4.221346,
      usdValue: 4.24,
      icon: 'https://assets.coingecko.com/coins/images/325/small/usdt.png?1650886575',
    },
    {
      currency: 'BTC',
      name: 'Bitcoin',
      amount: 0,
      usdValue: 0,
      icon: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1747032970',
    },
    {
      currency: 'CRO',
      name: 'Crypto.com Coin',
      amount: 0,
      usdValue: 0,
      icon: 'https://assets.coingecko.com/coins/images/11839/small/cro.png?1693318750',
    },
    {
      currency: 'MCO',
      name: 'Monaco',
      amount: 0,
      usdValue: 0,
    }
  ];

  return (
    <div className={styles.wallet}>
      <WalletList items={fakeWalletItems} />
    </div>
  );
};

export default Wallet;