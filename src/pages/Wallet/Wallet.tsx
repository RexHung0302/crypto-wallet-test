import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import WalletBalance from "../../components/WalletBalance/WalletBalance";
import WalletFunctionButtons from "../../components/WalletFunctionButtons/WalletFunctionButtons";
import WalletList from "../../components/WalletList/WalletList";
import type { WalletItem } from "../../types/wallet";
import useWalletController from "./useWalletController";
import styles from './wallet.module.scss';

/**
 * @description Wallet page
 * @returns {JSX.Element}
 */
const Wallet = () => {
  const { selectedTab, walletItems, onSetSelectedTab } = useWalletController();

  return (
    <div className={styles.wallet}>
      <Header />
      <WalletBalance />
      <WalletFunctionButtons />
      <div className={styles.walletContent}>
        <RenderTabContent walletItems={walletItems} selectedTab={selectedTab} />
      </div>
      <Footer selectedTab={selectedTab} onSelectTab={onSetSelectedTab} />
    </div>
  );
};

const RenderTabContent = ({ walletItems, selectedTab }: { walletItems: WalletItem[], selectedTab: 'Wallet' | 'DeFi' }) => {
  switch (selectedTab) {
    case 'Wallet':
      return <WalletList items={walletItems} />;
    case 'DeFi':
      return <div>DeFi</div>;
  }
};

export default Wallet;