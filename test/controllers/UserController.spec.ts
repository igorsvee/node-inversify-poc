// import 'mocha';
import supertest from "supertest";
import 'reflect-metadata';

import chai from 'chai';

import {user1, user2} from "../../src/services/user/DummyUserService";
import server from "../../src/server";

const expect = chai.expect;

describe('UserController test', function () {

    it("/users endpoint works", (done) => {

        supertest(server).get("/users")
            .expect(200)
            .then(res => {
                expect(res.body).to.eql({data: [user1, user2]});
                done();
            });

    });

    it("/users/:id endpoint works", (done) => {

        supertest(server).get("/users/123")
            .expect(200)
            .then(res => {
                expect(res.body).to.eql({data: user1});
                done();
            });

    });

});