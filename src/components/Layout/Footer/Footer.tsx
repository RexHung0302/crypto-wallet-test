
import { SlWallet } from 'react-icons/sl';
import styles from './footer.module.scss';
import { BsBoxSeam } from 'react-icons/bs';
import clsx from 'clsx';
import { WalletTab } from '../../../types/wallet';
interface FooterProps {
  selectedTab: WalletTab;
  onSelectTab: (tab: WalletTab) => void;
}

/**
 * @description Footer component
 * @returns {JSX.Element}
 */
const Footer = ({ selectedTab, onSelectTab }: FooterProps) => {
  return <div className={styles.footer}>
    <div className={clsx(styles.footerButton, selectedTab === 'Wallet' && styles.footerButtonActive)} onClick={() => onSelectTab(WalletTab.Wallet)}>
      <div className={styles.footerButtonIconDiv}>
        <SlWallet className={styles.footerButtonIcon} />
        <span className={styles.footerButtonText}>Wallet</span>
      </div>
    </div>
    <div className={clsx(styles.footerButton, selectedTab === 'DeFi' && styles.footerButtonActive)} onClick={() => onSelectTab(WalletTab.DeFi)}>
      <div className={styles.footerButtonIconDiv}>
        <BsBoxSeam className={styles.footerButtonIcon} />
        <span className={styles.footerButtonText}>DeFi</span>
      </div>
    </div>
  </div>;
};

export default Footer;