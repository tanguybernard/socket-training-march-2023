import {UserService} from "./UserService";

export class Connection {
    constructor(public io, public socket, public userService: UserService) {

        socket.on('message', (data) => this.handleMessage(data));
        socket.on('newUser', (user) => this.handleUser(user));
        socket.on('disconnect', () => this.disconnect());


    }

    //TODO Typer data
    handleMessage(data) {
        console.log(data);
        this.sendMessage(data);
    }


    //TODO Typer data
    sendMessage(data) {
        this.io.emit('messageResponse', data);
    }

    disconnect(){
        console.log('🔥: A user disconnected');
        this.userService.removeUserBySocketId(this.socket.id)
        //Sends the list of users to the client
        this.io.emit('newUserResponse', this.userService.users)
        this.socket.disconnect();
    }


    //TODO Typer user
    private handleUser(user) {
        const users = this.userService.addUser(user);
        console.log('newUSer', users)
        this.io.emit('newUserResponse', users);

    }
}


