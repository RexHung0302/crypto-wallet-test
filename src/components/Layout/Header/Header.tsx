import styles from './header.module.scss';
import { IoSettingsOutline } from "react-icons/io5";
import { RiQrScan2Line } from "react-icons/ri";

/**
 * @description Header component
 * @returns {JSX.Element}
 */
const Header = () => {
  return <div className={styles.header}>
    <IoSettingsOutline className={styles.headerIcon}/>
    <RiQrScan2Line className={styles.headerIcon}/>
  </div>;
};

export default Header;
