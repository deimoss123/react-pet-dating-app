import LikedPets from "./liked-list/LikedPets";
import ChatWindow from "./chat-window/ChatWindow";
import styles from "./styles/ChatLayout.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../reusable-components/Button/Button";
import { RightArrow } from "../../../public/icons/svg-icons";

export interface MatchedPet {
  id: number;
  name: string;
  age: string;
  type: string;
  image: string;
}

export type MatchedPets = {
  matchedPets: MatchedPet[];
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-300px" },
};

const ChatLayout = ({ matchedPets }: MatchedPets) => {
  const [currentChat, setCurrentChat] = useState<Number>(0);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div>
        
        <motion.nav 
          animate={!isOpen ? "open" : "closed"}
          variants={variants}
        >
          <button style={{display:isOpen?"none":"block"}} onClick={() => setIsOpen(!isOpen)}>
            <RightArrow />
          </button>
        </motion.nav>
        <motion.nav
          className={styles.chat}
          style={{ width: isOpen ? "300px" : "5px" }}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <div className={styles.chatLayout}>
            <LikedPets
              likedPets={matchedPets}
              setCurrentChat={setCurrentChat}
              currentChat={currentChat}
              setIsOpen={setIsOpen}
            />
          </div>
          <div className={currentChat === 0 || !isOpen ? styles.none : styles.chatWindow}>
            <ChatWindow likedPets={matchedPets} currentChat={currentChat} />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default ChatLayout;
