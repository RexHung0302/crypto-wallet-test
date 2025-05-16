import Header from "../../components/Layout/Header/Header";
import WalletList from "../../components/WalletList/WalletList";
import useWalletController from "./useWalletController";
import styles from './wallet.module.scss';

/**
 * @description Wallet page
 * @returns {JSX.Element}
 */
const Wallet = () => {
  const { walletItems } = useWalletController();

  return (
    <div className={styles.wallet}>
      <Header />
      <WalletList items={walletItems} />
    </div>
  );
};

export default Wallet;