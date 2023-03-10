import React from 'react';
import logo from './logo.svg';
import './App.css';

import { io } from "socket.io-client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Header/Navbar";
const socket = io(process.env.REACT_APP_SOCKET_URL as string);

function App() {
    return (

        <BrowserRouter>
            <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Login socket={socket} />}></Route>
                        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
                        <Route path="/home" element={<HomePage />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}
export default App;
