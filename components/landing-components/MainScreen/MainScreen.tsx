import styles from "./MainScreen.module.scss";
import Button from "../../reusable-components/Button/Button";
import { Dispatch, SetStateAction } from "react";

interface Props {
  openSignupModal: Dispatch<SetStateAction<boolean>>;
}

const MainScreen: React.FC<Props> = ({ openSignupModal }) => {
  return (
    <main className={styles["mainScreenWrapper"]}>
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
