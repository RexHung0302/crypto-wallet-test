
import { IoArrowRedoOutline } from 'react-icons/io5';
import styles from './walletFunctionButtons.module.scss';
import clsx from 'clsx';

/**
 * @description Wallet function buttons component
 * @returns {JSX.Element}
 */
const WalletFunctionButtons = () => {
  return <div className={styles.walletFunctionButtons}>
    <div className={styles.walletFunctionButton}>
      <div className={styles.walletFunctionButtonIconDiv}>
        <IoArrowRedoOutline className={styles.walletFunctionButtonIcon} />
      </div>
      <span className={styles.walletFunctionButtonText}>Send</span>
    </div>
    <div className={styles.walletFunctionButton}>
      <div className={styles.walletFunctionButtonIconDiv}>
        <IoArrowRedoOutline className={clsx(styles.walletFunctionButtonIcon, styles.walletFunctionButtonIconReceive)} />
      </div>
      <span className={styles.walletFunctionButtonText}>Receive</span>
    </div>
  </div>;
};

export default WalletFunctionButtons;