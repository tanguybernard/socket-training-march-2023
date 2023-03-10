
import {UserService} from "../../src/UserService";

describe('UserService', () => {

    it("addUser", () => {
        //before
        const userService = new UserService();
        //when
        userService.addUser({userName: "John", socketId:"abc-12234"})
        //Then
        expect(userService.users).toEqual([{userName: "John", socketId:"abc-12234"}])
    })


})
