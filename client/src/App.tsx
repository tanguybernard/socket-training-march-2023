import React from 'react';
import logo from './logo.svg';
import './App.css';

import { io } from "socket.io-client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Header/Navbar";
import NavbarLayout from "./components/NavbarLayout";
const socket = io(process.env.REACT_APP_SOCKET_URL as string);

function App() {
    return (

        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login socket={socket} />}></Route>
                        <Route element={<NavbarLayout/>}>
                            <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
                            <Route path="/home" element={<HomePage />}></Route>
                        </Route>
                    </Routes>
            </BrowserRouter>
    );
}
export default App;
