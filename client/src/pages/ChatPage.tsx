import React, {useEffect, useRef, useState} from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import {Socket} from "socket.io-client";
import {Message} from "../Message";
const ChatPage = ({ socket } : {socket: Socket}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const divElement = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        socket.on('newUser', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        divElement.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat">
            <ChatBar socket={socket} />
            <div className="chat__main">
                <ChatBody messages={messages} lastMessageRef={divElement} />
                <ChatFooter socket={socket} />
            </div>
        </div>
    );
};
export default ChatPage;
