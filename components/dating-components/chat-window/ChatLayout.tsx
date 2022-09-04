import LikedPets from "./liked-list/LikedPets";
import ChatWindow from "./chat-window/ChatWindow";
import styles from "./styles/ChatLayout.module.scss";
import { useState } from "react";


export interface MatchedPet {
  id: number;
  name: string;
  age: string;
  type: string;
  image: string;
}

export type MatchedPets = {
  matchedPets: MatchedPet[];
}


const ChatLayout = ({ matchedPets }: MatchedPets ) => {
    const [currentChat, setCurrentChat] = useState<Number>(0);


  return (
    <>
      <div className={styles.chat}>
        <div  className={styles.chatLayout}>
          <LikedPets likedPets={matchedPets} setCurrentChat={setCurrentChat} currentChat={currentChat}/>
        </div>
        <div className={currentChat === 0 ? styles.none : styles.chatWindow}>
          <ChatWindow likedPets={matchedPets} currentChat={currentChat}/>
        </div>
      </div>
    </>
  )
}

export default ChatLayout;
