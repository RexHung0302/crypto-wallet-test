import Header from "../../components/Layout/Header/Header";
import WalletBalance from "../../components/WalletBalance/WalletBalance";
import WalletFunctionButtons from "../../components/WalletFunctionButtons/WalletFunctionButtons";
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
      <WalletBalance />
      <WalletFunctionButtons />
      <WalletList items={walletItems} />
    </div>
  );
};

export default Wallet;