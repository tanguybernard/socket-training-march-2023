import socketIOClient, {Socket} from 'socket.io-client';
// @ts-ignore
import { SocketIO, Server } from 'mock-socket';

import {act, render, waitFor, screen, getByTestId, queryByTestId, getByText} from "@testing-library/react";
import ChatBar from "../pages/ChatBar";

jest.mock('socket.io-client');

describe('Testing connection', () => {
    const fakeURL = 'ws://localhost:8080';
    const mockServer = new Server(fakeURL);

    const socket = SocketIO(fakeURL);

    afterEach(() => {
        jest.restoreAllMocks();
    });





    it('should emit message:new', async () => {

        // @ts-ignore
        //const {asFragment, getByText} = render(<ChatBar socket={socket as Socket}/>);
        console.log("test")

        // @ts-ignore
        const { getByTestId, getByText  } = render(<ChatBar socket={socket as Socket}/>);


        await waitFor(() => {
            // @ts-ignore
            mockServer.emit('newUserResponse', [[{userName: 'Francis', socketId: "123-abc-3456"},{userName: 'Gon', socketId: "123-abd-18"}]]);
        });


        //await sleep(1000);




        //expect(getByText('Gon')).toBeDefined();
        expect(await screen.findByText("Gon")).toBeInTheDocument();


        expect(await screen.findByText("Francis")).toBeInTheDocument();

        //expect(getByText('JohnDoe')).toBeInTheDocument()
        // @ts-ignore
        //expect(getByText('ACTIVE')).toBeInTheDocument()
        //expect(getByText('JohnDoe')).toBeInTheDocument()




        //expect(container.innerHTML).toMatchSnapshot();

    });
});

function sleep(ms:any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}




