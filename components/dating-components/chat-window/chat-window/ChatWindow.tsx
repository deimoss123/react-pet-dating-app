import { Key, useEffect, useState } from "react";
import axios from "axios";

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

interface Response extends Array<Response>{}

const ChatWindow: React.FC = () => {
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
    <div>
        {chatBoxMsg.map(msg => (
            <div className="chat-msg" key={msg.id as Key}>
                <div>
                    {msg.msgText}
                </div>  
            </div>    
        ))}
    </div>
    <input type="text" name="" id="" onKeyDown={handleKeyDown} />
    </>
  )
}

export default ChatWindow;
