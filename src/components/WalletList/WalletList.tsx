import styles from './walletList.module.scss';
import type { WalletItem } from '../../types/wallet';
interface WalletListProps {
  items: WalletItem[];
}

/**
 * @description WalletList component
 * @returns {JSX.Element}
 */
const WalletList = ({ items} : WalletListProps) => {
  return (
    <section className={styles.walletList}>
      <main>
        {/* Will write wallet list here */}
        {items.map((item) => (
          <div key={item.currency}>
            <img src={item.icon} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>$ {item.amount}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default WalletList;