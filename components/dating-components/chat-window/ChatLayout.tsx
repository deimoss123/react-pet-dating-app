import LikedPets from "./liked-list/LikedPets";
import ChatWindow from "./chat-window/ChatWindow";
import styles from "./styles/ChatLayout.module.scss";


const ChatLayout: React.FC = () => {
  

  return (
    <>
      <div className={styles.chat}>
        <div  className={styles.chatLayout}>
          <LikedPets />
        </div>
        <div className={styles.chatWindow}>
          <ChatWindow />
        </div>
      </div>
    </>
  )
}

export default ChatLayout;
