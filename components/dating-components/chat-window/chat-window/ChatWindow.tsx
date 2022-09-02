import { Key, useEffect, useState } from "react";
import styles from "./styles/ChatWindow.module.scss";
import axios from "axios";
import Heading from "./Heading";

interface Response {
    "postId": Number;
    "id": Number;
    "name": String;
    "email":  String;
    "body": String;
  }

interface chatBoxMsg {  
    id: Number;
    type: Number;
    msgText: String;
}

interface Props {
    currentChat: Number;
    likedPets: {
        id: number;
        name: string;
        age: string;
        type: string;
        image: string;
    }[];
}

interface Response extends Array<Response>{}

const ChatWindow: React.FC<Props> = ({likedPets, currentChat}) => {
    const [messages, setMessages] = useState<String[]>([]);
    const [chatBoxMsg, setChatBoxMsg] = useState<chatBoxMsg[]>([]);

const getData = async () => {
    await axios.get<Response[]>('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            response.data.map((msg) => {
                setMessages((prev) => [...prev, msg["body"]]);
            });
    });
}

useEffect(() => {
    getData();
    console.log(messages);
} , []);

const addResponse = async () => {
    await setTimeout(async () => {
        await setChatBoxMsg(oldMsg => [...oldMsg, {
            id: chatBoxMsg.length + 1,
            type: 0,
            msgText: messages[Math.floor(Math.random() * messages.length)]
        }]);
        console.log(chatBoxMsg);
    }, 2000);
}

const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
        await setChatBoxMsg(oldMsg => [...oldMsg, {
            id: chatBoxMsg.length + 1,
            type: 1,
            msgText: target.value
        }]);
        target.value = "";
        addResponse();
    }
}

  return (
    <>
    <div className={styles.mainContainer}>
        <Heading likedPets={likedPets} currentChat={currentChat}/>    
        <div className={styles.chatBox}>
        <div className={styles.msgContainer}>
                {chatBoxMsg.map(msg => (
                    <div key={msg.id as Key} className= {msg.type === 0 ? styles.chatMsgLeftContainer : styles.chatMsgRightContainer}>
                        <div className={msg.type === 0 ? styles.chatMsgLeft : styles.chatMsgRight}>
                            {msg.msgText}
                        </div>  
                    </div>    
                ))} 
            </div>
        <input type="text" placeholder="Type a message..." name="" id="" className={styles.inputField} onKeyDown={handleKeyDown} />
        </div>
    </div>
    </>
  )
}

export default ChatWindow;
