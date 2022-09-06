import LikedPets from "./liked-list/LikedPets";
import ChatWindow from "./chat-window/ChatWindow";
import styles from "./styles/ChatLayout.module.scss";
import { useEffect, useState } from "react";
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

interface ChatState {
  isChatOpen : boolean;
  setIsChatOpen: Function;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-300px" },
};

const ChatLayout = ({ matchedPets, isChatOpen, setIsChatOpen }: MatchedPets & ChatState) => {
  const [currentChat, setCurrentChat] = useState<Number>(0);

  return (
    <>
      <div className={styles.chatWrapper}>
        
        <motion.nav 
          animate={!isChatOpen ? "open" : "closed"}
          variants={variants}
        >
          <button className={styles.toggleOn} style={{display:isChatOpen?"none":"block"}} onClick={() => setIsChatOpen(!isChatOpen)}>
            <RightArrow />
          </button>
        </motion.nav>
        <motion.nav
          className={styles.chat}
          style={{ width: isChatOpen ? "300px" : "5px" }}
          animate={isChatOpen ? "open" : "closed"}
          variants={variants}
        >
          <div className={styles.chatLayout}>
            <LikedPets
              likedPets={matchedPets}
              setCurrentChat={setCurrentChat}
              currentChat={currentChat}
              setIsOpen={setIsChatOpen}
            />
          </div>
          <div className={currentChat === 0 || !isChatOpen ? styles.none : styles.chatWindow}>
            <ChatWindow likedPets={matchedPets} currentChat={currentChat} />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default ChatLayout;
