import React, {useEffect, useState} from 'react';
import {Socket} from "socket.io-client";
import {Message} from "../Message";
const ChatBar = ({ socket } : {socket: Socket}) => {

    const [users, setUsers] = useState<any[]>([]);


    useEffect(() => {
        socket.on('newUserResponse', (data) => {
            setUsers(data)
        });
    }, [users]);

    return (
        <div className="chat__sidebar">
            <h2>Open Chat</h2>
            <div>
                <h4 className="chat__header">ACTIVE USERS</h4>
                <div className="chat__users">
                    {users.map(user => (<p key={user.socketId}>{user.userName}</p>))}
                </div>
            </div>
        </div>
    );
};
export default ChatBar;
