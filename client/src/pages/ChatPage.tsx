import React, {useEffect, useState} from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import {Socket} from "socket.io-client";
import {Message} from "../Message";
const ChatPage = ({ socket } : {socket: Socket}) => {

    const [messages, setMessages] = useState<Message[]>([]);
    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    return (
        <div className="chat">
            <ChatBar />
            <div className="chat__main">
                <ChatBody messages={messages} />
                <ChatFooter socket={socket} />
            </div>
        </div>
    );
};
export default ChatPage;
