import express from 'express';

import {Server, Socket} from "socket.io";


const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());


app.get('/api', (req, res) => {
    res.json({
        message: 'Hello guys',
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

const io = new Server(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket: Socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    //Listens and logs the message to the console
    socket.on('message', (data) => {
        console.log(data);
        //sends the message to all the users on the server
        io.emit('messageResponse', data);
    });
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});
