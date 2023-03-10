import test from 'node:test';
import assert from "node:assert";
import {UserService} from "../src/UserService";

test('UserService', () => {
    //before
    const userService = new UserService();
    //when
    userService.addUser({userName: "John", socketId:"abc-12234"})
    //Then
    assert.deepEqual(userService.users, [{userName: "John", socketId:"abc-12234"}])

})
