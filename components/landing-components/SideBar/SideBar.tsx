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
        </ul>
        {/* Temporary button */}
        <button
          onClick={onLoginBtnClick}
          style={{ color: "#fff", fontSize: "2rem" }}
        >
          Log In
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
