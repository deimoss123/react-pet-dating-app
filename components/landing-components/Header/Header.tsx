import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import HeaderListItem from "../HeaderListItem/HeaderListItem";
import SideBar from "../SideBar/SideBar";
import styles from "./Header.module.scss";
import Button from "../../reusable-components/Button/Button";
import Link from "next/link";
import HamburgerIcon from "../../reusable-components/HamburgerIcon/HamburgerIcon";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.topNav}>
        <div className={styles.logo}>
          <Image src="/icons/pawtners-logo.png" alt="logo" layout="fill" />
        </div>
        <ul>
          <HeaderListItem text="Products" />
          <HeaderListItem text="Learn" />
          <HeaderListItem text="Safety" />
          <HeaderListItem text="Support" />
          <HeaderListItem text="Download" />
        </ul>
        <div className={styles.navRight}>
          <HamburgerIcon
            isChecked={sidebarOpen}
            className={styles.hamburgerIcon}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <button className={styles.languageSelect}>
            <Image
              src="/icons/lang-icon.png"
              alt="language selector icon"
              width="30px"
              height="30px"
            />
            English
          </button>
          <Link href="/dating">
            <Button class="logIn">Log In</Button>
          </Link>
        </div>
      </nav>
      <SideBar
        setSidebarOpen={setSidebarOpen}
        isOpen={sidebarOpen}
      />
    </header>
  );
};

export default Header;
