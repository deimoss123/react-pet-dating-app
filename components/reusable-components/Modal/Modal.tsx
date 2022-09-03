import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import styles from "./Modal.module.scss";
import { motion } from "framer-motion";
interface Props {
  children: ReactNode;
  isOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ children, isOpen, setModalOpen }) => {
  return (
    <>
      <motion.div
        className={styles.ModalOverlay}
        onClick={() => setModalOpen(false)}
        transition={{
          duration: 0.3,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={styles.Modal}
          onClick={e => e.stopPropagation()}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          initial={{
            y: "-100vh",
            opacity: 0,
          }}
          animate={{
            y: "0",
            opacity: 1,
          }}
          exit={{
            y: "100vh",
            opacity: 0,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;
