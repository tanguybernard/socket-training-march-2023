import React, { useState } from 'react';
import {Socket} from "socket.io-client";
const ChatFooter = ({ socket }: {socket : Socket}) => {
    const [message, setMessage] = useState('');

    /**
     * function checks if the text field is empty and if the username exists in the local storage (sign-in from the Home page)
     * before sending the message
     * @param e
     */
    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem('userName')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage('');
    };
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    );
};
export default ChatFooter;
