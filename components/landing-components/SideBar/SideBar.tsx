import { Dispatch, FC, SetStateAction } from "react";
import Button from "../../reusable-components/Button/Button";
import HeaderListItem from "../HeaderListItem/HeaderListItem";
import styles from "./SideBar.module.scss";
import Link from "next/link";

interface Props {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const SideBar: FC<Props> = ({ isOpen, setLoginModalOpen, setSidebarOpen }) => {
  function onLoginBtnClick() {
    setSidebarOpen(false);
    setLoginModalOpen(true);
  }

  return (
    <div className={styles.SideBar + (isOpen ? ` ${styles.open}` : "")}>
      <nav>
        <ul>
          <HeaderListItem text="Products" />
          <HeaderListItem text="Learn" />
          <HeaderListItem text="Safety" />
          <HeaderListItem text="Support" />
          <HeaderListItem text="Download" />
          <HeaderListItem onClick={onLoginBtnClick} text="Log In" />
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
