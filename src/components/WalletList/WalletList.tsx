import styles from './walletList.module.scss';
import type { WalletItem } from '../../types/wallet';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';

interface WalletListProps {
  items: WalletItem[];
}

/**
 * @description WalletList component
 * @returns {JSX.Element}
 */
const WalletList = ({ items} : WalletListProps) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (currency: string) => {
    setImageErrors(prev => ({
      ...prev,
      [currency]: true
    }));
  };

  useEffect(() => {
    console.log('imageErrors', imageErrors);
  }, [imageErrors]);

  return (
    <section className={styles.walletList}>
      <main className={styles.walletListContainer}>
        {/* Will write wallet list here */}
        {items.map((item) => (
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