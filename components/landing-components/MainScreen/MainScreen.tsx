import styles from "./MainScreen.module.css";
import Button from "../../reusable-components/Button/Button";

const MainScreen: React.FC = () => {
  return (
      <div className={styles["mainScreenWrapper"]}>
        <video autoPlay loop muted plays-inline="true">
          <source src="/video/background-vid.mp4"/>
        </video>
        <h1>Pawtners® 2.0</h1>
        <Button class="hover">Create account</Button>
      </div>

  );
};

export default MainScreen;

