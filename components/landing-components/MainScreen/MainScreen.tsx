import styles from "./MainScreen.module.css";
import Button from "../../reusable-components/Button/Button";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MainScreen: React.FC<Props> = ({
  setModalOpen,
}) => {
  return (
      <div className={styles["mainScreenWrapper"]}>
        <video autoPlay loop muted plays-inline="true">
          <source src="/video/background-vid.mp4"/>
        </video>
        <h1>Pawtners® 2.0</h1>
        <Button onClick={() => setModalOpen(true)} class="hover">Create account</Button>
      </div>

  );
};

export default MainScreen;

