import styles from './header.module.css';
import logo from '../../assets/Logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
