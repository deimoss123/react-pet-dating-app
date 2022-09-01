import LikedPets from "./liked-list/LikedPets";
import styles from "./styles/ChatLayout.module.scss";


const ChatLayout: React.FC = () => {
  

  return (
    <>
      <div className={styles.chatLayout}>
          <LikedPets />
      </div>
    </>
  )
}

export default ChatLayout;
