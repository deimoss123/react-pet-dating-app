import Image from "next/image";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Image src="/icons/pawtners-logo.png" alt="logo" layout="fill" />
        </div>
        <ul>
          <li>Products</li>
          <li>Learn</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Download</li>
        </ul>

        <div className={styles.navRight}>
          <button className={styles.hamburgerIcon}>
            <Image
              src="/icons/hamburger-icon.png"
              alt="menu icon"
              width="50px"
              height="50px"
            />
          </button>
          <button className={styles.languageSelect}>
            <Image
              src="/icons/lang-icon.png"
              alt="language selector icon"
              width="30px"
              height="30px"
            />
            English
          </button>
          <button className={styles.loginBtn}>Log In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
