import request from "supertest";
import http from "../../src/app"
import {Express} from "express";

let server: Express

describe('APP should say "Hello guys"', () => {
    beforeAll(() => {
        server = http;
    });

    it('should return 200',  (done) => {
        request(server)
            .get('/api')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body).toMatchObject({'message': `Hello guys`})
                done()
            })
    });
});
