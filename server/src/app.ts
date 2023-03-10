import express from 'express';

import {Server, Socket} from "socket.io";
import {Connection} from "./Connection";
import {UserService} from "./UserService";


const app = express();


const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());


app.get('/api', (req, res) => {
    res.json({
        message: 'Hello guys',
    });
});



const io = new Server(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const userService = new UserService();
io.on('connection', (socket: Socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    new Connection(io, socket,userService);
});



export default http;
