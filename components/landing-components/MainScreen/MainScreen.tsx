import styles from "./MainScreen.module.css";
import Button from "../../reusable-components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import Header from "../Header/Header";

interface Props {
  openSignupModal: Dispatch<SetStateAction<boolean>>;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
}

const MainScreen: React.FC<Props> = ({
  openSignupModal,
  setSidebarOpen,
  sidebarOpen,
  setLoginModalOpen,
}) => {
  return (
    <main className={styles["mainScreenWrapper"]}>
      <Header
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
      <video autoPlay loop muted plays-inline="true">
        <source src="/video/background-vid.mp4" />
      </video>
      <h1>Pawtners® 2.0</h1>
      <Button class="hover" onClick={() => openSignupModal(true)}>
        Create account
      </Button>
    </main>
  );
};

export default MainScreen;
