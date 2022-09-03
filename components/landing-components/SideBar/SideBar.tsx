import { Dispatch, FC, SetStateAction } from "react";
import Button from "../../reusable-components/Button/Button";
import HeaderListItem from "../HeaderListItem/HeaderListItem";
import styles from "./SideBar.module.scss";

interface Props {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const SideBar: FC<Props> = ({ isOpen, setSidebarOpen, setLoginModalOpen }) => {
  function onSignUpBtnClick() {
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
        {/* why isnt the button showing up???? */}
        <Button class="logIn" onClick={onSignUpBtnClick}>
          Log In
        </Button>
      </nav>
    </div>
  );
};

export default SideBar;
