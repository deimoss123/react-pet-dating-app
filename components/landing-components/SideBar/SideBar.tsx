import { FC } from "react";
import HeaderListItem from "../HeaderListItem/HeaderListItem";
import styles from "./SideBar.module.scss";

interface Props {
  isOpen: boolean;
}

const SideBar: FC<Props> = ({ isOpen }) => {
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
      </nav>
    </div>
  );
};

export default SideBar;
