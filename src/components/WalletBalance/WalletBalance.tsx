
import styles from './walletBalance.module.scss';
import logoSvg from '../../assets/logo.svg';
import { useAppSelector } from '../../hooks/store';

/**
 * @description Wallet balance component
 * @returns {JSX.Element}
 */
const WalletBalance = () => {
  const { totalUsdValue } = useAppSelector((state) => state.wallet);

  return <div className={styles.walletBalance}>
    <div className={styles.walletBalanceLogoRow}>
      <img src={logoSvg} alt="logo" className={styles.walletBalanceLogo} />
      <span className={styles.walletBalanceTitle}>crypto.com</span>
      <span className={styles.walletBalanceSeparator}>|</span>
      <span className={styles.walletBalanceSubtitle}>DEFI WALLET</span>
    </div>
    <div className={styles.walletBalanceBalanceRow}>
      <span className={styles.walletBalanceBalanceSymbol}>$</span>
      <span className={styles.walletBalanceBalanceValue}>{totalUsdValue.toLocaleString()}</span>
      <span className={styles.walletBalanceBalanceCurrency}>USD</span>
    </div>
  </div>;
};

export default WalletBalance;