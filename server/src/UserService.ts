
type User = {userName: string, socketId: string}

export class UserService {

    constructor(public users: User[] = [] ) {
    }

    addUser(user: User){
        this.users.push(user);
        return this.users
    }


    removeUserBySocketId(socketId: string){
        this.users = this.users.filter((user) => user.socketId !== socketId);
    }
}
