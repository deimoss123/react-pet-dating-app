import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import styles from "./Modal.module.scss";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ children, isOpen, setModalOpen }) => {
  return !isOpen ? null : (
    <>
      <div
        className={styles.ModalOverlay}
        onClick={() => setModalOpen(false)}
      />
      <div className={styles.Modal}>{children}</div>
    </>
  );
};

export default Modal;
