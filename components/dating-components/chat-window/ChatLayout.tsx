import LikedPets from "./liked-list/LikedPets";
import ChatWindow from "./chat-window/ChatWindow";
import styles from "./styles/ChatLayout.module.scss";
import { useState } from "react";

const ChatLayout: React.FC = () => {
    const [currentChat, setCurrentChat] = useState<Number>(0);
    const [likedPets, setLikedPets] = useState([{
      id: 1,
      name: "Luna",
      age: "1 years",
      type: "Dog",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
      id: 2, 
      name: "Garp",
      age: "3 years",
      type: "Cat",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
      id: 3,
      name: "Bella",
      age: "1 years",
      type: "Dog",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
      id: 4,
      name: "Vannesa",
      age: "4 years",
      type: "Dog",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
]);

  return (
    <>
      <div className={styles.chat}>
        <div  className={styles.chatLayout}>
          <LikedPets likedPets={likedPets} setCurrentChat={setCurrentChat} currentChat={currentChat}/>
        </div>
        <div className={currentChat === 0 ? styles.none : styles.chatWindow}>
          <ChatWindow likedPets={likedPets} currentChat={currentChat}/>
        </div>
      </div>
    </>
  )
}

export default ChatLayout;
