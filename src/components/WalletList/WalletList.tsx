import styles from './walletList.module.scss';
import type { WalletItem } from '../../types/wallet';
import logo from '../../assets/logo.png';
import useWalletListController from './useWalletListController';
import { useAppSelector } from '../../hooks/store';
import Skeleton from '../Skeleton/Skeleton';

interface WalletListProps {
  items: WalletItem[];
}

/**
 * @description WalletList component
 * @returns {JSX.Element}
 */
const WalletList = ({ items } : WalletListProps) => {
  const { loading } = useAppSelector((state) => state.wallet);
  const { imageErrors, handleImageError } = useWalletListController();

  return (
    <section className={styles.walletList}>
      <main className={styles.walletListContainer}>
        {loading ? Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} active={true} className={styles.walletItem} />
        )) : items.map((item) => (
          <div key={item.currency} className={styles.walletItem}>
            <div className={styles.walletItemInfo}>
              <img 
                src={imageErrors[item.currency] ? logo : (item.icon || logo)} 
                alt={item.name} 
                className={styles.walletItemInfoIcon}
                onError={() => handleImageError(item.currency)}
              />
              <span>{item.name}</span>
            </div>
            <div className={styles.walletItemAmount}>
              <h3 className={styles.walletItemAmountValue}>{item.amount} {item.currency}</h3>
              <p className={styles.walletItemAmountUsdValue}>$ {item.usdValue}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default WalletList;