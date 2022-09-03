import { FC, SyntheticEvent } from "react";
import styles from "./HamburgerIcon.module.scss";

interface Props {
  isChecked: boolean;
  onClick: (e: SyntheticEvent) => void;
  className?: string;
}

const HamburgerIcon: FC<Props> = ({ isChecked, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        styles.HamburgerIcon +
        (isChecked ? ` ${styles.isChecked}` : "") +
        (className ? ` ${className}` : "")
      }
    >
      <span className={styles.line1} />
      <span className={styles.line2} />
      <span className={styles.line3} />
      <span className={styles.line4} />
    </button>
  );
};

export default HamburgerIcon;
