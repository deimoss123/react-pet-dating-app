import { Dispatch, FC, SetStateAction } from "react";
import Button from "../../reusable-components/Button/Button";
import HeaderListItem from "../HeaderListItem/HeaderListItem";
import styles from "./SideBar.module.scss";
import Link from "next/link";

interface Props {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const SideBar: FC<Props> = ({ isOpen, setSidebarOpen }) => {
  function onSignUpBtnClick() {
    setSidebarOpen(false);
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
        {/* why isnt the button showing up???? */}
        <Link href="/dating">
          <Button class="logIn">Log In</Button>
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
