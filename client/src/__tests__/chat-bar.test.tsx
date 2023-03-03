import {Socket} from 'socket.io-client';
import { SocketIO, Server } from 'mock-socket';
import { render, waitFor, screen } from "@testing-library/react";
import ChatBar from "../pages/ChatBar";

describe('Testing connection', () => {
    const fakeURL = 'ws://localhost:8080';
    const mockServer = new Server(fakeURL);

    const socket = SocketIO(fakeURL);

    it('should emit message:new', async () => {

        // @ts-ignore
        render(<ChatBar socket={socket as Socket}/>);

        await waitFor(() => {
            mockServer.emit('newUserResponse', [[{userName: 'Francis', socketId: "123-abc-3456"},{userName: 'Gon', socketId: "123-abd-18"}]]);
        });

        expect(await screen.findByText("Gon")).toBeInTheDocument();
        expect(await screen.findByText("Francis")).toBeInTheDocument();

    });
});

