import WalletList from "../../components/WalletList/WalletList";
import styles from './wallet.module.scss';
/**
 * @description Wallet page
 * @returns {JSX.Element}
 */
const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <WalletList />
    </div>
  );
};

export default Wallet;