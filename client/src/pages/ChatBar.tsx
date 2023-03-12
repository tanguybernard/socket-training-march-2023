import React, {useEffect, useState} from 'react';
import {Socket} from "socket.io-client";
const ChatBar = ({ socket } : {socket: Socket}) => {

    //TODO replace any to Type
    const [users, setUsers] = useState<any[]>([]);


    useEffect(() => {
        //TODO Typer data
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
